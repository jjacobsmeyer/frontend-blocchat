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
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/rooms.html'
            })
            .state('modal', {
                url: '/modal',
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html'
            });
            
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();