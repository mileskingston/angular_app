var myApp = angular.module('myApp', []);

myApp.controller('myAppCtrl', function($scope, $http) {
	$http.get('phones.json').success(function(data) {
		$scope.phone = data;
	});
	$scope.orderProp = 'age';

	// $scope.phones = [
	//     {'name': 'Nexus S',
	//      'snippet': 'Fast just got faster with Nexus S.',
	//      'age': '7'},
	//     {'name': 'Motorola XOOM with Wi-Fi',
	//      'snippet': 'The Next, Next Generation tablet.',
	//  	'age': '3'},
	//     {'name': 'MOTOROLA XOOM',
	//      'snippet': 'The Next, Next Generation tablet.',
	//  	'age': '2'},
	//     {'name': 'LG something',
	//      'snippet': 'The Next, Next Generation tablet.',
	//      'age': '5'},
	//     {'name': 'Samsung Galaxy 6',
	//      'snippet': 'The Next, Next Generation tablet.',
	//      'age': '4'},
	//     {'name': 'iPhone 6',
	//      'snippet': 'The Next, Next Generation tablet.',
	//      'age': '1'},
	//     {'name': 'Nokia 3310',
	//      'snippet': 'The Next, Next Generation tablet.',
	//      'age': '8'},
 //  	];		
});