(function() {
    function RoomCtrl(Room, $uibModal) {
        var self = this;
        self.all = Room.all;
        
        self.createRoom = function () {
            console.log("open");
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                resolve: { 
                    rooms: function() {
                        return self.rooms;
                    }
                }
            });
        };
    };

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();