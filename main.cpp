//
//  main.cpp
//  Quizlet
//
//  Created by Tejas Patel on 12/20/22.
//

#include <iostream>
#include <cstdlib>
using namespace std;
string terms[36] = {"abrogate", "ameliorate", "ancillary", "assiduous", "besmirch", "byzantine", "calumny", "cogitate", "contentious", "debacle", "deleterious", "ensconce", "erudite", "facetious", "feral", "gravitas", "impudent" ,"iniquitous" ,"juggernaut", "lassitude", "maudlin", "mendacious", "neophyte", "nonplus", "onerous", "ossify", "parsimonious", "penultimate", "petulant", "salubrious", "scofflaw", "sinuous", "temerity", "truculent", "veneer", "zealous"};
string definitions[36] = {"to repeal; to do away with; to nullify", "to make better; to improve; mitigate", "additional support; auxiliary", "diligent; detail-minded, conscientious", "to damage; to debase; to smear--such as a reputation", "extremely intricate or complicated in structure.", "false statements intended to debase someone's reputation; slander", "to ponder; to meditate/think on", "controversial; argumentative; quarrelsome", "a disaster or failure", "harmful; extremely unhealthy", "to settle in snuggly, secretly, safely", "scholarly; having great knowledge of; learned", "treating something serious with inappropriate humor; sarcastic; flippant", "wild; savage; ferocious", "dignity; seriousness; authority", "disrespectful; rude; insolent" ,"unjust; immoral; grossly unfair" ,"something massive, destructive, and unstoppable", "weariness; lethargy; torpor", "overly and tearfully sentimental; overly emotional", "dishonest; deceitful; lying", "a beginner; a novice", "to surprise and confuse", "burdensome; oppressive; extremely difficult", "to turn into bone; to become rigid or set in one's ways", "stingy; overly frugal; miserly", "next to last", "cranky; ill-tempered; irritable", "healthful; favorable to one's health", "one who shows disdain for and is continually breaking the laws", "winding; curvy", "over-confidence and boldness; audacity", "hostile; aggressive, defiant", "a façade; an outward appearance", "very enthusiastic; passionate"};
int correct[36] = {0};
int incorrect[36] = {0};
int term;
int definition;
string choice;
char expectedAnswer;
int oneToFour;
int input;
int optionOne;
int optionTwo;
int optionThree;
int optionFour;
int oneToThirtyTwo;
void answerWithDefinition();
void answerWithTerm();
int main() {
    srand(unsigned(time(0)));
    cout << "Would you like to answer with terms or definitions? ";
    while(choice != "term" || choice != "terms" || choice != "1" || choice != "t" || choice != "definition" || choice != "definitions" || choice != "2" || choice != "def" || choice != "d"){
        cin >> choice;
        if (choice == "term" || choice == "terms" || choice == "1" || choice == "t"){
            while (1){
                answerWithTerm();
            }
        }
        if (choice == "definition" || choice == "definitions" || choice == "2" || choice == "def" || choice == "d"){
            cout << "You chose to answer with a definition. The term will be provided and you will choose the definition" << endl;
            while (1){
                answerWithDefinition();
            }
        }
    }
}
void answerWithTerm(){
        oneToThirtyTwo = rand() % 36;
        cout << definitions[oneToThirtyTwo] << endl;
        oneToFour = ((rand() % 4) + 1);
        if(oneToFour == 1){
            cout << "1: " << terms[oneToThirtyTwo] << endl;
        }
        else{
            optionOne = rand() % 36;
            if(optionOne != oneToThirtyTwo){
                cout << "1: " << terms[optionOne] << endl;
            }
            else while (optionOne == oneToThirtyTwo){
                optionOne = rand() % 36;
                if(optionOne != oneToThirtyTwo){
                    cout << "1: " << terms[optionOne] << endl;
                }
            }
        }
        if(oneToFour == 2){
            cout << "2: " << terms[oneToThirtyTwo] << endl;
        }
        else{
            optionTwo = rand() % 36;
            if(optionTwo != oneToThirtyTwo){
                cout << "2: " << terms[optionTwo] << endl;
            }
            else while (optionTwo == oneToThirtyTwo || optionTwo == optionOne){
                optionTwo = rand() % 36;
                if(optionTwo != oneToThirtyTwo){
                    cout << "2: " << terms[optionTwo] << endl;
                }
            }
        }
        if(oneToFour == 3){
            cout << "3: " << terms[oneToThirtyTwo] << endl;
        }
        else{
            optionThree = rand() % 36;
            if(optionThree != oneToThirtyTwo || optionThree == optionOne || optionThree == optionTwo){
                cout << "3: " << terms[optionThree] << endl;
            }
            else while (optionThree == oneToThirtyTwo){
                optionThree = rand() % 36;
                if(optionThree != oneToThirtyTwo){
                    cout << "3: " << terms[optionThree] << endl;
                }
            }
        }
        if(oneToFour == 4){
            cout << "4: " << terms[oneToThirtyTwo] << endl;
        }
        else{
            optionFour = rand() % 36;
            if(optionFour != oneToThirtyTwo){
                cout << "4: " << terms[optionFour] << endl;
            }
            else while (optionFour == oneToThirtyTwo || optionFour == optionOne || optionFour == optionTwo || optionFour == optionThree){
                optionFour = rand() % 36;
                if(optionFour != oneToThirtyTwo){
                    cout << "4: " << terms[optionFour] << endl;
                }
            }
        }
        cin >> input;
        if(input == oneToFour){
            correct[oneToThirtyTwo]++;
        }
        else incorrect[oneToThirtyTwo]++;
        cout << "Your stats for the term " << definitions[oneToThirtyTwo] << " are " << correct[oneToThirtyTwo] << " correct and " << incorrect[oneToThirtyTwo] << " wrong" << endl;
    }
