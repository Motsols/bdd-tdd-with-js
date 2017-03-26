describe("A demo of a unit test", function() {

    it("returns true", function(){
        expect(isNumberOne(1)).toBe(true)
        expect(isNumberOne(1)).toBeTruthy();
    });

    it("returns false", function(){
        expect(isNumberOne(2)).toBe(false);
        expect(isNumberOne(2)).toBeFalsy();
    });
});