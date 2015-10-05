/**
 * Created by sohamchakraborty on 10/5/15.
 */
(function (){
    'use strict';

    angular.module('plunker')
        .directive('createPost', function(){
            return {
                restrict: 'E',
                templateUrl : 'createPost.html',
                scope: {
                    fccPost: '='
                }
            };
        });

})();