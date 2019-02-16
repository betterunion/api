import {Question} from "../../types/types";
import * as firebase from "firebase";

export async function getQuestions(): Promise<Question[]> {
    return firebase.functions()
        .httpsCallable("getQuestions")({})
        .then(result => {
            return<Question[]> result.data
        });
}