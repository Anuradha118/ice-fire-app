myApp.controller('bookController',['$http','$q','$routeParams','IceFireService',function($http,$q,$routeParams,IceFireService) {

    //create a context
    var main = this;
    this.bookId=$routeParams.id;
    // console.log(main.bookId);
    this.pageHeading = 'Ice and Fire';
    this.pageSubHeading = 'A collection of  all information about a popular TV Series Game of Thrones and its related book series';
    this.authors='';
    this.publisher;
    this.releaseDate;
    this.numberOfPages;
    this.name;
    // this.baseUrl = 'https://anapioficeandfire.com/api/';
  
    this.loadBook = function(){
      IceFireService.getBook(main.bookId)
      .then(function(response){
          console.log(response);
            if(!response.data.name){
              main.name="Name not available";
            }else{
              main.name=response.data.name;
            }
        if(!response.data.authors[0]){
          main.authors="Author not available";
        }else{
          main.authors = response.data.authors[0];
        }
        if(!response.data.publisher){
          main.publisher="Publisher Not available";
        }else{
          main.publisher=response.data.publisher;
        }
        main.releaseDate=response.data.released;
        main.numberOfPages=response.data.numberOfPages;
        // console.log(response.data.released);
      })
    }// end load all blogs
     this.loadBook();
  }]);