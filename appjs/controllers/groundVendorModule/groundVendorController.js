
angular.module('cmaManagementApp').controller('groundVendorController',[
	'commonUtility', 'vendorBusiness', '$nativeAPI',
	function(commonUtility, vendorBusiness, $nativeAPI){
		
		var vm = this;
		
		vm.requests = {};
		
		function initialized(){
			loadRaisedRequests();
		}
		
		function loadRaisedRequests(){
			vendorBusiness.getRaisedRequests("AMB").then(function(response){
				vm.requests = response.data.result;
				console.info(vm.requests);
			}, function(error){
				
			});
		}
		
		vm.onHomeClick = function(){
			commonUtility.redirectTo("appHome");
		};
		
		initialized();
	}
]);