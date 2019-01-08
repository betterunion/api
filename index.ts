import * as firebase from "firebase";

if(firebase.apps.length === 0) {
    const config = {
        apiKey: "AIzaSyAQ8Z5LD2O3JUY-0AfdaHLdCKJ4k-DOapM",
        authDomain: "betterunion-8ac8f.firebaseapp.com",
        databaseURL: "https://betterunion-8ac8f.firebaseio.com",
        projectId: "betterunion-8ac8f",
        storageBucket: "betterunion-8ac8f.appspot.com",
        messagingSenderId: "973164672944"
    };
    firebase.initializeApp(config);
}

export * from "./src/getUserPersonalInformation";