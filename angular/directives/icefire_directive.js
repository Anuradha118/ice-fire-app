myApp.directive("myCharacters",function(){

    return {
        restrict:"E",
        templateUrl:"./views/characters.html",
        controller : function($scope){
            var index=$scope.view.url.lastIndexOf('/');
            $scope.id=$scope.view.url.substring(index+1);
            if($scope.view.url.search('characters')>-1){
                if($scope.view.aliases[0].length>1 && !$scope.view.name){
                    var aliases=$scope.view.aliases[0];
                    var name=$scope.view.name;
                    $scope.view.name=aliases;
                }
            }
        }
    }
});

myApp.directive("myBooks",function(){

    return {
        restrict:"E",
        templateUrl:"./views/books.html",
        controller : function($scope){
            var index=$scope.view.url.lastIndexOf('/');
            $scope.id=$scope.view.url.substring(index+1);
            // console.log($scope.view.name);
        }
    }
});

myApp.directive("myHouses",function(){

    return {
        restrict:"E",
        templateUrl:"./views/houses.html",
        controller : function($scope){
            var index=$scope.view.url.lastIndexOf('/');
            $scope.id=$scope.view.url.substring(index+1);
            // console.log($scope.view.name);
        }
    }
});