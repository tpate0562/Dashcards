var terms = [];
var definitions = [];

let questionOrder = [];
let buttonDiv = document.getElementById('buttons');
let buttonChildren = buttonDiv.children;
let answer = Math.floor(Math.random() * terms.length);
let button = [];
let answerPosition;
let correct = 0;
let incorrect = 0;
let totalAnswered = 0;
let answerAccuracy = 0;
let trailingTwentyFive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let trailingTwentyFivePosition = totalAnswered % 25;
let trailingTwentyFiveDenominator = 0;
let summationTTF = 0;

function startQuiz() {
    document.getElementById("question").style.display = "flex";
    document.getElementById("buttons").style.removeProperty("display");
    document.getElementById("startbutton").style.display = "none";
    document.getElementById("preset-menu").style.display = "none";
    document.getElementById("rsp").style.display = "flex";
    document.getElementById("stats").style.removeProperty("display");

    setButtonTerms();
    setNewAnswer();

    document.getElementById("rsp-correct").innerHTML = correct;
    document.getElementById("rsp-incorrect").innerHTML = incorrect;
    document.getElementById("answeraccuracy").innerHTML = "Score: " + answerAccuracy.toPrecision(3) + "% ";
    document.getElementById("ttf").innerHTML = "  " + summationTTF + " of the last " + trailingTwentyFiveDenominator + " were correct";
}

function getUserDeck() {

    const [file] = document.getElementById('upload').files;
    const reader = new FileReader();

    if (file) {
        reader.readAsText(file, "utf-8");
    }

    reader.addEventListener("load", () => {
        resetQuiz();
        parseDeck(reader.result);
    });
}

function showPresetMenu() {
    resetQuiz();
    document.getElementById("startbutton").disabled = true;
    document.getElementById("preset-menu").style.removeProperty("display");
}

function getPresetDeck() {
    console.log(document.getElementById("preset-select").value);
    $.get('preset-decks/' + document.getElementById("preset-select").value, function(data) {
        parseDeck(data);
        document.getElementById("startbutton").disabled = false;
    });
}

function parseDeck(deckString) {
    const userDeck = deckString.split(',');

    if (userDeck.length < 10) {
        document.getElementById("startprompt").innerHTML = "Deck must contain at least 5 terms!";
        return;
    }

    for (let i = 0; i < userDeck.length / 2; i++) {
        terms.push(userDeck[i * 2]);

        if (terms[i].includes(' \\ ')) {
            terms[i] = terms[i].replace(/ \\ /g, ',');
        }
        if (terms[i].includes(' \\\\ ')) {
            terms[i] = terms[i].replace(/ \\\\ /g, '\\');
        }

        definitions.push(userDeck[(i * 2) + 1]);

        if (definitions[i].includes(' \\ ')) {
            definitions[i] = definitions[i].replace(/ \\ /g, ',');
        }
        if (definitions[i].includes(" \\\\ ")) {
            definitions[i] = definitions[i].replace(/ \\\\ /g, '\\');
        }
    }
}

function resetQuiz() {
    terms = [];
    definitions = [];
    totalAnswered = 0;
    correct = 0;
    incorrect = 0;
    totalAnswered = 0;
    answerAccuracy = 0;
    trailingTwentyFive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    trailingTwentyFivePosition = totalAnswered % 25;
    trailingTwentyFiveDenominator = 0;
    summationTTF = 0;

    document.getElementById("startprompt").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("stats").style.display = "none";
    document.getElementById("startbutton").style.display = "flex";
    document.getElementById("preset-menu").style.display = "none";
    document.getElementById("startbutton").disabled = false;
}

function clickButton(optionVal) {
    totalAnswered++;

    
    processAnswer(optionVal);
    setButtonTerms();
    setNewAnswer();
}

function setButtonTerms() {
    //generates a unique index position in terms[] for each button to display
    for (let i = 0; i < 4; i++) {
        let generate_index = Math.floor(Math.random() * terms.length);
        while (button.includes(generate_index)) {
            generate_index = Math.floor(Math.random() * terms.length);
        }
        button[i] = generate_index;
    }

    //reshuffles the question order array after answering each once
    questionOrder.length = terms.length;
    if (totalAnswered % questionOrder.length == 0){
        for(let i = 0; i < questionOrder.length; i++){
            questionOrder[i] = i;
        }
        shuffle(questionOrder);
    }

    //terms at generated indices used to display choices on buttons
    for (let i = 0; i < 4; i++) {
        buttonChildren[i].innerHTML = terms[button[i]];
    }
}

/* ANSWER CHOICE AND QUESTION DISPLAY*/
function setNewAnswer() {
    {
        answerPosition = Math.floor(Math.random() * 4);
        answer = questionOrder[totalAnswered % terms.length];
        buttonChildren[answerPosition].innerHTML = terms[answer];
        document.getElementById("question").innerHTML = definitions[answer];
    }
    while (button.includes(answer)) {
        answer = Math.floor(Math.random() * terms.length);
        document.getElementById("question").innerHTML = definitions[answer];
        console.log(answer);
        buttonChildren[answerPosition].innerHTML = terms[answer];
    }
    
    
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  

function processAnswer(optionVal) {
    if (optionVal == answerPosition) {
        console.log("Correct!");
        document.getElementById("rsp").innerHTML = "Correct";
        animCall("#rsp", 'rsp-correct-anim', 300);
        animCall("#rspc", 'counter-anim', 200);
        correct++;
    }
    else {
        console.log("Incorrect!");
        if (totalAnswered != 0){
            document.getElementById("rsp").innerHTML = "Incorrect. The correct answer was " + terms[answer];
        }
        animCall("#rsp", 'rsp-incorrect-anim', 300);
        animCall("#rspi", 'counter-anim', 200);
        incorrect++;
    }
    document.getElementById("rsp-correct").innerHTML = correct;
    document.getElementById("rsp-incorrect").innerHTML = incorrect;
    processStats(optionVal);
}

function animCall(id, anim, duration) {
    $(id).addClass(anim);
    setTimeout(function() {
        $(id).removeClass(anim);
    }, duration);
}

function processStats(optionVal){
    answerAccuracy = 100* correct/totalAnswered;
    if (incorrect == 0){
        answerAccuracy = 100;
    }
    document.getElementById("answeraccuracy").innerHTML = "Score: " + answerAccuracy.toPrecision(3) + "% ";
    trailingTwentyFive.length = 25;
    if (totalAnswered < 25){
        trailingTwentyFiveDenominator = totalAnswered;
    }
    else{
        trailingTwentyFiveDenominator = 25;
    }
    if (optionVal == answerPosition){
        trailingTwentyFive[totalAnswered % 25] = 1;
    }
    else{
        trailingTwentyFive[totalAnswered % 25] = 0;
    }    
    for (let i = 0; i < 25; i++){
        summationTTF += trailingTwentyFive[i];
    }
    console.log(summationTTF);
    document.getElementById("ttf").innerHTML = "  " + summationTTF + " of the last " + trailingTwentyFiveDenominator +" were correct";
    summationTTF = 0;
}

let toggle = false;
function showSettingsMenu() {
    toggle = !toggle;

    if (toggle) {
        document.getElementById("content").style.filter = "blur(5px) saturate(75%)";
        document.getElementById("settings-menu").style.removeProperty("display");
        document.getElementById("settings-open").style.display = "none";
    } else {
        document.getElementById("content").style.removeProperty("filter");
        document.getElementById("settings-menu").style.display = "none";
        document.getElementById("settings-open").style.removeProperty("display");
    }
}