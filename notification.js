if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
        .then(reg => {
            console.log('Registered! :)', reg.scope);
        }).catch(err => {
            console.log('Not Registered! :(', err);
        });
    });
}

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

document.getElementById('displayNotification').addEventListener('click', display);
