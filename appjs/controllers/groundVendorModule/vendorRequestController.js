
angular.module('cmaManagementApp').controller('vendorRequestController',[
	'commonUtility', 'vendorBusiness', '$nativeAPI', '$rootScope',
	function(commonUtility, vendorBusiness, $nativeAPI, $rootScope){
		
		var vm = this;
		
		vm.requests = [];
		
		function initialized(){
			loadRaisedRequests();
		}
		
		function loadRaisedRequests(){
			/*vendorBusiness.getRaisedRequests("AMB").then(function(response){
				vm.requests = response.data.result;
				console.info(vm.requests);
			}, function(error){
				
			});*/
			if($rootScope.requests !== null){
				for(var index = 0; index < $rootScope.requests.length; index++){
					if($rootScope.requests[index].status === "New" && 
						$rootScope.requests[index].type === $rootScope.vendorType){
							vm.requests.push($rootScope.requests[index]);
						}
				}
			}
		}
		
		vm.onHomeClick = function(){
			commonUtility.redirectTo("appHome");
		};
		
		initialized();
	}
]);