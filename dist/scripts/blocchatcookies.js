(function(){
    function BlocChatCookies($cookies, $uibModal) {
        console.log($cookies.chatRoomCurrentUser);
        if (!$cookies.chatRoomCurrentUser || $cookies.chatRoomCurrentUser === '') {
            console.log("open");
            $uibModal.open({
                templateUrl: '/templates/login.html',
                controller: 'LoginCtrl',
                size: 'sm',
                backdrop: 'static',
                keyboard: false
            });
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();