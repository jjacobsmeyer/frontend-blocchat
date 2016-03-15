(function() {
    function LandingCtrl() {
        this.foo = "Test Text";
    }
    
    angular
        .module('blocChat')
        .controller('LandingCtrl', LandingCtrl);
})();