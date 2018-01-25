
// first we have to declare the module. note that [] is where we will declare the dependecies later. Right now we are leaving it blank
var myApp = angular.module('blogApp', ['ngRoute']); 


// this is without $scope
// myApp.controller('mainController',['$http','$q','IceFireService',function($http,$q,IceFireService) {

//   //create a context
//   var main = this;


//   this.pageHeading = 'Ice and Fire';
//   this.pageSubHeading = 'A collection of  all information about a popular TV Series Game of Thrones and its related book series'
  
//   // i knew the result is going to be array, so i declared an empty array to initialize
//   this.views = [];
//   // console.log(this.blogs);

//   this.baseUrl = 'https://anapioficeandfire.com/api/';

//   this.loadAll = function(){
//     var characters=IceFireService.getAllCharacters();
//     // // characters.then(function(response){
//     // //   console.log(response);
//     // })
//     // console.log(characters); 
//     var books = IceFireService.getAllBooks();
//     var houses = IceFireService.getAllHouses();
//     // books.then(function(response){
//     //   console.log(response.data.length);
//     // })
//     $q.all([characters,books,houses]).then(function(response){
//       // console.log(response);
//       for(var i in response){
//         // console.log(response[i].data);
//         for(var j in response[i].data)
//         main.views.push(response[i].data[j]);
//       }
//       // console.log(main.views);
//     })

//   }// end load all blogs
//    this.loadAll();
// }]); // end controller





myApp.controller('singleBlogController',['$http',function($http) {

  //create a context
  var main = this;


  this.pageHeading = '';
  this.pageSubHeading = ''
 

  this.getParameterByName = function(name){

      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


  }// end get parameter by name

  this.blogId = this.getParameterByName('blogId');

  console.log(this.blogId);


  this.baseUrl = 'http://ec2-52-77-247-196.ap-southeast-1.compute.amazonaws.com:3000/api/blogs';

  this.loadSingeBlog = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl+'/'+main.blogId
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          main.blog = response.data.data;
          console.log(main.blog);

          main.pageHeading = main.blog.heading;
          main.pageSubHeading = main.blog.subHeading;
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller



myApp.controller('blogCreateController',['$http',function($http) {

  //create a context
  var main = this;


  this.pageHeading = 'Create a blog post';
  this.pageSubHeading = 'please fill all the data'
 

  this.baseUrl = 'http://ec2-52-77-247-196.ap-southeast-1.compute.amazonaws.com:3000/api/blogs';

  this.createPost = function(){

      var myData = {

          heading     : main.heading,
          subHeading  : main.subHeading,
          bodyHtml    : main.bodyHtml,
          author      : main.author


      }

      console.log(myData);
   
      $http({
        method: 'POST',
        data  : myData,
        url: main.baseUrl+'/create'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          alert("blog created successfully");
          window.location = 'post.html?blogId='+response.data.data.blogId;
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller