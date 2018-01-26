myApp.controller('characterController',['$http','$q','$routeParams','IceFireService',function($http,$q,$routeParams,IceFireService) {

    //create a context
    var main = this;
    this.charId=$routeParams.id;
    this.isLoading=false;  
    this.pageHeading = 'Ice and Fire';
    this.pageSubHeading = 'A collection of  all information about a popular TV Series Game of Thrones and its related book series';
    this.aliases='';
    this.culture;
    this.gender;
    this.books=[];
    this.allegiances=[];
    this.name;
    this.father;
    this.rolePlayedBy=[];
    this.titles=[];
    this.baseUrl = 'https://anapioficeandfire.com/api/';
  
    this.loadCharacter = function(){
      IceFireService.getCharacter(main.charId)
      .then(function(response){
        console.log(response);
        main.isLoading=true;
        if(!response.data.name){
          main.name="Not available";
        }else{
          main.name=response.data.name;
        }
        if(!response.data.aliases[0]){
          main.aliases="Not available";
        }else{
          main.aliases = response.data.aliases[0];
        }
        if(!response.data.culture){
          main.culture="Not available";
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
        IceFireService.getDetails(response.data.father)
          .then(function(response){
            if(!response.data.name){
              main.father="Not available";
            }else{
              main.father=response.data.name;
            }
          })
        if(response.data.allegiances.length==0){
          main.allegiances.push("Not available");
        }else{
          for(var i in response.data.allegiances){
            IceFireService.getDetails(response.data.allegiances[i])
              .then(function(response){
                if(!response.data.name){
                  main.allegiances.push("Not available");
                }else{
                  main.allegiances.push(response.data.name);
                }
              })
          }
        }

        for(var i in response.data.titles){
          if(!response.data.titles[i]){
            main.titles.push("Not Available");
          }else{
            main.titles.push(response.data.titles[i]);
          }
        }

        for(var i in response.data.playedBy){
          if(!response.data.playedBy[i]){
            main.rolePlayedBy.push("Not Available");
          }else{
            main.rolePlayedBy.push(response.data.playedBy[i]);
          }
        }
        // main.books=response.data.books[0];
        main.gender=response.data.gender;
        // console.log(main.name);
      })
    }// end load all blogs
     this.loadCharacter();
  }]);