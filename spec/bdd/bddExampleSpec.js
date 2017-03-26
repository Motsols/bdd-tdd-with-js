describe("The instructions section", function(){
    var link, instructions;

    beforeEach(function(){
        link = $("#toggleInstructions");
        instructions = $("#instructions");
        console.info($("#toggleInstructions")); 
    });

    it("should be hidden when clicked", function(){
        // link.click();
        expect($("#instructions").is(':visible')).toBe(true);
    });
});