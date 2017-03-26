
$('#toggleInstructions').click(function() {
    toggleInstructions();
    changeInstructionSymbol();
});

function toggleInstructions(){
    $('#instructions').toggle();
}

function changeInstructionSymbol(){
    $('#minimize').toggle();
    $('#expand').toggle();
}

function isNumberOne(i){
    return i == 1;
}