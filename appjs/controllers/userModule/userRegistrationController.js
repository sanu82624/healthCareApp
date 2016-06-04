
angular.module('cmaManagementApp').controller('userRegistrationController',[
	'validationPattern', 'messages',
	function(validationPattern, messages){
		
		var vm = this;
		
		vm.validName = validationPattern.NAME;
		vm.validEmail = validationPattern.EMAIL;
		vm.validPhone = validationPattern.PHONE;
		vm.emailMsg = messages.VALID_EMAIL;
		vm.passMsg = messages.VALID_PASS;
	}
]);