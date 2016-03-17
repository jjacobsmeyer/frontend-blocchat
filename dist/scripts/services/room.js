(function() {
    function Room($firebaseArray) {
        var roomRef = new Firebase('https://incandescent-torch-1277.firebaseio.com/rooms');
        var rooms = $firebaseArray(roomRef);
        
        return {
            all: rooms
        };
    }
    
    angular 
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();