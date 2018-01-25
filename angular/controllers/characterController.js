myApp.controller('characterController',['$http','$q','$routeParams','IceFireService',function($http,$q,$routeParams,IceFireService) {

    //create a context
    var main = this;
    this.charId=$routeParams.id;  
    this.pageHeading = 'Ice and Fire';
    this.pageSubHeading = 'A collection of  all information about a popular TV Series Game of Thrones and its related book series';
    this.aliases='';
    this.culture;
    this.gender;
    this.books=[];
    this.name;
    this.baseUrl = 'https://anapioficeandfire.com/api/';
  
    this.loadCharacter = function(){
      IceFireService.getCharacter(main.charId)
      .then(function(response){
        console.log(response);
        if(!response.data.name){
          main.name="Name not available";
        }else{
          main.name=response.data.name;
        }
        if(!response.data.aliases[0]){
          main.aliases="Alias not available";
        }else{
          main.aliases = response.data.aliases[0];
        }
        if(!response.data.culture){
          main.culture="Culture Not available";
        }else{
          main.culture=response.data.culture;
        }
        for(var i in response.data.books){
          IceFireService.getDetails(response.data.books[i])
            .then(function(response){
              if(!response.data.name){
                main.books.push("Not available");
              }else{
                main.books.push(response.data.name);
              }
            })
        }
        // main.books=response.data.books[0];
        main.gender=response.data.gender;
        // console.log(main.name);
      })
    }// end load all blogs
     this.loadCharacter();
  }]);