void answerWithDefinition(){
    oneToThirtyTwo = rand() % 36;
    cout << terms[oneToThirtyTwo] << endl;
    oneToFour = ((rand() % 4) + 1);
    if(oneToFour == 1){
        cout << "1: " << definitions[oneToThirtyTwo] << endl;
    }
    else{
        optionOne = rand() % 36;
        if(optionOne != oneToThirtyTwo){
            cout << "1: " << definitions[optionOne] << endl;
        }
        else while (optionOne == oneToThirtyTwo){
            optionOne = rand() % 36;
            if(optionOne != oneToThirtyTwo){
                cout << "1: " << definitions[optionOne] << endl;
            }
        }
    }
    if(oneToFour == 2){
        cout << "2: " << definitions[oneToThirtyTwo] << endl;
    }
    else{
        optionTwo = rand() % 36;
        if(optionTwo != oneToThirtyTwo || (optionTwo != optionOne)){
            cout << "2: " << definitions[optionTwo] << endl;
        }
        else while ((optionTwo == oneToThirtyTwo) || (optionTwo == optionOne)){
            optionTwo = rand() % 36;
            cout << optionTwo << "Is option 2 " << endl;
            if(optionTwo != oneToThirtyTwo){
                cout << "2: " << definitions[optionTwo] << endl;
            }
        }
    }
    if(oneToFour == 3){
        cout << "3: " << definitions[oneToThirtyTwo] << endl;
    }
    else{
        optionThree = rand() % 36;
        if(optionThree != oneToThirtyTwo){
            cout << "3: " << definitions[optionThree] << endl;
        }
        else while (optionThree == oneToThirtyTwo || optionThree == optionOne || optionThree == optionTwo){
            optionThree = rand() % 36;
            if(optionThree != oneToThirtyTwo){
                cout << "3: " << definitions[optionThree] << endl;
            }
        }
    }
    if(oneToFour == 4){
        cout << "4: " << definitions[oneToThirtyTwo] << endl;
    }
    else{
        optionFour = rand() % 36;
        if(optionFour != oneToThirtyTwo){
            cout << "4: " << definitions[optionFour] << endl;
        }
        else while (optionFour == oneToThirtyTwo || optionFour == optionOne || optionFour == optionTwo || optionFour == optionThree){
            optionFour = rand() % 36;
            if(optionFour != oneToThirtyTwo){
                cout << "4: " << definitions[optionFour] << endl;
            }
        }
    }
    cin >> input;
    if(input == oneToFour){
        correct[oneToThirtyTwo]++;
    }
    else incorrect[oneToThirtyTwo]++;
    cout << "Your stats for the term " << terms[oneToThirtyTwo] << " are " << correct[oneToThirtyTwo] << " correct and " << incorrect[oneToThirtyTwo] << " wrong" << endl;
}
