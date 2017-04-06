$(document).ready(function(){
  var playlist = [{
      title:"东京喰种",
      artist:"主题曲",
      mp3:"music/1.mp3",
      poster: "images/1.jpg"
    },{
      title:"鸟之诗",
      artist:"AiR",
      mp3:"music/2.mp3",
      poster: "images/2.jpg"
    },{
      title:"Butter-Fly",
	  artist:"数码宝贝",
      mp3: "music/3.mp3",
      poster: "images/3.jpg"
  }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});