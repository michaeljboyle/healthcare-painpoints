app.controller('submitCtrl', ['$scope', '$rootScope', '$location', 'postService',
               function($scope, $rootScope, $location, postService) {
  
  $scope.post = new postService();

  $scope.submit = function() {
    $scope.post.$save(function() {
      $location.path('/');
    });
  }
}]);