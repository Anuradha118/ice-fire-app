myApp.controller('characterController',['$http','$q','$routeParams','IceFireService',function($http,$q,$routeParams,IceFireService) {

    //create a context
    var main = this;
    // console.log($routeParams);
    this.charId=$routeParams.id;  
    this.pageHeading = 'Ice and Fire';
    this.pageSubHeading = 'A collection of  all information about a popular TV Series Game of Thrones and its related book series'
    
    // this.char=[];
    // console.log(main.charId);
    this.aliases='';
    this.culture;
    this.gender;
    this.books;
    this.name;
    this.baseUrl = 'https://anapioficeandfire.com/api/';
  
    this.loadCharacter = function(){
      IceFireService.getCharacter(main.charId)
      .then(function(response){
        console.log(response);
        main.name=response.data.name;
        console.log(response.data.aliases[0]);
        main.aliases = response.data.aliases[0];
        main.books=response.data.books[0];
        main.culture=response.data.culture;
        main.gender=response.data.gender;
        console.log(main.name);
      })
    }// end load all blogs
     this.loadCharacter();
  }]);