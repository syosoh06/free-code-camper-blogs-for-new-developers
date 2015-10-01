/**
 * Created by sohamchakraborty on 9/30/15.
 */
var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http, freeCodeCamperService) {
    $scope.name = 'World';

    var vm=this;
    vm.data={};
    vm.data.posts=[];
    vm.getPosts = getPosts;
    vm.activate = activate;

    function activate(){
        getPosts();
    }

    function getPosts(){
        freeCodeCamperService.getPostsRequest().then(function(response){
            console.log('success', response);
            vm.data.posts=response.data;
            console.log('array of posts', vm.data.posts);

        }, function(error){
            console.log('error', error);
        });
    }

    activate();

});

app.service('freeCodeCamperService', function($http){
    var service ={
        getPostsRequest: getPostsRequest,
        getPostsResponse: getPostsResponse
    };

    return service;
    // 2F4F4F
    function getPostsRequest(){
        return $http.get('http://www.freecodecamp.com/news/hot').then(getPostsResponse);
    }

    function getPostsResponse(response){
        modifyDate(response);
        return response;
    }

    function modifyDate(response){
        for(var i=0; i<response.data.length; i++){
            response.data[i].timePosted=new Date(response.data[i].timePosted).toDateString();
        }
    }
});

app.directive('createPost', function(){
    return {
        restrict: 'E',
        require: '^fccPost',
        templateUrl : 'createPost.html',
        scope: {
            fccPost: '='
        }
    }
})

// //search for -- https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=how+to+create+pinterest+layout+css+ng-repeat+bootstrap