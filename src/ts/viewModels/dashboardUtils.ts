import {api} from './../apiconstants';
export class utils{
      static async getEndpoint(contextName) {
        let response = await fetch(api.dashboardservice+"/ecoui/modelservices/rest/1/setupcontextvoapi?q=ContextName='"+contextName+"'");
        let result = await response.json();
        return result;
    }
}