
angular.module('cmaManagementApp').controller('vendorRequestController',[
	'commonUtility', 'vendorBusiness', '$nativeAPI', '$rootScope',
	function(commonUtility, vendorBusiness, $nativeAPI, $rootScope){
		
		var vm = this;
		
		vm.requests = [];
		
		function initialized(){
			loadRaisedRequests();
		}
		
		function loadRaisedRequests(){
			vendorBusiness.getRaisedRequests($rootScope.vendorType).then(function(response){
				vm.requests = response.data.result;
				console.info(vm.requests);
			}, function(error){
				
			});
		}
		
		vm.onBacktoVendorHome = function(){
			commonUtility.redirectTo("groundVendorHome");
		};
		
		vm.onCurrentReqClick = function(){
			commonUtility.redirectTo("vendorAllReq");
		};
		
		vm.onLogoutClick = function(){
			$rootScope.IS_SIGN_IN = false;
			$rootScope.NAME = "";
			$rootScope.ID = "";
			$rootScope.vendorType = "";
			commonUtility.redirectTo("appHome");
		};
		
		initialized();
	}
]);