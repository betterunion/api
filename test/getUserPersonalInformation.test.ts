import {getUserPersonalInformation} from "../src/getUserPersonalInformation";
import * as firebase from "firebase";
import "mocha";
import {expect} from "chai";

export function testGetUserPersonalInformation() {

    it("gets own user", function() {
        return getUserPersonalInformation(firebase.auth().currentUser!.uid).then(function(result) {
            expect(result).to.have.property("name");
        });

    });

    it("gets other user", function() {
        return getUserPersonalInformation("r88dCum4MvZ54SPsio7lcNWnXC22").then(function (result) {
            expect(result).to.have.property("name");
        });
    });
}