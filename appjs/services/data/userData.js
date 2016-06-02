
angular.module('cmaManagementApp')
  .factory('userData', function (dataLayer, relativeUrls) {
    
    var userData = {};
    
    userData.createNewRequest = function(request) {
        
        return dataLayer.postAsync(relativeUrls.CREATE_REQUEST, request);
    };
	
	userData.loadMyRequests = function(userId) {
        
        return dataLayer.getAsync(relativeUrls.MY_REQUEST + userId);
    };
	
	return userData;
  });
