myApp.controller('houseController',['$http','$q','$routeParams','IceFireService',function($http,$q,$routeParams,IceFireService) {

    //create a context
    var main = this;
    this.houseId=$routeParams.id;
    // console.log(main.bookId);
    this.pageHeading = 'Ice and Fire';
    this.pageSubHeading = 'A collection of  all information about a popular TV Series Game of Thrones and its related book series';
    this.coatOfArms='';
    this.region;
    this.releaseDate;
    this.swornMembers=[];
    this.name;
    this.isLoading=false;
    // this.baseUrl = 'https://anapioficeandfire.com/api/';
  
    this.loadHouse = function(){
      IceFireService.getHouse(main.houseId)
      .then(function(response){
          console.log(response);
          main.isLoading=true;
            if(!response.data.name){
                main.name="Name not available";
            }else{
                main.name=response.data.name;
            }
            if(!response.data.coatOfArms){
            main.coatOfArms="CoatofArms not available";
            }else{
            main.coatOfArms = response.data.coatOfArms;
            }
            if(!response.data.region){
            main.region="Publisher Not available";
            }else{
            main.region=response.data.region;
            }
            for(var i in response.data.swornMembers){
                IceFireService.getDetails(response.data.swornMembers[i])
                .then(function(response){
                    if(!response.data.name){
                        main.swornMembers.push(response.data.aliases[0]);
                    }else{
                        main.swornMembers.push(response.data.name);
                    }
                })
            }
        // main.releaseDate=response.data.released;
        // main.gender=response.data.gender;
        // console.log(main.name);
      })
    }// end load all blogs
     this.loadHouse();
  }]);