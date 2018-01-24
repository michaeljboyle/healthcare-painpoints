(function() {
    'use strict';

    angular
        .module('PainPointsApp')
        .controller('voteCtrl', VoteController);

    VoteController.$inject = [];

    /* @ngInject */
    function VoteController() {
        var vm = this;
        vm.hasVoted = false;
        vm.post;
        vm.upvote = upvote;


        activate();

        ////////////////

        function activate() {
        }

        function upvote() {
          console.log(vm.hasVoted);
          if (!vm.hasVoted) {
            vm.post.votes += 1;
            vm.hasVoted = true;
          }
          else {
            vm.post.votes -= 1;
            vm.hasVoted = false;
          }
          vm.post.$update();
        }
    }
})();
