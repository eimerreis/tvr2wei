"use strict";

var app = angular.module("2weiRemote", ['ngResource']);

app.controller("SlideController", function($scope){
    $scope.title = "Administration Videowand";

});


app.controller("TeamController", function($scope, $team){
    $scope.team = $team.query();
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