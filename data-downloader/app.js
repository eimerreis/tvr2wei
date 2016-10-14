/**
 * Created by iMorice on 06.01.16.
 */
var http = require("https");
var fs = require("fs");

//Tabelle Downloaden
var tableFile = fs.createWriteStream("table.xml");
var request = http.get("https://dvv.sams-server.de/xml/rankings.xhtml?apiKey=81218c40-7e0c-412b-b563-35d8f0b924f2&matchSeriesId=9240887", function(response){
   response.pipe(tableFile);
});

var teamsFile = fs.createWriteStream("teams.xml");
request = http.get("https://dvv.sams-server.de/xml/teams.xhtml?apiKey=81218c40-7e0c-412b-b563-35d8f0b924f2&matchSeriesId=9240887", function(response){
   response.pipe(teamsFile);
});

var resultsFile = fs.createWriteStream("results.xml");
request = http.get("https://dvv.sams-server.de/xml/matches.xhtml?apiKey=81218c40-7e0c-412b-b563-35d8f0b924f2&matchSeriesId=9240887&teamId=9240925", function(response){
    response.pipe(resultsFile);
});
