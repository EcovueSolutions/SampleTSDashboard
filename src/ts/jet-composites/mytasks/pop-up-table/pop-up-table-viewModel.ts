"use strict";

import * as ko from "knockout";
import componentStrings = require("ojL10n!./resources/nls/pop-up-table-strings");
import Context = require("ojs/ojcontext");
import Composite = require("ojs/ojcomposite");
import "ojs/ojknockout";

export default class ViewModel implements Composite.ViewModel<Composite.PropertiesType> {
    busyResolve: (() => void);
    composite: Element;
    messageText: ko.Observable<string>;
    properties: Composite.PropertiesType;
    res: { [key: string]: string };
    context: Composite.ViewModelContext<Composite.PropertiesType>;

    constructor(context: Composite.ViewModelContext<Composite.PropertiesType>) {        
        //At the start of your viewModel constructor
        const elementContext: Context = Context.getContext(context.element);
        const busyContext: Context.BusyContext = elementContext.getBusyContext();
        const options = {"description": "Web Component Startup - Waiting for data"};
        this.busyResolve = busyContext.addBusyState(options);

        this.composite = context.element;
        let parentVal = context.properties.parentVal;
        console.log('parentVal:'+parentVal?.val);

        //Example observable
        this.messageText = ko.observable("Hello from "+ parentVal?.val);
        this.properties = context.properties;
        this.res = componentStrings["pop-up-table"];

        //Once all startup and async activities have finished, relocate if there are any async activities
        this.busyResolve(); 
    }

    setModel=(data)=>{

        console.log('Data passed from parent: '+data);

    }

    closeComposite=()=>{
        let params = {
            'bubbles': true,
            'detail': {
                'value': 'onevue'
            }
        };
        this.composite.dispatchEvent(new CustomEvent('actionButtonClick', params));
    
      }

    //Lifecycle methods - implement if necessary 

    activated(context: Composite.ViewModelContext<Composite.PropertiesType>): Promise<any> | void {
    
    };

    connected(context: Composite.ViewModelContext<Composite.PropertiesType>): void {
    
    };

    bindingsApplied(context: Composite.ViewModelContext<Composite.PropertiesType>): void {
    
    };

    propertyChanged(context: Composite.PropertyChangedContext<Composite.PropertiesType>): void {
    
    };

    disconnected(element: Element): void {
    
    };
};