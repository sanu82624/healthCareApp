
angular.module('routerConfigModule', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		
		$routeProvider.
			when('/userLanding',
				{
					templateUrl: 'views/userlanding.html',
					controller: 'userHomeController as vm'
				}).
			when('/serviceManagementHome',
				{
					templateUrl: 'views/serviceManagementLanding.html',
					controller: 'serviceManagementController'
				}).
			when('/onGroundVendorHome',{
					templateUrl: 'views/onGroundVendorLanding.html',
					controller: 'onGroundVendorController as vm'
			}).
			when('/monitoringGroupHome',{
					templateUrl: 'views/monitoringGroupLanding.html',
					controller: 'monitoringGroupController as vm'
			}).
			when('/appHome',{
					templateUrl	: 'views/appHome.html',
					controller: 'appHomeController as vm'
			}).
			when('/newReq',{
					templateUrl	: 'views/userNewRequest.html',
					controller: 'userRequestController as vm'
			}).
			when('/myReq',{
					templateUrl	: 'views/userMyRequest.html',
					controller: 'userRequestController as vm'
			}).
			otherwise({

				redirectTo : '/appHome'
			});
}]);