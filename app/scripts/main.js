angular.module('myApp', ['myApp.services', 'ngResource', 'ngSanitize'])
.controller('ngAppDemoController', function($scope, Post) {
  $scope.mixes = Post.query(function() {});
}
).filter('toTrusted', ['$sce', function($sce) {
          return function(text) {
              return $sce.trustAsHtml(text);
  };
}]);
