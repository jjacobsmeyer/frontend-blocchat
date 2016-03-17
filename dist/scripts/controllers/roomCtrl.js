(function() {
    function RoomCtrl(Room) {
        var self = this;
        self.foo = "Test Text";
        self.all = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();