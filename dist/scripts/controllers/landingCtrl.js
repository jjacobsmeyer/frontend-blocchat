(function() {
    function LandingCtrl(Room) {
        var self = this;
        self.foo = "Test Text";
        self.rooms = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();