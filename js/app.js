var bankAccountApp = angular.module("bankAccountApp", ["ngRoute"]); //call module and add it to head (needed for routing in versions > 1.1.6)

//configure routes
bankAccountApp.config(function($routeProvider) {

	//To change/remove hash in url, server-side configuring required, along with $locationProvider.html5Mode modification

	//just need to enter the object once, then chain the statements
	$routeProvider

	//route for main page
	.when("/", {
		templateUrl: "views/accountSummary.html",
		controller: "mainController"
	})

	//route for deposits page
	.when("/deposits", {
		templateUrl: "views/deposits.html",
		controller: "depositsController"
	})

	//route for deposits page
	.when("/withdrawals", {
		templateUrl: "views/withdrawals.html",
		controller: "withdrawalsController"
	});

})

//controllers for the different "pages"
bankAccountApp.controller("mainController", function($scope){
	$scope.message = "main page";
});

bankAccountApp.controller("depositsController", function($scope){
	$scope.message = "deposits page";
});

bankAccountApp.controller("withdrawalsController", function($scope){
	$scope.message = "withdrawals page";
});