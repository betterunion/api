import {editUserDefaultPrivacy} from "../src/editUserDefaultPrivacy";
import {getUserDefaultPrivacy} from "../src/getUserDefaultPrivacy";
import {expect} from "chai";

export function testEditUserDefaultPrivacy() {

    let val = Math.random();

    before(function () {
        let map = new Map<string, number>();
        map.set("conversations.view", val);

        return editUserDefaultPrivacy(map);
    });

    after(function () {
        let map = new Map<string, number>();
        map.set("conversations.view", 3);

        return editUserDefaultPrivacy(map);
    });

    it("should change default privacy", function() {
        return getUserDefaultPrivacy().then(privacy => {
            expect(privacy.conversations.view).to.equal(val);
        });
    });
}