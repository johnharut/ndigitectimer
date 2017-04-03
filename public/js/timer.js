var Promise = TrelloPowerUp.Promise;

var TIMER_ICON = 'https://cdn.glitch.com/a70126d2-0a54-42d9-b2bd-7f5d589fd3ff%2Ffavicon.png?1491218389939';

TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: TIMER_ICON,
      text: 'Add time',
      url:"",
      target: 'NDigitec'
    }];
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 180
    });
  }

  //
});