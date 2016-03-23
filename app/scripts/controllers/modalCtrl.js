
(function () {
    function ModalCtrl($scope, $uibModalInstance, Room) {
        var self = this;
        
        self.addRoom = function(room){
            Room.addRoom(room);
        };
        
        $scope.createRoom = function(){
            self.addRoom($scope.room);
            $uibModalInstance.close();
        };
        
        $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl])
})();

