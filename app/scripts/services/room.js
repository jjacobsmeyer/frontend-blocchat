(function() {
    function Room($firebaseArray) {
        var Room = {};
    
        var roomRef = new Firebase('https://incandescent-torch-1277.firebaseio.com/rooms');
       
        Room.all = $firebaseArray(roomRef);
        
        Room.addRoom = function(room){
            rooms.$add({name: room.name,
                        create_at: Firebase.ServerValue.TIMESTAMP})
        };
        
        return Room;
    
    };
    
    angular 
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();