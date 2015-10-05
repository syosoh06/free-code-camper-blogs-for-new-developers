/**
 * Created by sohamchakraborty on 10/5/15.
 */
(function (){
    'use strict';

    angular
        .module('plunker')
        .factory('freeCodeCamperService', freeCodeCamperService);

    freeCodeCamperService.$inject = ['$http'];

    function freeCodeCamperService($http){

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
    }
})();







