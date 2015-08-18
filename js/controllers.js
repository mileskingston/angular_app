var myApp = angular.module('myApp', []);
myApp.controller('myAppCtrl', function($scope, $http) {
	$http.get('phones.json')
	.success(function(data, status, headers, config) {
		$scope.phone = data;
	});
	.error(function(data, status, headers, config) {
    	console.log('error');
  	});
	// $scope.orderProp = 'age';		
});

myApp.config(['$httpProvider', function($httpProvider) { // For Chrome
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);