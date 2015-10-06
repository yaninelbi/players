// Wrap it so if GA is not initialised it doesn't go 'undefined'!
function analytics_custom_event_tracker (name, event, label) {
    if (typeof ga === 'function') {
        return ga('send', 'event', name, event, label);
    }
};

function track() {
  var videoPlay = {
      keen: {
        timestamp: new Date().toISOString()
      }
    };
  keen.addEvent("plays", videoPlay, function(err, res){
    if (err) {
      console.error(err);
    }
    else {
    }
  });
  mixpanel.track("Video play");
}
