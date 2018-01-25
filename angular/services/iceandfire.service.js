myApp.service('IceFireService',function($http){
    this.baseUrl= 'https://anapioficeandfire.com/api';

    this.getAllCharacters=function (){
        return $http({method: 'GET', url: this.baseUrl+'/characters?page=1&pageSize=30', cache: 'true'});
    }

    this.getAllBooks=function (){
        return $http({method: 'GET', url: this.baseUrl+'/books?page=1&pageSize=20', cache: 'true'});
    }

    this.getAllHouses=function (){
        return $http({method: 'GET', url: this.baseUrl+'/houses?page=1&pageSize=30', cache: 'true'});
    }

    this.getCharacter=function(id){
        return $http({method:'GET',url:this.baseUrl+'/characters/'+id,cache:'true'});
    }
    this.getBook=function(id){
        return $http({method:'GET',url:this.baseUrl+'/books/'+id,cache:'true'});
    }
    this.getHouse=function(id){
        return $http({method:'GET',url:this.baseUrl+'/houses/'+id,cache:'true'});
    }

    this.getDetails=function(url){
        return $http({method:'GET',url:url,cache:'true'});
    }
})