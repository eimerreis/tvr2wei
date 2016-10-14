$(window).load(function () {
  data.getTVRTeam();
  setTimeout(function(){view.initPlayerSlider();}, 1000)
});


var selectedPlayers = [];

var globals = {
  tvrTeamFile: "data/tvr2wei.json"
};

var data = {
  getTVRTeam: function () {
    $.getJSON(globals.tvrTeamFile, function (data) {
    });
  }
};

var messages = {
  isActive: false,
  inQueue: false,

  alignMessages: function() {
    var maxWidth = 0;
    $(".message-username").each(function(){
      if($(this).width() > maxWidth){
       maxWidth = $(this).width();
      }
    });

    $(".message").each(function(){
      var usernameWidth = $(this).find(".message-username").width();
      $(this).find(".message-username").animate({
        width: "+=" + (maxWidth - usernameWidth) + "px"
      });
    });

  },

  hideMessage: function (newMessage) {
    $(".message.active-message").addClass("hide-message");
    $(".message.active-message").removeClass("active-message");
    //setTimeout(function () { $(".hide-message").remove(); }, 1000);
    messages.showNewMessage(newMessage);
    messages.inQueue = false;
  },

  messageTimeout: function (message) {
    messages.inQueue = true;
    setTimeout(function () { messages.hideMessage(message); }, 1000);
  },

  newMessage: function (message) {
    if (messages.isActive) {
      messages.messageTimeout(message);
    } else { //messages.isActive == false
      messages.showNewMessage(message);
    }
  },

  showNewMessage: function (message) {
    $(".pt-page-7  .messages").append('<div class="message active-message"><div class="message-username">' + message.name + '</div><div class="bubble"><span>' + message.message + '</span></div></div>');
    $(".message.hide-message").animate({
      marginTop: "+=" + ($(".message.active-message").height() + 15) + "px"
    });
    messages.alignMessages();
    messages.isActive = true;
  }
};

var view = {
  currentPage: 0,
  currentPlayer: 0,
  setCurrentPage: function () {
    this.currentPage = $(".pt-page-current").index(".pt-page");
    this.currentPage = this.currentPage + 1;
  },

  setCurrentPlayer: function () {
    this.currentPlayer = $(".player-active").data("number");
  },

  changeSlide: function (toPage) {
    if (toPage != view.currentPage) {
      toPage = toPage - 1;

      var newPage = $("div.pt-page").eq(toPage),
        oldPage = $(".pt-page-current"),
        newColor = "#" + $(newPage.data("background"));
      $("body").css({ "background-color": newColor });

      newPage.addClass("pt-page-current");
      newPage.addClass("pt-page-moveFromTopFade pt-page-ontop");
      oldPage.delay(5000).removeClass("pt-page-moveFromTopFade pt-page-ontop pt-page-current");
      view.setCurrentPage();
    }
  },

  changePlayer: function (toNumber) {
    if (toNumber != view.currentPlayer) {
      var newPlayer = $("div[data-number='" + toNumber + "']"),
        oldPlayer = $("div[data-number='" + view.currentPlayer + "']");

      oldPlayer.velocity({ left: "-100%" }, { duration: "slow" }, { easing: "spring" },{complete: function(elements){ 
        oldPlayer.removeClass("player-active").addClass("inactive").removeAttr("style");
        console.log("old player complete");
       }});
      

      newPlayer.velocity({ left: "-90%" }, { duration: "slow" }, { easing: "spring" }, {complete: function(elements){
        newPlayer.removeClass("inactive").addClass("player-active").removeAttr("style");  
      }});
      
       
      //newPlayer.addClass("player-active");
      //newPlayer.addClass("player-portfolio-moveRight player-ontop player-slide-in");
      //oldPlayer.delay(5000).removeClass("player-portfolio-moveRight player-ontop player-active player-slide-in");
      view.setCurrentPlayer();
    }
  },

  initPlayerSlider: function(){
    //Slider für Spieler
    $('.players-wrapper').slick({
      autoplay: true,
      autoplaySpeed: 8000,
      arrows: false,
      fade: true,
      cssEase: 'ease',
      speed: 800
    });
  },

  updatePlayerTable: function () {
    $('.h2wei-table tbody').empty();
    for (var i = 0; i < selectedPlayers.length; i++) {
      /*var player-html = */
      $('.h2wei-table tbody').append("<tr><td>" + selectedPlayers[i].number + "</td><td>" + selectedPlayers[i].name + "</td><td>" + selectedPlayers[i].position + "</td></tr>");
      $('.h2wei-table tbody tr:last').hide().fadeIn("fast");
    }
  }
};

var playerDrop = {
  ui: {
    
  },
  bindUiActions: function(){
    
  },
  
  init: function(){
    playerDrop.bindUiActions();
  }
}

view.setCurrentPage();
view.setCurrentPlayer();
