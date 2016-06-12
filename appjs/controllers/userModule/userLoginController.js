
angular.module('cmaManagementApp').controller('userLoginController',[
	'messages', 'userBusiness', 'commonUtility', '$nativeAPI',
	function(messages, userBusiness, commonUtility, $nativeAPI){
		
		var vm = this;
		
		vm.emailMsg = messages.VALID_EMAIL;
		vm.passMsg = messages.VALID_PASS;
		
		vm.onLoginClick = function(){
			commonUtility.redirectTo("userLanding");
			/*userBusiness.validateUser(vm.email,vm.pass).then(function(response){
				if(response.data.success){
					commonUtility.redirectTo("userLanding");
				} else{
					$nativeAPI.showAlert(messages.USER_LOGIN_WRONG);
				}
			}, function(error){
				$nativeAPI.showAlert(messages.USER_LOGIN_FAIL);
			});*/
		};
		
		vm.onCreateAccountClick = function(){
			commonUtility.redirectTo("reg");
		};
	}
]);