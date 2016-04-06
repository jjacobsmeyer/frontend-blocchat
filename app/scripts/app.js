(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider 
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
            })
            .state('rooms', {
                url: '/rooms',
                controller: 'RoomCtrl as roomCtrl',
                templateUrl: '/templates/rooms.html'
            })
            .state('modal', {
                url: '/modal',
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html'
            })
            .state('login', {
                url: '/login',
                controller: 'LoginCtrl as login',
                templateUrl: '/templates/login.html'
            });
            
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config);
})();