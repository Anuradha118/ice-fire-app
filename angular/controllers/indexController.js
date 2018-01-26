myApp.controller('mainController',['$http','$q','$filter','IceFireService',function($http,$q,$filter,IceFireService) {

    //create a context
    var main = this;
  
    this.sortType='name';
    this.sortReverse=false;
    this.currentPage=0;
    this.pageSize=13;
    this.searchText='';
    this.searchCharacter='';
    this.pageHeading = 'Ice and Fire';
    this.pageSubHeading = 'A collection of  all information about a popular TV Series Game of Thrones and its related book series'
    
    this.views = [];
    

    this.getData = function () {

      return $filter('filter')(main.views, main.searchText)
    
       };
    
    this. numberOfPages=function(){
      return Math.ceil(main.getData().length/main.pageSize);                
     };
  
    this.loadAll = function(){
      var characters=IceFireService.getAllCharacters();
      var books = IceFireService.getAllBooks();
      var houses = IceFireService.getAllHouses();
      $q.all([characters,books,houses]).then(function(response){
        for(var i in response){
          for(var j in response[i].data)
          main.views.push(response[i].data[j]);
          // console.log(main.views);
        }
      })
  
    }
     this.loadAll();
  }]);

  myApp.filter('startFrom', function() {
    return function(input, start) {
    start = +start; //parse to int
    return input.slice(start);
   }
  });

  myApp.filter('filterAuthor',function(){
    return function(input,searchText){
      if(!searchText){
        return input;
      }
      var res=[];
      searchText=searchText.toLowerCase();
      angular.forEach(input,function(item){
        if(item.url.search('books')>-1){
          // console.log(item);
          for(var i in item.authors){
            if(item.authors[i].toLowerCase().indexOf(searchText)!==-1){
              res.push(item);
            }
          }          
        }else if(item.url.search('characters')>-1){
          // console.log(item);
          for(var i in item.aliases){
            if(item.aliases[i].toLowerCase().indexOf(searchText)!==-1 || item.name.toLowerCase().indexOf(searchText)!==-1){
              res.push(item);
            }
          }
        }
        // else if(item.url.search('houses')>-1){
        //   // console.log(item);
        //   for(var i in item.name){
        //     if(item.name.toLowerCase().indexOf(searchText)!==-1){
        //       res.push(item);
        //     }
        //   }
        // }
      });
      return res;
    };
  });

  