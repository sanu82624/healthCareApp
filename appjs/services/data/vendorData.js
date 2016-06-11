
angular.module('cmaManagementApp')
  .factory('vendorData', function (dataLayer, relativeUrls) {
    
    var vendorData = {};
    
    vendorData.getRaisedRequests = function(requestType) {
        
        return dataLayer.postAsync(relativeUrls.VENDOR_RAISED_REQUEST, requestType);
    };
	
	return vendorData;
  });
