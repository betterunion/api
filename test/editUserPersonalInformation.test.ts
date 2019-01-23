import * as firebase from "firebase";
import "mocha";
import {expect} from "chai";
import {editUserPersonalInformation} from "../src/editUserPersonalInformation";
import {Private} from "../../types/types";
import {getUserPersonalInformation} from "../src/getUserPersonalInformation";

export function testEditUserPersonalInformation() {

    let newName = Math.random().toString(16);

    before(function() {

        let editMap = new Map<string, Private<any>>();
        editMap.set("name.first", {value: newName, privacy: 3});


        return editUserPersonalInformation(editMap);
    });



    it("should update the user personal information", function() {
        getUserPersonalInformation(firebase.auth().currentUser.uid).then(data => {
            expect(data.name).to.deep.equal({value: newName, privacy: 3});
        });
    });
}