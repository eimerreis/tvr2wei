$(window).load(function(){
  //data.getPlayers();
});

var team;
var selectedPlayers = [];

var data = {
  tvrTeamFile: "data/tvr2wei.json",
  getPlayers: function(){
   $.getJSON(this.tvrTeamFile, function(json){
     team = json.spieler;
   }).done(function(){
      view.listPlayers();
   });
  }
};

var view = {
  listPlayers: function(){
    for(var i=0; i<team.length; i++)
    {
      $("table.player-table tr:last").after("<tr><td><input type=\"checkbox\" value=\"\" /></td><td>"+team[i].number+"</td><td>"+team[i].name + "</td><td>" + team[i].position + "</td></tr>");
    }
  },

  getSelectedPlayers: function(){
    $('input:checked').each(function(){
      var nummer = $(this).parent().next().text();
      var name = $(this).parent().next().next().text()
      var position = $(this).parent().next().next().next().text();
      var tempData = {"number": nummer, "name": name, "position": position };
      selectedPlayers.push(tempData);
    });
  }
}
