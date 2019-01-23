import * as firebase from "firebase";
import testUser from "../keys/testUser.json";
import "mocha";
import {testGetUserPersonalInformation} from "./getUserPersonalInformation.test";
import {testEditUserPersonalInformation} from "./editUserPersonalInformation.test";


describe("BetterUnion API", function() {
    before(function() {
        const config = {
            apiKey: "AIzaSyAQ8Z5LD2O3JUY-0AfdaHLdCKJ4k-DOapM",
            authDomain: "betterunion-8ac8f.firebaseapp.com",
            databaseURL: "https://betterunion-8ac8f.firebaseio.com",
            projectId: "betterunion-8ac8f",
            storageBucket: "betterunion-8ac8f.appspot.com",
            messagingSenderId: "973164672944"
        };
        firebase.initializeApp(config);

        return firebase.auth().signInWithEmailAndPassword(testUser.email, testUser.password).catch(console.log);
    });

    after(function() {
        return firebase.auth().signOut();
    });

    describe("getUserPersonalInformation", testGetUserPersonalInformation);

    describe("editUserPersonalInformation", testEditUserPersonalInformation);
});