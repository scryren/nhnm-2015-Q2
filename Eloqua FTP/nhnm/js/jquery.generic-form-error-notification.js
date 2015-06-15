/* 
* Version: 1
* Last Updated: 05/22/2015
* Author: Penton, Inc.
* URL: http://www.penton.com
* Brand: New Hope Natural Media & Club Industry
* Summary: Adds a generic error message under the 
* submit button if there is one or more required fields
* missing. Hides message on submit if all required fields
* are valid  
*/


$(document).ready(function() {
  $('#generic-form-error-notification').css('display','none');

    var notificationCount = 0;

  $('#submgmt').submit(function(){

    var numItems = $('.LV_invalid').length;

      if (numItems >= 1 && notificationCount == 0) {
        $('#generic-form-error-notification').css('display','initial');
        $('#generic-form-error-notification').append('<div class="first-error" style="color: #cc0000; font-size: 0.625em; font-weight: bold;">*Missing one or more required field(s)</div>'); 
        notificationCount++;
      }

      else if (numItems >= 1 && notificationCount == 1) {
        $('.first-error').css('display','none');
        $('#generic-form-error-notification').append('<div style="color: #cc0000; font-size: 0.625em; font-weight: bold;">*Still missing one or more required field(s)</div>'); 
        notificationCount++;
      }    

      else if (numItems >= 1 && notificationCount > 1) {
        notificationCount++;
      }    

      else {
        $('#generic-form-error-notification').css('display','none');        
      }
 
  });
});    