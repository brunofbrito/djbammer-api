angular.module('myApp.services',[]).factory('Post',function($resource){
    return $resource('http://www.djbammer.net/wp-json/wp/v2/posts');
});

