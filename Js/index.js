const init = () => {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDiXY-uI5DIWFtyzsj5cDRoIeTuKK55xC4",
      authDomain: "gamecaro-7083f.firebaseapp.com",
      databaseURL: "https://gamecaro-7083f.firebaseio.com",
      projectId: "gamecaro-7083f",
      storageBucket: "gamecaro-7083f.appspot.com",
      messagingSenderId: "230668618166",
      appId: "1:230668618166:web:b7ca05f1dedf4e0cff5917"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log(firebase.app().name)
 document.getElementById('app').innerHTML = components.loginScreen
 view.setActiveScreen('loginScreen')
}
window.onload = init