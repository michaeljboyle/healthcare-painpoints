(function() {
    'use strict';

    angular
        .module('PainPointsApp')
        .controller('VotesController', VotesController);

    VotesController.$inject = ['postService'];

    /* @ngInject */
    function VotesController(postService) {
        var vm = this;
        vm.posts;

        activate();

        ////////////////

        function activate() {
          postService.query(function(posts) {
            vm.posts = posts;
            console.log(vm.posts[0]);
          });
        }
    }
})();