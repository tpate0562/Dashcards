//terms = ["ad nauseam", "adept", "brusque", "calamitous", "contemplative", "copious", "coup d'état", "coup de grâce", "eclectic", "gesticulate", "hearten", "ingratiate", "inculcate", "jovial", "melancholic", "mercurial", "obsequious" ,"pernicious" ,"phlegmatic", "poignant", "pontificate", "propitious", "proprietary", "propriety", "recidivism", "reminisce", "sanguine", "snarky", "subpoena", "systemic", "tenacious", "tentative", "tenuous", "unceremonious", "untenable", "vindicate"];
//definitions = ["repeated so often it becomes tiresome, annoying (rigmarole)", "skilled or very proficient at something (adroit, prowess)", "shortness of speech or manner; abrupt; curt", "disastrous; cataclysmic(debacle)", "thoughtful; pensive; reflective", "prodigious; munificent; plentiful; abundant (close to decadent)", "a sudden, violent uprising; insurrection(usurpation) an illegal seizure of power — (literally blow of state)", "the death blow; the final shot", "motley; varied; diverse; wide-ranging", "to make gestures(often dramatic ones) while speaking", "to cheer up; to raise one's spirits (ant: enervate)", "using flattery/actions to get into one's good graces", "to instill an idea or belief through persistent teaching", "cheerful; friendly", "sad; gloomy; despondent", "given to sudden changes in mood; capricious", "overly attentive/fawning; servile; ingratiating" ,"damaging and harmful, usually in a subtle way" ,"calm; imperturbable; unflappable", "touching; heart-rending; moving", "to express one's opinions pompously and close-mindedly (sententious)", "favorable; promising; optimistic", "pertaining to ownership, possession", "proper behavior; correctness of manner", "the reoccurrence of a criminal behavior that has been previously punished for", "to remember/look back on with fondness (not nostalgia)", "cheerful; optimistic", "cranky; irritable; critical; snide", "n. a written order to attend a court of law; v. to summon someone to court", "affecting the whole, rather than just a part", "persistent; stubbornly clingy; unshakable--grit", "hesitant; unsure; not confident", "having little substance or strength; weak", "undignified; lacking formality or grace (ant. august)", "not defensible or justifiable", "to free from blame; acquit"];option = [];

var terms = [];
var definitions = [];

let questionOrder = [];
let buttonDiv = document.getElementById('buttons');
let buttonChildren = buttonDiv.children;
let answer = Math.floor(Math.random() * terms.length);
let button = [];
let answerPosition = 5;
let correct = 0;
let incorrect = -1;
let answerPositionComparable = 0;
let totalAnswered = -1;
let answerAccuracy = 0;
let trailingTwentyFive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let trailingTwentyFivePosition = totalAnswered % 25;
let trailingTwentyFiveDenominator = 0;
let summationTTF = 0;

function getDeck() {
    const [file] = document.getElementById('upload').files;
    const reader = new FileReader();

    if (file) {
        reader.readAsText(file, "utf-8");
    }

    reader.addEventListener("load", () => {
        terms = [];
        definitions = [];

        const userDeck = reader.result.split(',');

        for (let i = 0; i < userDeck.length / 2; i++) {
            terms.push(userDeck[i * 2]);

            if (terms[i].includes('\\')) {
                terms[i] = terms[i].replace(/(?<!\\)\\(?!\\)/g, ',');
            }
            if (terms[i].includes('\\\\')) {
                terms[i] = terms[i].replace(/\\\\/g, '\\');
            }

            definitions.push(userDeck[(i * 2) + 1]);

            if (definitions[i].includes('\\')) {
                definitions[i] = definitions[i].replace(/(?<!\\)\\(?!\\)/g, ',');
            }
            if (definitions[i].includes("\\\\")) {
                definitions[i] = definitions[i].replace(/\\\\/g, "\\");
            }
        }
        console.log(terms);
        console.log(definitions);
    });
}

function clickButton(optionVal) {
    totalAnswered++;
    for (let i = 0; i < 4; i++) {
        let generate_index = Math.floor(Math.random() * terms.length);
        while (button.includes(generate_index)) {
            generate_index = Math.floor(Math.random() * terms.length);
        }
        button[i] = generate_index;
    }
    questionOrder.length = terms.length;
    console.log(questionOrder);
    if (totalAnswered % questionOrder.length == 0){
        for(let i = 0; i < questionOrder.length; i++){
            questionOrder[i] = i;
        }
        shuffle(questionOrder);
    }
    console.log(questionOrder);
    answerPositionComparable = answerPosition; // Seems uncessary at first but comes in handy in processAnswer()
    for (let i = 0; i < 4; i++) {
        buttonChildren[i].innerHTML = terms[button[i]];
    }
    if (true /* ANSWER CHOICE AND QUESTION DISPLAY*/ ){
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
    processAnswer(optionVal);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  

function processAnswer(optionVal) {
    if (optionVal == answerPositionComparable) {
        console.log("Correct!");
        document.getElementById("rsp").innerHTML = "Correct";
        animCall("#rsp", 'rsp-correct', 300);
        animCall("#rspc", 'counteranim', 200);
        correct++;
    }
    else {
        console.log("Incorrect!");
        if (totalAnswered != 0){
            document.getElementById("rsp").innerHTML = "Incorrect";
        }
        animCall("#rsp", 'rsp-incorrect', 300);
        animCall("#rspi", 'counteranim', 200);
        incorrect++;
    }
    document.getElementById("rspc").innerHTML = correct;
    document.getElementById("rspi").innerHTML = incorrect;
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
    document.getElementById("ansacc").innerHTML = "Score: " + answerAccuracy.toPrecision(3) + "% ";
    trailingTwentyFive.length = 25;
    if (totalAnswered < 25){
        trailingTwentyFiveDenominator = totalAnswered;
    }
    else{
        trailingTwentyFiveDenominator = 25;
    }
    if (optionVal == answerPositionComparable){
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