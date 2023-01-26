terms = ["aegis", "antediluvian", "apex", "avuncular", "boondoggle", "cataclysmic", "celerity", "clout", "dearth", "dissipate", "enervate", "filial", "faux pas", "heretical", "loosey-goosey", "myriad", "munificent" ,"neurotic" ,"obstreperous", "paucity", "plebeian", "prowess", "quixotic", "redoubtable", "recalcitrant", "rigmarole", "rueful", "sophomoric", "stalwart", "stolid", "taciturn", "tête-a-tête", "tony", "umbrage", "veracious", "vitriolic"];
definitions = ["protection; guidance; support", "literally means before the flood; old-fashioned; outdated", "the highest point; to reach a high point", "uncle-like; friendly and chummy", "an activity/project that is a waste of time/money--but appears worthwhile", "destructive; ruinous(debacle)", "swiftness; quickness of movement (adroit)", "one's power or influence; cachet, gravitas", "a scarcity; a lack of (antiprodigious, superfluous)", "to disperse or scatter; to disappear", "to weaken; to feel drained of energy", "of or due from a son or daughter", "an embarrassing remark/behavior in a social situation--literally a false step", "holding beliefs at odds with the majority", "relaxed and at ease; imprecise and unstructured", "a countless or extremely great number (prodigious)", "generous, magnanimous (parsimonious)" ,"excessively anxious, tense, high strung" ,"noisy and difficult to control; unruly", "a scarcity, a lack of, dearth", "common; low class; lacking refinement", "skill and expertise in a particular field; adroit", "idealistic; impractical; starry-eyed", "formidable; fearsome; deserving of respect", "stubborn; uncooperative; obstinate", "a lengthy, complicated procedure--one that becomes tiresome", "expressing sorrow or regret; remorseful", "juvenile, immature; foolish", "dependable and loyal; sturdy and strong", "calm; showing little or no emotion; stoic", "uncommunicative in speech; saying little; tight-lipped", "a private conversation between two people--literally head to head", "fashionable; trendy; swanky", "resentment/offense (idiom: to take ... at)", "being truthful; honest", "cruel; bitter, angry, acrimonious"];
option = [];

let buttonDiv = document.getElementById('buttons');
let buttonChildren = buttonDiv.children;
let answer = Math.floor(Math.random() * 36);
let button = [];
let answerPosition = 0;
let correct = 0;
let incorrect = 0;
let answerPositionComparable = 0;

function clickButton(optionVal) {
    option[optionVal] = true;

    button[1] = Math.floor(Math.random() * 36);
    button[2] = generateButtonVal(button[1]);
    button[3] = generateButtonVal([button[1], button[2]]);
    button[4] = generateButtonVal([button[1], button[2], button[3]]);
    answerPositionComparable = answerPosition;
    for (let i = 0; i < 4; i++){
        buttonChildren[i].innerHTML = terms[button[i+1]];
    }
    answerPosition = Math.floor(Math.random() * 4);
    answer = Math.floor(Math.random() * 36);
    buttonChildren[answerPosition].innerHTML = terms[answer];
    document.getElementById("question").innerHTML = definitions[answer];
    while ((answer == button[1]) || (answer == button[2]) || (answer == button[3]) || (answer == button[4])){
        answer = Math.floor(Math.random() * 36);
        document.getElementById("question").innerHTML = definitions[answer];
        console.log(answer);
        buttonChildren[answerPosition].innerHTML = terms[answer];
    }
    processAnswer(optionVal);
}


function processAnswer(optionVal) {
    if ((optionVal == answerPositionComparable)){
        console.log("Correct!");
        document.getElementById("rsp").innerHTML = "Correct";
        correct++;
    }
    else{
        console.log("Incorrect!");
        document.getElementById("rsp").innerHTML = "Incorrect";
        incorrect++;
    }
}

function generateButtonVal(exclude) {
    let random;
    while (!random) {
        const x = Math.floor(Math.random() * 36)
        if (String(exclude).indexOf(String(x)) === -1) random = x;
    }
    return random;
}