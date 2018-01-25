//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'myDetails'
        })
        .when('/characters/:id',{
        	templateUrl     : 'views/character-view.html',
        	controller 		: 'characterController',
        	controllerAs 	: 'myCharacter'
        })
        .when('/books/:id',{
        	templateUrl     : 'views/book-view.html',
        	controller 		: 'bookController',
        	controllerAs 	: 'myBook'
        })
        .when('/houses/:id',{
        	templateUrl     : 'views/house-view.html',
        	controller 		: 'houseController',
        	controllerAs 	: 'myHouse'
        })
        // .when('/match/:roundname/:teamname',{

        // 	templateUrl     : 'views/match-view.html',
        // 	controller 		: 'singleMatchController',
        // 	controllerAs 	: 'singleMatch'
        // })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);