let configsobj:any = JSON.parse(sessionStorage.getItem('configs'));
console.log('Configs Obj: '+configsobj);
let apmodelservice = configsobj.baseURL;
let apwebservice = configsobj.ucmUrl;
export const api={
    "modelservice": apmodelservice,
    "setupcontext": apmodelservice + "setupcontextvoapi",
    "setupcontextdetails": apmodelservice + "setupcontextdetailsvoapi",
    "contextrestendpoint": apmodelservice + "contextrestendpoint",
    "excelUploaderSelectContext": apmodelservice + "aplookuptypesvoapi?q=LookupType=",
    "excelUploaderDataColName": apmodelservice + "objectcolsvoapi?q=ObjectName='",
    "codingrules": configsobj.apwebservice + "setup/codingrules",
    "decryptUrl":apwebservice+"encryption/decrypt",
    "encryptUrl":apwebservice+"encryption/encrypt/",
    "apwebservice":apwebservice,
    "dashboardservice":configsobj.ImagingUrl
};