
angular.module('cmaManagementApp').controller('userHomeController',['commonUtility',
	function(commonUtility){
		
		var vm = this;
		
		vm.onNewRequestClick = function(){
			commonUtility.redirectTo("newReq");
		};
		
		vm.onMyRequestClick = function(){
			commonUtility.redirectTo("myReq");
		};
		
		vm.onProfileClick = function(){
			commonUtility.redirectTo("userProfile");
		};
		
		vm.onLogoutClick = function(){
			commonUtility.redirectTo("appHome");
		};
	}
]);