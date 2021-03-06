import {UserPersonalInformation} from "../../types/types";
import * as firebase from "firebase";

export async function getUserPersonalInformation(uid?: string): Promise<UserPersonalInformation> {
    if(firebase.apps.length !== 1) {
        throw new Error("initialize firebase first");
    }

    if(firebase.auth().currentUser && (uid === undefined || firebase.auth().currentUser!.uid === uid)) {
        //the current user is trying to get their own information
        
        return firebase.firestore().collection("users")
            .doc(uid)
            .collection("information")
            .doc("personal")
            .get()
            .then(result => <UserPersonalInformation> result.data());
    }
    else if(uid !== undefined) {
        //the current user is trying to get the information of someone else... call the server and the server will
        //choose which information to give

        return firebase.functions()
            .httpsCallable('getUserPersonalInformation')({uid})
            .then(result => result.data);
    }
    else {
        throw new Error("Can only get own user if logged in");
    }
}