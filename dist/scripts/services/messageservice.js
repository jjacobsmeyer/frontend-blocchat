(function(){
    function MessageService($firebaseArray){
        var MessageService = {};
        
        var messageRef = new Firebase("https://incandescent-torch-1277.firebaseio.com/messages");
        var messages = $firebaseArray(messageRef);
        
        MessageService.getByRoomId = function(roomId, callback) {
            messageRef.orderByChild('roomId').equalTo(roomId).on('value', function(snap) {
                callback(snap.val());
            });
        };
        
        MessageService.sendMessage = function(message){
            messages.$add({ userName: message.userName,
                            content: message.content,
                            sentAt: Firebase.ServerValue.TIMESTAMP,
                            roomId: message.roomId
            });
        };
        
        MessageService.bind = function(){
            return messages;
        };
        
        return MessageService;
    }
    
    angular
        .module('blocChat')
        .factory('MessageService', ['$firebaseArray', MessageService]);
})();