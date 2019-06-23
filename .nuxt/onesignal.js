window.$OneSignal = window.OneSignal = window.OneSignal || [];

OneSignal.push(['init', {
  "appId": "YOUR_APP_ID",
  "allowLocalhostAsSecureOrigin": true,
  "welcomeNotification": {
    "disable": true
  }
}]);

export default function (ctx, inject) {
  inject('OneSignal', OneSignal)
}
