(function() {
    function RoomCtrl(Room, MessageService, $scope, $uibModal, $cookies) {
        var ctrl = this;
        ctrl.all = Room.all;
        ctrl.currentRoom = null;
        
        ctrl.createRoom = function () {
            console.log("open");
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                resolve: { 
                    rooms: function() {
                        return ctrl.rooms;
                    }
                }
            });
        };
        
        ctrl.createMessage = function(){
            message = $scope.newMessage;
            message.roomId = ctrl.currentRoom.$id;
//            message.userName = "Bill";
//            message.content = "Hello Bill";
            MessageService.sendMessage(message);
        }
        
         ctrl.setMessages = function(messages){
            console.log("set messages");
            ctrl.currentMessages = messages;
        };
        
        ctrl.getMessagesByRoom = function(room){
            MessageService.getByRoomId(room.$id, ctrl.setMessages);
        };
        
        ctrl.setCurrentRoom = function(room) {
            ctrl.currentRoom = room;
            console.log(room.name)
            ctrl.getMessagesByRoom(room);
        };
        
    };

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room','MessageService', '$scope', '$uibModal', '$cookies', RoomCtrl]);
})();