
angular.module('cmaManagementApp')
  .factory('vendorBusiness', function (vendorData) {
    
    var vendorBusiness = {};
    
    vendorBusiness.getRaisedRequests = function(requestType) {
        
        return vendorData.getRaisedRequests(requestType);
    };
	
	return vendorBusiness;
  });