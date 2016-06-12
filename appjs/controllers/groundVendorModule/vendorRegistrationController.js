
angular.module('cmaManagementApp').controller('vendorRegistrationController',[
	'validationPattern', 'messages', 'vendorBusiness', 'commonUtility', '$nativeAPI',
	'$rootScope',
	function(validationPattern, messages, vendorBusiness, commonUtility, $nativeAPI,
	$rootScope){
		
		var vm = this;
		
		vm.validName = validationPattern.NAME;
		vm.validEmail = validationPattern.EMAIL;
		vm.validPhone = validationPattern.PHONE;
		vm.emailMsg = messages.VALID_EMAIL;
		vm.passMsg = messages.VALID_PASS;
		
		function initialized(){
			
		}
		
		vm.onSaveClick = function(){
			
		};
		
		vm.onCancelClick = function(){
			commonUtility.redirectTo("vendorLogin");
		};
		
		initialized();
	}
]);