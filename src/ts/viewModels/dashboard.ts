import * as AccUtils from "../accUtils";
import * as ko from 'knockout';
import 'ojs/ojselectsingle';
import 'ojs/ojselectcombobox';
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import { utils } from './dashboardUtils';
class DashboardViewModel {
  configsVal: ko.Observable = ko.observable("none");
  contextsDataProvider: any = ko.observable();
  readonly contextSelectedVal: ko.Observable = ko.observable();
  childVal: ko.Observable = ko.observable();
  childDataProvider: any = ko.observable();
  constructor() {

  }
  fetchSelectContextData = (url) => {
    fetch(url + "/ecoui/modelservices/rest/1/setupcontextvoapi")
      .then(response => response.json())
      .then(result => {
        this.contextsDataProvider(new ArrayDataProvider(result.items, {
          keyAttributes: 'value'
        }));

      })
      .catch(error => {
        console.log('Error while fetching setupcontextvoapi:' + error);
      });
  };
  contextValueChangedHandler = (event) => {
    console.log('Seleted Val: ' + event.detail.value);
    if (event.detail.value != null) {
      let configs = JSON.parse(sessionStorage.getItem('configs'));
      utils.getEndpoint( event.detail.value)
        .then(data => {
          let endpoint = data.items[0].ApiEndpoint;
          fetch(configs.ImagingUrl + "/ecoui/apmodelservices/rest/1/" + endpoint)
            .then(response => response.json())
            .then(result => {
              this.childDataProvider(new ArrayDataProvider(result.items, {
                keyAttributes: 'value'
              }));

            })
            .catch(error => {
              console.log('Error while fetching setupcontextvoapi:' + error);
            });
        });
    }
  };




  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {
    AccUtils.announce("Dashboard page loaded.");
    document.title = "Dashboard";
    let configs = JSON.parse(sessionStorage.getItem('configs'));
    console.log('In Dashboard transition, get configs from local storage: ' + configs.ImagingUrl);
    if (configs == null)
      this.configsVal('it is null');
    else
      this.configsVal('received object: ' + configs.ImagingUrl);
    this.fetchSelectContextData(configs.ImagingUrl);
    // implement further logic if needed
  }

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
  disconnected(): void {
    // implement if needed
  }

  /**
   * Optional ViewModel method invoked after transition to the new View is complete.
   * That includes any possible animation between the old and the new View.
   */
  transitionCompleted(): void {
    // implement if needed

  }
}

export = DashboardViewModel;
