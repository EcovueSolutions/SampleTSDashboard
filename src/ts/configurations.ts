let configs = { "dashboardservices": "https://wcidev.ecovues.com/dashboardwebservices/resources/", "authCredentials": "" };
let password = "Welcome1";
let username = "prachaveti";
configs.authCredentials = btoa(username + ":" + password);
let sessionObj={'ab':1};

export const loadConfigs = async () => {
    let configs:any = sessionStorage.getItem('configs')
    //console.log('Get Configurations from session storage before loading Configs API: ' + configs);
    if (configs == null) {
        console.log('Invoking Configs Async Function');
        await configsApi()
            .then(data => {
                console.log("Setting configurations to Session storage");
                for (var obj of data.items) {
                    sessionObj[obj.configs_name] = obj.configs_value;
                }
                sessionStorage.setItem('configs', JSON.stringify(sessionObj));
            });
    }
}

async function configsApi() {
    let fetchData = {
        method: "GET",
        headers: new Headers({
            "Authorization": "Basic cHJhY2hhdmV0aTpXZWxjb21lMQ==",
            RequestMode: "no-cors"
        })
    };
    let response = await fetch("https://wcidev.ecovues.com/dashboardwebservices/resources/dashboard/configs", fetchData);
    let result = await response.json();
    console.log('After configs API completed');
    return result;
}
