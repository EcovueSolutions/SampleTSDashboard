import * as AccUtils from "../accUtils";
import * as ko from 'knockout';
class DashboardViewModel {
  configsVal: ko.Observable = ko.observable("none");
   constructor() {
 
  }

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
    let configs = sessionStorage.getItem('configs');
    console.log('In Dashboard transition, get configs from local storage: ' + JSON.stringify(configs));
    if(configs==null)
      this.configsVal('it is null');
    else
      this.configsVal('received object: '+JSON.stringify(configs));
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
