import {getUserDefaultPrivacy} from "../src/getUserDefaultPrivacy";
import {expect} from "chai";

export function testGetUserDefaultPrivacy() {
    it("gets privacy information", function() {
        return getUserDefaultPrivacy().then(privacy => {
            expect(privacy).to.have.property("conversations");
            expect(privacy.conversations).to.have.property("edit");
            expect(privacy.conversations).to.have.property("view");
        });
    });
}