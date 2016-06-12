
angular.module('cmaManagementApp').controller('groundVendorLoginController',[
	'messages', 'vendorBusiness', 'commonUtility', '$nativeAPI', '$rootScope',
	function(messages, vendorBusiness, commonUtility, $nativeAPI, $rootScope){
		
		var vm = this;
		
		vm.emailMsg = messages.VALID_EMAIL;
		vm.passMsg = messages.VALID_PASS;
		
		vm.onLoginClick = function(){
			$rootScope.vendorType = "AMB";
			commonUtility.redirectTo("groundVendorHome");
			
			/*vendorBusiness.validateUser(vm.email, vm.pass).then(function(response){
				if(response.data.success){
					commonUtility.redirectTo("groundVendorHome");
				} else{
					$nativeAPI.showAlert(messages.USER_LOGIN_WRONG);
				}
			}, function(error){
				$nativeAPI.showAlert(messages.USER_LOGIN_FAIL);
			});*/
		};
		
		vm.onCreateAccountClick = function(){
			commonUtility.redirectTo("vendorReg");
		};
	}
]);