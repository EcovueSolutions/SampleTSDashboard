import * as $ from 'jquery';
export function configs(){
    let configs:any = {};
    $.ajax({
        url: "https://wcidev.ecovues.com/dashboardwebservices/resources/dashboard/configs", type: 'GET', dataType: 'json', 
        async: false, headers: { "Authorization": "Basic " + btoa('prachaveti' + ":" + 'Welcome1') },
        success: function (result) {
            console.log('Configs API status: Success');
            var fields = result.items;
            for (var i = 0; i < fields.length; i++) {
                configs[fields[i].configs_name] = fields[i].configs_value;
            }

            sessionStorage.setItem('configs', JSON.stringify(configs));
            // toDataURL('css/onevue/0.0.1/web/onevue-images/Ecovues.png', function (dataUrl) {
            //     configs.localImageString = dataUrl;
            // });
        },
        error: function (data, err) {
        }
    });
}