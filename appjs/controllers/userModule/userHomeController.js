
angular.module('cmaManagementApp').controller('userHomeController',['commonUtility',
	function(commonUtility){
		
		var vm = this;
		
		vm.onHomeClick = function(){
			commonUtility.redirectTo("appHome");
		};
		
		vm.onNewRequestClick = function(){
			commonUtility.redirectTo("newReq");
		};
		
		vm.onMyRequestClick = function(){
			commonUtility.redirectTo("myReq");
		};
	}
]);