import {UserDefaultPrivacyInformation} from "../../types/types";
import * as firebase from "firebase";

export async function getUserDefaultPrivacy(): Promise<UserDefaultPrivacyInformation> {
    if(firebase.auth().currentUser && firebase.auth().currentUser!.uid) {
        return firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser!.uid)
            .collection("information")
            .doc("privacy")
            .get()
            .then(doc => <UserDefaultPrivacyInformation> doc.data());
    }
    else {
        return Promise.reject("Must be logged in");
    }
}