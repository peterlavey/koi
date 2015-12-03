angular.module('starter.service', [])
.factory('PostService', ['$http', function($http){
	return{
		getPost:function(){
			//return $http.get('http://bsocial.cl/todo_list/listar.php');
		},
		terminar:function(id, lat, lon){
			//return $http.put('http://bsocial.cl/todo_list/listar.php/'+id, {'estado':1, 'latitud':lat, 'longitud':lon});
		}
	}
}]);
