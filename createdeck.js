termsAndDefs = [];

//this variable name is somewhat misleading. It's total terms + definitions, because each def is counted as a term
let totalTerms = 11;

function downloadDeck() {
    for (let i = 0; i < totalTerms - 1; i++) {
        termsAndDefs[i] = document.getElementById("input" + (i + 1)).value;
        if (termsAndDefs[i].includes('\\')) {
            termsAndDefs[i] = termsAndDefs[i].replace(/\\/g, " \\\\ ");
        }
        if (termsAndDefs[i].includes(',')) {
            termsAndDefs[i] = termsAndDefs[i].replace(/,/g, " \\ ");
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

//TODO: maybe animate?? that'd be dumb
function addTermInput() {
    let newTerm = document.createElement("input");
    newTerm.setAttribute("type", "text");
    newTerm.setAttribute("placeholder", "Term");
    newTerm.setAttribute("id", "input" + totalTerms);

    let newDef = document.createElement("input");
    newDef.setAttribute("type", "text");
    newDef.setAttribute("placeholder", "Definition");
    newDef.setAttribute("id", "input" + (totalTerms + 1));

    document.getElementById("deck-input").appendChild(newTerm);
    document.getElementById("deck-input").appendChild(newDef);
    document.getElementById("deck-input").appendChild(document.createElement("br"));

    totalTerms += 2;
}
