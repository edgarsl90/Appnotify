angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $rootScope) {
    // Flag for video Configuration
    //$scope.streamingVideoReady = false;
    // Getting Apps Icons according to current platform
    if ( ionic.Platform.isAndroid() )
    {
      $rootScope.styles = 
        {
          home:'icon ion-android-home',
          servicios:'icon ion-briefcase',
          account:'icon ion-gear-a',
          notificaciones:'icon ion-paper-airplane',
          suscripciones:'icon ion-social-buffer-outline',
          signs:'icon ion-android-sad',
        };
    } else 
    {
      $rootScope.styles =
        {
          home:'icon ion-ios-home-outline',
          servicios:'icon ion-ios-briefcase-outline',
          account:'icon ion-ios-gear-outline',
          notificaciones:'ion-ios-paperplane-outline',
          suscripciones:'icon ion-social-buffer',
          signs:'icon ion-sad-outline',
        };
    }
    $scope.styles = $rootScope.styles;
})

.controller('DashCtrl', function($scope, Promociones) {
  $scope.promociones = Promociones.all();
})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    
  };
})


.controller('UserCtrl', function($scope, $stateParams) {
  
})

.controller('loginCtrl', function($scope, $stateParams) {
  
})

.controller('registroCtrl', function($scope, $stateParams) {
  
})

.controller('NotificacionesCtrl', function($scope, Notificaciones) {
    $scope.notificaciones = Notificaciones.all();
})

.controller('SuscripcionesCtrl', function($scope, Chats) { 
    $scope.chats = Chats.all(); 
})


.controller('notificacionesDetailCtrl', function($scope, $stateParams, Notificaciones){
  $scope.notificacion = Notificaciones.get($stateParams.notiId);
})

.controller('suscripcionesDetailCtrl', function($scope, $stateParams, Chats){
  $scope.chat = Chats.get($stateParams.chatId);
})

