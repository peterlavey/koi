angular.module('starter.controller', [])
.controller('PostCtrl', ['$scope', '$rootScope', 'PostService', '$filter',
	function($scope, $rootScope, despachoService, $filter){

	$scope.getPost=function(){
		//despachoService.getDespachos().success(function(data){
		//	$scope.despachos=data;
		//});
	};

	$scope.seleccionaPost=function(id){
		//$scope.despacho=$filter('filter')($scope.despachos, function(data){return data.id == id})[0];
	};

	$scope.getPost();

	$scope.setMap=function(){
		$scope.createMap();
	};

	$scope.evento={
		direccion:{
			lat:-33.395348,
			lon:-70.681771
		}
	}

	//$scope.evento.direccion.lat=-33.395348;
	//$scope.evento.direccion.lon=-70.681771;

	$scope.createMap=function(){
		var coords= new google.maps.LatLng($scope.evento.direccion.lat, $scope.evento.direccion.lon);
		var config= {
			center: coords,
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById("map"), config);

		map.setCenter(new google.maps.LatLng($scope.evento.direccion.lat, $scope.evento.direccion.lon));
	    var myLocation = new google.maps.Marker({
	        position: new google.maps.LatLng($scope.evento.direccion.lat, $scope.evento.direccion.lon),
	        map: map,
	        title: "My Location"
	    });

		$scope.map=map;
    };

    $scope.setGeolocalization=function(){
    	var coords= new google.maps.LatLng($scope.evento.direccion.lat,$scope.evento.direccion.lon);
		var config= {
			center: coords,
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById("map"), config);


		/*add $ionicLoading in the function*/
		navigator.geolocation.getCurrentPosition(function(pos) {
	        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
	        var myLocation = new google.maps.Marker({
	            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
	            map: map,
	            title: "My Location"
	        });

	    });


		$scope.map=map;
    };

}]);
