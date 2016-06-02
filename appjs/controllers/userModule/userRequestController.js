
angular.module('cmaManagementApp').controller('userRequestController',[
	'commonUtility', 'defaultValues', 'userBusiness', '$nativeAPI', 'messages',
	function(commonUtility, defaultValues, userBusiness, $nativeAPI, messages){
		
		var vm = this;
		vm.myRequests = [];
		
		vm.serviceTypes = [
			{
				code : 'AMB', 
				desc: 'Ambulance',
				symbol: 'glyphicon glyphicon-plus'
			},
			{
				code : 'MED', 
				desc: 'Medicine',
				symbol: 'glyphicon glyphicon-tint'
			},
			{
				code : 'ASST', 
				desc: 'Medical Assistance',
				symbol: 'glyphicon glyphicon-adjust'
			},
			{
				code : 'DOC', 
				desc: 'Doctor',
				symbol: 'glyphicon glyphicon-plus-sign'
			}];
		
		vm.onBacktoUserHome = function(){
			commonUtility.redirectTo("userLanding");
		};
		
		vm.createNewRequest = function(serviceType){
			var request = {};
			request.type = serviceType;
			request.latitude = 0;
			request.longitude = 0;
			request.clientId = 1;
			request.channel = defaultValues.REQUEST_CHANNEL;
			
			userBusiness.createNewRequest(request).then(function(response){
				$nativeAPI.showAlert(messages.CREATE_REQUEST_SUCCESS);
				commonUtility.redirectTo("userLanding");
			}, function(error){
				$nativeAPI.showAlert(messages.CREATE_REQUEST_ERROR);
			});
		};
		
		vm.onloadMyRequests = function(){
			userBusiness.loadMyRequests(1).then(function(response){
				vm.myRequests = response.data.result;
				console.info(vm.myRequests);
			}, function(error){
				console.info('asdsad');
			});
		};
	}
]);