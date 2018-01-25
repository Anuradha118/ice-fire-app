myApp.directive("myCharacters",function(){

    return {
        restrict:"E",
        templateUrl:"./views/characters.html",
        controller : function($scope){
            // console.log($scope.view.aliases[0]);
            if($scope.view.url.search('characters')>-1){
                if($scope.view.aliases[0].length>1){
                    // console.log("true");
                    var aliases=$scope.view.aliases[0];
                    // console.log(aliases);
                    var name=$scope.view.name;
                    $scope.view.name=aliases;
                }
                console.log($scope.view);
                // else{
                //     $scope.view.name="Character name not available";
                // }  
            }
            // console.log($scope.view.name);
        }
    }
});

myApp.directive("myBooks",function(){

    return {
        restrict:"E",
        templateUrl:"./views/books.html",
        controller : function($scope){
            // console.log($scope.view.name);
        }
    }
});

myApp.directive("myHouses",function(){

    return {
        restrict:"E",
        templateUrl:"./views/houses.html",
        controller : function($scope){
            // console.log($scope.view.name);
        }
    }
});