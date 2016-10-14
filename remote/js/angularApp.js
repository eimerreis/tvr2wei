var app = angular.module('2weiGewinnt', ['ngResource']);

	app.controller("TeamController", function($scope, $http, $team){
		$scope.team = $team.query();

		/*$http.get("http://localhost:3000/players").success(function(data){
				$scope.team = data;
		}).error(function(){
				console.log("Team konnte nicht aus MongoDB geladen werden!");
		});*/

		
		$scope.isActive = function(user){
			if(user.active == true){
				return true;
			}
			return false;
		};

	});


	app.provider("$team", function(){
		var endpoint = "http://localhost:3000/players";

		this.$get = function($resource){
			return $resource(
				endpoint + "/:number",
				{
					number: "@number"
				},
				{
					'getTeam': { method: "GET"},
					'updatePlayer': {method: "PUT"}
				}
			)
		}
	});
