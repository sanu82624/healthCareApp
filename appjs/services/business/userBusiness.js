
angular.module('cmaManagementApp')
  .factory('userBusiness', function (userData) {
    
    var userBusiness = {};
    
    userBusiness.createNewRequest = function(request) {
        
        return userData.createNewRequest(request);
    };
	
	userBusiness.loadMyRequests = function(userId) {
        
        return userData.loadMyRequests(userId);
    };

	return userBusiness;
  });