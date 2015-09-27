app.config(function ($stateProvider) {
    $stateProvider.state('discover-1', {
        url: '/discover-1',
        templateUrl: 'js/discover/discover.html',
        controller: function($rootScope, $scope) {
    		$scope.pageNumber = 1;
    		$scope.pageClass = 'discover-1';
    		$scope.currArtist = $rootScope.influenceTimeLine[$scope.pageNumber - 1];
		}
    });

    $stateProvider.state('discover-2', {
        url: '/discover-2',
        templateUrl: 'js/discover/discover.html',
        controller: function($rootScope, $scope) {
    		$scope.pageNumber = 2;
    		$scope.pageClass = 'discover-2';
    		$scope.currArtist = $rootScope.influenceTimeLine[$scope.pageNumber - 1];
		}
    });

    $stateProvider.state('discover-3', {
        url: '/discover-3',
        templateUrl: 'js/discover/discover.html',
        controller: function($rootScope, $scope) {
    		$scope.pageNumber = 3;
    		$scope.pageClass = 'discover-3';
    		$scope.currArtist = $rootScope.influenceTimeLine[$scope.pageNumber - 1];
		}
    });

    $stateProvider.state('discover-4', {
        url: '/discover-4',
        templateUrl: 'js/discover/discover.html',
        controller: function($rootScope, $scope) {
    		$scope.pageNumber = 4;
    		$scope.pageClass = 'discover-4';
    		$scope.currArtist = $rootScope.influenceTimeLine[$scope.pageNumber - 1];
		}
    });

    $stateProvider.state('discover-5', {
        url: '/discover-5',
        templateUrl: 'js/discover/discover.html',
        controller: function($rootScope, $scope) {
    		$scope.pageNumber = 5;
    		$scope.pageClass = 'discover-5';
    		$scope.currArtist = $rootScope.influenceTimeLine[$scope.pageNumber - 1];
		}
    });

    $stateProvider.state('discover-6', {
        url: '/discover-6',
        templateUrl: 'js/discover/discover.html',
        controller: function($rootScope, $scope) {
    		$scope.pageNumber = 6;
    		$scope.pageClass = 'discover-6';
    		$scope.currArtist = $rootScope.influenceTimeLine[$scope.pageNumber - 1];
		}
    });

    $stateProvider.state('discover-7', {
        url: '/discover-7',
        templateUrl: 'js/discover/discover.html',
        controller: function($rootScope, $scope) {
    		$scope.pageNumber = 7;
    		$scope.pageClass = 'discover-7';
    		$scope.currArtist = $rootScope.influenceTimeLine[$scope.pageNumber - 1];
		}
    });

    $stateProvider.state('discover-8', {
        url: '/discover-8',
        templateUrl: 'js/discover/discover.html',
        controller: function($rootScope, $scope) {
    		$scope.pageNumber = 8;
    		$scope.pageClass = 'discover-8';
    		$scope.currArtist = $rootScope.influenceTimeLine[$scope.pageNumber - 1];
		}
    });

    $stateProvider.state('discover-9', {
        url: '/discover-9',
        templateUrl: 'js/discover/discover.html',
        controller: function($rootScope, $scope) {
    		$scope.pageNumber = 9;
    		$scope.pageClass = 'discover-9';
    		$scope.currArtist = $rootScope.influenceTimeLine[$scope.pageNumber - 1];
		}
    });

    $stateProvider.state('discover-10', {
        url: '/discover-10',
        templateUrl: 'js/discover/discover.html',
        controller: function($rootScope, $scope) {
    		$scope.pageNumber = 10;
    		$scope.pageClass = 'discover-10';
    		$scope.currArtist = $rootScope.influenceTimeLine[$scope.pageNumber - 1];
		}
    });
});
