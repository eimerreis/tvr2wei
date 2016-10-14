"use strict";

(function(){
	var pages = angular.module("app.pages");
	
	//Page Base Direktive
	pages.directive("ntPageBase", function(){
		return {
			templateUrl: "templates/page-base.html"
		}
	});
	//TVR Aufstellung Direktive
	pages.directive("ntTVRAufstellung", function(){
		return {
			templateUrl: "templates/tvr-aufstellung.html"
		}
	});
	//Gäste Aufstellung Direktive
	pages.directive("ntGastAufstellung", function(){
		return {
			templateUrl: "templates/gast-aufstellung.html"
		}
	});
	//Team Bild Direktive
	pages.directive("ntTeamPicture", function(){
		return {
			templateUrl: "templates/team-picture.html"
		}
	});
	//Tabelle 3.Liga
	pages.directive("ntLeagueTable", function(){
		return {
			templateUrl: "templates/league-table.html"
		}
	});
	//Spieler Einzeln
	pages.directive("ntPlayers", function(){
		return {
			templateUrl: "templates/players.html"
		}
	});
	//Chat
	pages.directive("ntChat", function(){
		return {
			templateUrl: "templates/chat.html"
		}		
	});
	//Chat Erklärung
	pages.directive("ntChatDescription", function(){
		return {
			templateUrl: "templates/chat-description.html"
		}
	});
	//Startaufstellung TVR
	pages.directive("ntStartingSix", function(){
		return {
			templateUrl: "templates/starting-six.html"
		}
	});
	//Jetzt am Aufschlag
	pages.directive("ntNowAtService", function(){
		return {
			templateUrl: "templates/now-at-service.html"
		}
	});
	//Merchandise
	pages.directive("ntMerchandise", function(){
		return {
			templateUrl: "templates/merchandise.html"
		}
	});
	
})();