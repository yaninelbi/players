
var adConfig = {
	publisherID         :'38585',
	channelID           :'763325',
	width               :100,
	height              :0,
	HD                  :true,
	logo                :true,
	loop                :true,
	ref1                :'LR_FORMAT=application/javascript',
	vastRetry 	        :3,
	backgroundColor     :'#000000',
	position            :'aniplayer'
};
var PlayerUrl = 'http://eu.ani-view.com/Script/4/aniview.js';
var myPlayer;
function downloadScript(src,adData) {
   var scp = document.createElement('script');
   scp.src = src;
   scp.onload = function() {
		myPlayer= new aniviewPlayer;
    myPlayer.onPlay    = function(type) {
			console.log("a: onPlay");
			track();
		};
    myPlayer.onReady    = function(type,clickThroughUrl) {console.log("a: onReady");};
    myPlayer.onPlay25   = function(type) {console.log('a: onPlay25');};
    myPlayer.onPlay50   = function(type) {console.log('a: onPlay50');};
    myPlayer.onPlay75   = function(type) {console.log('a: onPlay75');};
    myPlayer.onPlay100  = function(type) {console.log('a: onPlay100');};
    myPlayer.onPause    = function(type) {console.log('a: onPause');};
    myPlayer.onResume   = function(type) {console.log('a: onResume');};
    myPlayer.onMute     = function(type) {console.log('a: onMute');};
    myPlayer.onUnmute   = function(type) {console.log('a: onUnmute');};
    myPlayer.onClick    = function(type,clickThroughUrl) {console.log('a: onClick');};
    myPlayer.onClose    = function(type) {};
    myPlayer.onError    = function(type,msg) {console.log('a: onError');};

		myPlayer.play(adConfig);
    };
   document.getElementsByTagName('head')[0].appendChild(scp);
};
downloadScript(PlayerUrl,adConfig);
