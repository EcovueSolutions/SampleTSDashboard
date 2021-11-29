let configs = { "dashboardservices": "https://wcidev.ecovues.com/dashboardwebservices/resources/", "authCredentials": "" };
let password = "Welcome1";
let username = "prachaveti";
configs.authCredentials = btoa(username + ":" + password);

export const loadConfigs = async () => {
    let configs = sessionStorage.getItem('configs')
    console.log('Get Configurations from local storage before loading Configs API: ' + JSON.stringify(configs));
    if (configs == null) {
        console.log('Invoking Configs Async Function');
        await configsApi()
            .then(data => {
                console.log("Setting configurations to Local storage");
                sessionStorage.setItem('configs', data);
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
    let response = await fetch( "https://wcidev.ecovues.com/dashboardwebservices/resources/dashboard/configs", fetchData);
    let result = await response.json();
    console.log('After configs API completed');
    return result;
}
