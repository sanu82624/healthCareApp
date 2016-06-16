
angular.module('cmaManagementApp').controller('userLoginController',[
	'messages', 'userBusiness', 'commonUtility', '$nativeAPI', '$rootScope',
	function(messages, userBusiness, commonUtility, $nativeAPI, $rootScope){
		
		var vm = this;
		
		vm.emailMsg = messages.VALID_EMAIL;
		vm.passMsg = messages.VALID_PASS;
		
		vm.onLoginClick = function(){
			userBusiness.validateUser(vm.email,vm.pass).then(function(response){
				if(response.data.success){
					$rootScope.ClientId = response.data.result.clientId;
					$rootScope.IS_SIGN_IN = response.data.success;
					$rootScope.NAME = response.data.result.name;
					commonUtility.redirectTo("userLanding");
				} else{
					$nativeAPI.showAlert(messages.USER_LOGIN_WRONG);
				}
			}, function(error){
				$nativeAPI.showAlert(messages.USER_LOGIN_FAIL);
			});
		};
		
		vm.onCreateAccountClick = function(){
			commonUtility.redirectTo("reg");
		};
	}
]);