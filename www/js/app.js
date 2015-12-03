angular.module('starter', ['ionic', 'starter.controller', 'starter.service', 'starter.constant'])

.run(function($ionicPlatform, $http) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  var defaultHTTPHeaders={
    'Content-Type':'application/json',
    'Accept':'application/json'
  };

  $http.defaults.headers.post=defaultHTTPHeaders;
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
  $stateProvider.state('app', {
    url:'/app',
    abstract:true,
    templateUrl:'templates/main.html',
    controller: 'PostCtrl'
  })
  .state('app.list', {
    url: '/list',
    views: {
      'content': {
        templateUrl: 'templates/list.html'
      }
    }
  })
  .state('app.receta', {
    url: '/receta',
    views: {
      'content': {
        templateUrl: 'templates/receta.html'
      }
    }
  })
  .state('app.evento', {
    url: '/evento',
    views: {
      'content': {
        templateUrl: 'templates/evento.html'
      }
    }
  })
  .state('app.relacionado', {
    url: '/relacionado',
    views: {
      'content': {
        templateUrl: 'templates/relacionado.html'
      }
    }
  })
  .state('app.ingredientes', {
    url: '/ingredientes',
    views: {
      'receta': {
        templateUrl: 'templates/receta/ingredientes.html'
      }
    }
  })
  .state('app.preparacion', {
    url: '/preparacion',
    views: {
      'receta': {
        templateUrl: 'templates/receta/preparacion.html'
      }
    }
  })
  .state('app.relacionados', {
    url: '/relacionados',
    views: {
      'receta': {
        templateUrl: 'templates/receta/relacionados.html'
      }
    }
  })
  $urlRouterProvider.otherwise('/app/list');

  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.form.checkbox('circle');
})
.directive( 'elemReady', function( $parse ) {
   return {
       restrict: 'A',
       link: function( $scope, elem, attrs ) {
          elem.ready(function(){
            $scope.$apply(function(){
                var func = $parse(attrs.elemReady);
                func($scope);
            })
          })
       }
    }
});
