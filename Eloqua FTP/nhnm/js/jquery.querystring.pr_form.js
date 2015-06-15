//Append PR query string value to form field

var defaultHiddenFieldNameValue = ""; 

function getQueryStringParamValue(strQStrParam) { 

  var strURL = document.location.href; 

  var strQStrParamValue = ""; 

   if (strURL.indexOf('?') != -1)
   {
     strQStrParamValue = strURL.substr(strURL.indexOf('?') + 1);
     if (strQStrParamValue.indexOf(strQStrParam) != -1)
     {
       strQStrParamValue = strQStrParamValue.substr(strQStrParamValue.indexOf(strQStrParam));
       strQStrParamValue = strQStrParamValue.substr(strQStrParamValue.indexOf('=') + 1);
       if (strQStrParamValue.indexOf('&') != -1)
       strQStrParamValue = strQStrParamValue.substr(0, strQStrParamValue.indexOf('&'));
       return strQStrParamValue;

     } else {
       strQStrParamValue = defaultHiddenFieldNameValue;
       return strQStrParamValue;
     }

   } else {
     strQStrParamValue = defaultHiddenFieldNameValue;
     return strQStrParamValue;
   }
} 

//Append to Form Field
function setCampaign(){ 

  var elqForm = document.forms[0];
  
  if (getQueryStringParamValue('PR') != "") {
    elqForm.elements['partnerref'].value = getQueryStringParamValue('PR');
  } else if (getQueryStringParamValue('PR') != "") {
    elqForm.elements['partnerref'].value = getQueryStringParamValue('PR');
  } else {}
} 

window.onload = setCampaign;
