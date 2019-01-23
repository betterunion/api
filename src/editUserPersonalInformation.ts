import {Private, UserPersonalInformation} from "../../types/types";
import * as firebase from "firebase";
import {mapToFirestoreMap} from "../../util/src/maps";

export async function editUserPersonalInformation(data: Map<string, Private<any>>): Promise<void> {
    if(firebase.auth().currentUser && firebase.auth().currentUser.uid) {
        let firestoreMap = mapToFirestoreMap(data);

        return firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("information")
            .doc("privacy")
            .update(firestoreMap)
            .then(() => Promise.resolve());
    }
    else {
        console.warn("Must be logged in");
        return Promise.resolve();
    }
}