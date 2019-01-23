import {Private} from "../../types/types";
import * as firebase from "firebase";
import {mapToFirestoreMap} from "../../util/src/maps";

export async function editUserDefaultPrivacy(data: Map<string, number>): Promise<void> {
    if(firebase.auth().currentUser && firebase.auth().currentUser!.uid) {
        let firestoreMap = mapToFirestoreMap(data);

        return firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser!.uid)
            .collection("information")
            .doc("privacy")
            .update(firestoreMap)
            .then(() => Promise.resolve());
    }
    else {
        return Promise.reject("Must be logged in");
    }
}