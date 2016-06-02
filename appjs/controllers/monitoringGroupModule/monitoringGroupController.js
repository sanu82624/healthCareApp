angular.module('cmaManagementApp').controller('monitoringGroupController',[
	'commonUtility',
	function(commonUtility){

		vm.onHomeClick = function(){
			
			commonUtility.redirectTo("appHome");
		};
	}
]);