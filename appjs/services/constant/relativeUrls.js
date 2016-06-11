'use strict';

angular.module('cmaManagementApp')
  .constant('relativeUrls', {
      
      CREATE_REQUEST: "customer/service/serviceRequest",
	  MY_REQUEST: "customer/service/serviceRequest/",
	  VENDOR_RAISED_REQUEST: "vendor/service/requests/assigned/",
	  LOGIN_VALIDATE: "customer/service/validate",
	  USER_REG: "customer/service/register"
  });