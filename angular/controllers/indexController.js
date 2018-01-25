myApp.controller('mainController',['$http','$q','IceFireService',function($http,$q,IceFireService) {

    //create a context
    var main = this;
  
  
    this.pageHeading = 'Ice and Fire';
    this.pageSubHeading = 'A collection of  all information about a popular TV Series Game of Thrones and its related book series'
    
    // i knew the result is going to be array, so i declared an empty array to initialize
    this.views = [];
    // console.log(main.pageHeading);
  
    this.baseUrl = 'https://anapioficeandfire.com/api/';
  
    this.loadAll = function(){
      var characters=IceFireService.getAllCharacters();
      // // characters.then(function(response){
      // //   console.log(response);
      // })
      // console.log(characters); 
      var books = IceFireService.getAllBooks();
      var houses = IceFireService.getAllHouses();
      // books.then(function(response){
      //   console.log(response.data.length);
      // })
      $q.all([characters,books,houses]).then(function(response){
        // console.log(response);
        for(var i in response){
          // console.log(response[i].data);
          for(var j in response[i].data)
          main.views.push(response[i].data[j]);
        }
        // console.log(main.views);
      })
  
    }// end load all blogs
     this.loadAll();
  }]);