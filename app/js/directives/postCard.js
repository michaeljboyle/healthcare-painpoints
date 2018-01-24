app.directive('postCard', function() { 
  return { 
    restrict: 'E',
    scope: {
      post: '=',
    },
    bindToController: true,
    controller: 'voteCtrl',
    controllerAs: 'vm',
    templateUrl: 'js/directives/postCard.html'
  }; 
});