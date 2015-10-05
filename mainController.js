/**
 * Created by sohamchakraborty on 10/5/15.
 */
(function (){
    'use strict';

    angular
        .module('plunker')
        .controller('mainController', mainController);


    function mainController($scope, $http, freeCodeCamperService) {


        var vm = this;
        vm.data={};
        vm.data.posts=[];
        vm.getPosts = getPosts;
        vm.activate = activate;

        activate();

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
    }

})();




