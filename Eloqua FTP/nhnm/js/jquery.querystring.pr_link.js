//Append PR query string value to #eloqua-button-link

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

//Append parameter to link
$( document ).ready(function() {

 var queryStringValue = getQueryStringParamValue('PR');

  if (getQueryStringParamValue('PR') != "") {
    $("#eloqua-button-link").attr('href', $("#eloqua-button-link").attr('href').concat(queryStringValue));
  } else if (getQueryStringParamValue('PR') != "") {
    $("#eloqua-button-link").attr('href', $("#eloqua-button-link").attr('href').concat(queryStringValue));
  } else {}
});
