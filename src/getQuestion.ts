import * as firebase from 'firebase';
import {Question} from "../../types/types";


export async function getQuestion(id: string): Promise<Question> {

    //this can be done through the database. It will not get any of the replies, however.
    return firebase.firestore()
        .collection("questions")
        .doc(id)
        .get()
        .then(doc => {
            return <Question> doc.data();
        });
}