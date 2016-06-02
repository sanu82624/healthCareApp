
angular.module('cmaManagementApp').controller('onGroundVendorController',['commonUtility',
	function(commonUtility){
		
		var vm = this;
		
		vm.onHomeClick = function(){
			commonUtility.redirectTo("appHome");
		};
	}
]);