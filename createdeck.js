termsAndDefs = [];

//this variable name is somewhat misleading. It's total terms + definitions, because each def is counted as a term
let totalTerms = 11;

function downloadDeck() {
    let validDownload = true;

    for (let i = 0; i < totalTerms - 1; i++) {
        termsAndDefs[i] = document.getElementById("input" + (i + 1)).value;
        if (termsAndDefs[i] === '') {
            validDownload = false;
            document.getElementById("input" + (i + 1)).style.borderColor = "#ff3029";
        }

        if (termsAndDefs[i].includes('\\')) {
            termsAndDefs[i] = termsAndDefs[i].replace(/\\/g, " \\\\ ");
        }
        if (termsAndDefs[i].includes(',')) {
            termsAndDefs[i] = termsAndDefs[i].replace(/,/g, " \\ ");
        }
    }

    if (document.getElementById("title").value === '') {
        validDownload = false;
        document.getElementById("title").style.borderColor = "#ff3029";
    }

    if (validDownload) {
        var a = document.createElement('a');
        a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(termsAndDefs));
        a.setAttribute('download', document.getElementById("title").value + ".txt");

        a.style.display = 'none';
        document.body.appendChild(a);  
        a.click();
        document.body.removeChild(a);
    } else {
        document.getElementById("create-error").style.removeProperty("display");
        window.scrollTo(0, 0);
    }

}

addEventListener("input", function(event) {
    event.target.style.borderColor = "#000000";
    document.getElementById("create-error").style.display = "none";
});

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

    window.scrollTo(0, document.body.scrollHeight);
}
