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
    this.heirs;
    this.currentLord;
    this.founder;
    this.titles=[];
    this.seats=[];
    this.isLoading=false;
    // this.baseUrl = 'https://anapioficeandfire.com/api/';
  
    this.loadHouse = function(){
      IceFireService.getHouse(main.houseId)
      .then(function(response){
          console.log(response);
            if(!response.data.name){
                main.name="Name not available";
            }else{
                main.name=response.data.name;
            }
            if(!response.data.coatOfArms){
            main.coatOfArms="Not available";
            }else{
            main.coatOfArms = response.data.coatOfArms;
            }
            if(!response.data.region){
            main.region="Not available";
            }else{
            main.region=response.data.region;
            }
            if(response.data.seats.length==0){
                main.seats.push("Not Available");
            }else{
                for(var i in response.data.seats){
                    if(!response.data.seats[i]){
                        main.seats.push("Not available");
                    }else{
                        main.seats.push(response.data.seats[i]);
                    }
                }
            }
            if(response.data.titles.length==0){
                main.titles.push("Not Available");
            }else{
                for(var i in response.data.titles){
                    if(!response.data.titles[i]){
                        main.titles.push("Not available");
                    }else{
                        main.titles.push(response.data.titles[i]);
                    }
                }
            }
            if(response.data.swornMembers.length==0){
                main.swornMembers.push("Not Available");
            }else{
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
            }
            if(!response.data.founder){
                main.founder="Not available";
            }else{
                IceFireService.getDetails(response.data.founder)
                    .then(function(response){
                        if(!response.data.name){
                            main.founder="Not available";
                        }else{
                            main.founder=response.data.name;
                        }
                    })
            }
            if(!response.data.currentLord){
                main.currentLord="Not available";
            }else{
                IceFireService.getDetails(response.data.currentLord)
                    .then(function(response){
                        if(!response.data.name){
                            main.currentLord="Not available";
                        }else{
                            main.currentLord=response.data.name;
                        }
                    })
            }
            if(!response.data.heirs){
                main.heirs="Not available";
            }else{
                IceFireService.getDetails(response.data.heirs)
                    .then(function(response){
                        if(!response.data.name){
                            main.heirs="Not available";
                        }else{
                            main.heirs=response.data.name;
                        }
                    })
            }
            main.isLoading=true;
      })
    }
     this.loadHouse();
  }]);