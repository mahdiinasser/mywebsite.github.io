if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
        .then(reg => {
            console.log('Registered! :)', reg.scope);
        }).catch(err => {
            console.log('Not Registered! :(', err)
        })}
    )};

Notification.requestPermission(status => {
    console.log('Notification permission status: ', status);
});

function display() {
    const options = {
      body: 'Here is a notification body',
      icon: 'icon.png',
      vibrate: [100, 50, 100],
      data: {primaryKey: 1}
    }
  
  if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration()
            .then(reg => {
                reg.showNotification('Hello world', options);
            });
    }
}
const { userInfo } = require('os');
var webPush = require('web-push');
var payload = 'Here is Payload';
var options = {
    gcmAPIKey:
        'AIzaSyBVImB3hJJ...8J5D4xnFo2fFI',
        TIL:60
};
webPush.sendNotification(PushSubscription, payload, options);

var applicationServerPublicKey = 'BFbETm5gD8dbMkt3TQtjjc-Hdvz3CU-FFnY_Yd2DhG0B9wjznOLeJBydmxcDMxDNcb9DIpy8f9neNTLhWzySemk';
var applicationServerKey = urlB64ToUnit8Array(applicationServerPublicKey);
navigator.serviceWorker.getRegistration().then(reg=>{
    reg.pushManager.subscribe({
        userVisibleOnly:True,
        applicationServerKey: applicationServerKey
    })

});

$(document).ready(function () {
    $(document).on('DOMContentLoaded', function () {
      // Request desktop notifications permission on page load
  
      if (!Notification) {
        console.log('Desktop notifications are not available in your browser.');
        return;
      }
  
      if (Notification.permission !== 'granted') {
        Notification.requestPermission();
      }
    });
  
    function showNotification() {
      if (Notification.permission !== 'granted') {
        Notification.requestPermission();
      } else {
        const options = {
          body: 'Simple Chrome Desktop Notification',
          dir: 'ltr',
          image: 'image.jpg'
        };
        const notification = new Notification('Notification', options);
  
        notification.onclick = function () {
          window.open('https://www.google.com');
        };
      }
    }
  
    $('#btn-show-notification').on('click', showNotification);
  });


//document.getElementById('displayNotification').addEventListener('click', display);
