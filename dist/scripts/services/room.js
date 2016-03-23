(function() {
    function Room($firebaseArray) {
        var roomRef = new Firebase('https://incandescent-torch-1277.firebaseio.com/rooms');
        
        var rooms = $firebaseArray(roomRef);
        
        var roomAdd = function(room){
//            console.log("add room");
            rooms.$add({name: room.name,
                        create_at: Firebase.ServerValue.TIMESTAMP})
        };
        
        return {
            all: rooms,
            addRoom: roomAdd
        };
    };
    
    angular 
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();