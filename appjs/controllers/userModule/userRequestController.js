
angular.module('cmaManagementApp').controller('userRequestController',[
	'commonUtility', 'defaultValues', 'userBusiness', '$nativeAPI', 'messages', '$rootScope',
	function(commonUtility, defaultValues, userBusiness, $nativeAPI, messages, $rootScope){
		
		var vm = this;
		vm.myRequests = [];
		
		function guid() {
		  function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
			  .toString(16)
			  .substring(1);
		  }
		  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
		}
		
		vm.serviceTypes = $rootScope.serviceTypes;
		
		vm.onBacktoUserHome = function(){
			commonUtility.redirectTo("userLanding");
		};
		
		vm.createNewRequest = function(serviceType){
			var request = {};
			request.requestId = guid(); //
			request.status = "New"; //
			request.type = serviceType;
			request.latitude = 0;
			request.longitude = 0;
			request.clientId = 1;
			request.channel = defaultValues.REQUEST_CHANNEL;
			
			if($rootScope.requests !== null && angular.isUndefined($rootScope.requests)){
				$rootScope.requests = [];
			}
			$rootScope.requests.push(request);
			$nativeAPI.showAlert(messages.CREATE_REQUEST_SUCCESS);
			/*userBusiness.createNewRequest(request).then(function(response){
				if(response.data.success){
					$nativeAPI.showAlert(messages.CREATE_REQUEST_SUCCESS);
					commonUtility.redirectTo("userLanding");
				} else{
					$nativeAPI.showAlert(messages.CREATE_REQUEST_ERROR);
				}
			}, function(error){
				$nativeAPI.showAlert(messages.CREATE_REQUEST_ERROR);
			});*/
		};
		
		vm.onLoadMyRequests = function(){
			if($rootScope.requests !== "undefined"){
				vm.myRequests = $rootScope.requests;
			} else{
				vm.myRequests = [];
			}
			
			/*userBusiness.loadMyRequests(1).then(function(response){
				vm.myRequests = response.data.result;
				console.info(vm.myRequests);
			}, function(error){
				console.info('asdsad');
			});*/
		};
	}
]);