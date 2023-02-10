termsAndDefs = [];

function downloadDeck() {
    //TODO: change 5
    for (let i = 0; i < 5; i++) {
        termsAndDefs[i] = document.getElementById("term1").value;
        if (termsAndDefs[i].includes(',')) {
            termsAndDefs[i] = termsAndDefs[i].replace(/,/g, "\\"); //I'm going to regret having double backslash aren't I
        }
        if (termsAndDefs[i].includes('\\')) {
            termsAndDefs[i] = termsAndDefs[i].replace(/\\/g, "\\\\");
        }
    }

    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(termsAndDefs));
    a.setAttribute('download', document.getElementById("title").value + ".txt");

    a.style.display = 'none';
    document.body.appendChild(a);  
    a.click();
    document.body.removeChild(a);

}

//TODO: create id for each new input with new number. maybe animate?? that'd be dumb
function addTermInput() {
    let newTerm = document.createElement("input");
    newTerm.setAttribute("type", "text");
    newTerm.setAttribute("placeholder", "Term");

    let newDef = document.createElement("input");
    newDef.setAttribute("type", "text");
    newDef.setAttribute("placeholder", "Definition");

    document.getElementById("deck-input").appendChild(newTerm);
    document.getElementById("deck-input").appendChild(newDef);
    document.getElementById("deck-input").appendChild(document.createElement("br"));
}
