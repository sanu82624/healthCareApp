
angular.module('cmaManagementApp').controller('appHomeController',['commonUtility',
	function(commonUtility){
	    // var deviceId =  $nativeAPI.getConfig('deviceId');

		var vm = this;
		
		vm.onServiceManagementClick = function(){
			commonUtility.redirectTo("serviceManagementHome");
		};
		
		vm.onOnGroundVendorClick = function(){
			commonUtility.redirectTo("onGroundVendorHome");
		};
		
		vm.onMonitoringGrpClick = function(){
			commonUtility.redirectTo("monitoringGroupHome");
		};
		
		vm.onUserManagementClick = function(){
			commonUtility.redirectTo("userLanding");
		};

}])