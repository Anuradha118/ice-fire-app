myApp.controller('bookController',['$http','$q','$location','$routeParams','IceFireService',function($http,$q,$location,$routeParams,IceFireService) {

    //create a context
    var main = this;
    this.bookId=$routeParams.id;
    // console.log(main.bookId);
    this.pageHeading = 'Ice and Fire';
    this.pageSubHeading = 'A collection of  all information about a popular TV Series Game of Thrones and its related book series';
    this.authors=[];
    this.publisher;
    this.releaseDate;
    this.numberOfPages;
    this.mediaType;
    this.country;
    this.name;
    this.isLoading=false;
    // this.baseUrl = 'https://anapioficeandfire.com/api/';
  
    this.loadBook = function(){
      IceFireService.getBook(main.bookId)
      .then(function(response){
          console.log(response);
          main.isLoading=true;
            if(!response.data.name){
              main.name="Name not available";
            }else{
              main.name=response.data.name;
            }
            for(var i in response.data.authors){
              if(!response.data.authors[i]){
                main.authors.push("Author not available");
              }else{
                main.authors.push(response.data.authors[i]);
              }
            }
        if(!response.data.publisher){
          main.publisher="Publisher Not available";
        }else{
          main.publisher=response.data.publisher;
        }
        main.releaseDate=response.data.released;
        main.numberOfPages=response.data.numberOfPages;
        main.mediaType=response.data.mediaType;
        main.country=response.data.country;
        // console.log(response.data.released);
      },function error(response){
        console.log(response);
        switch (response.status) {
            case 404:
              $location.path('/404');
              break;
            default:
              $location.path('/500');
          }
      })
    }
     this.loadBook();
  }]);