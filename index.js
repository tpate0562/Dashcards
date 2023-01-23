const terms = ["aegis", "antediluvian", "apex", "avuncular", "boondoggle", "cataclysmic", "celerity", "clout", "dearth", "dissipate", "enervate", "filial", "faux pas", "heretical", "loosey-goosey", "myriad", "munificent" ,"neurotic" ,"obstreperous", "paucity", "plebeian", "prowess", "quixotic", "redoubtable", "recalcitrant", "rigmarole", "rueful", "sophomoric", "stalwart", "stolid", "taciturn", "tête-a-tête", "tony", "umbrage", "veracious", "vitriolic"];
const definitions = ["protection; guidance; support", "literally means before the flood; old-fashioned; outdated", "the highest point; to reach a high point", "uncle-like; friendly and chummy", "an activity/project that is a waste of time/money--but appears worthwhile", "destructive; ruinous(debacle)", "swiftness; quickness of movement (adroit)", "one's power or influence; cachet, gravitas", "a scarcity; a lack of (antiprodigious, superfluous)", "to disperse or scatter; to disappear", "to weaken; to feel drained of energy", "of or due from a son or daughter", "an embarrassing remark/behavior in a social situation--literally a false step", "holding beliefs at odds with the majority", "relaxed and at ease; imprecise and unstructured", "a countless or extremely great number (prodigious)", "generous, magnanimous (parsimonious)" ,"excessively anxious, tense, high strung" ,"noisy and difficult to control; unruly", "a scarcity, a lack of, dearth", "common; low class; lacking refinement", "skill and expertise in a particular field; adroit", "idealistic; impractical; starry-eyed", "formidable; fearsome; deserving of respect", "stubborn; uncooperative; obstinate", "a lengthy, complicated procedure--one that becomes tiresome", "expressing sorrow or regret; remorseful", "juvenile, immature; foolish", "dependable and loyal; sturdy and strong", "calm; showing little or no emotion; stoic", "uncommunicative in speech; saying little; tight-lipped", "a private conversation between two people--literally head to head", "ashionable; trendy; swanky", "resentment/offense (idiom: to take ... at)", "being truthful; honest", "cruel; bitter, angry, acrimonious"];
var num;
function displayQuestion() {
    document.getElementById("question").innerHTML = definitions[Math.floor(Math.random() % 35)];
}
function clickButtonOne() {
    optionOne = true;
    num = Math.floor(Math.random() * 35);
    document.getElementById("btn1").innerHTML = terms[Math.floor(Math.random() * 35)];
    num = Math.floor(Math.random() * 35);
    document.getElementById("question").innerHTML = terms[Math.floor(Math.random() * 35)];
}
function clickButtonTwo() {
    optionTwo = true;
    document.getElementById("btn2").innerHTML = terms[Math.floor(Math.random() * 35)];
    document.getElementById("question").innerHTML = terms[Math.random(36)];
}
function clickButtonThree() {
    optionThree = true;
    document.getElementById("btn3").innerHTML = terms[Math.floor(Math.random() * 35)];
    document.getElementById("question").innerHTML = terms[Math.random(36)];
}
function clickButtonFour() {
    optionFour = true;
    document.getElementById("btn4").innerHTML = terms[Math.floor(Math.random() * 35)];
    document.getElementById("question").innerHTML = terms[Math.random(36)];
}
function processAnswer() {
    
}