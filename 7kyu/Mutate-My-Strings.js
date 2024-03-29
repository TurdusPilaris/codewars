// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.
//
//     Example:
//
// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';
//
// Result:
//     bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

function mutateMyStrings(stringOne, stringTwo){
    const arrayForStringTwo = stringTwo.split("");
    let stringFinish = stringOne+ "\n";
    let stringUpdate = stringOne;
    for(let i = 0; i< arrayForStringTwo.length; i++){
        let char = arrayForStringTwo[i];
        stringUpdate  = stringUpdate.substring(0, i) + char + stringUpdate.substring(i + 1);
        stringFinish = stringFinish.includes(stringUpdate+ "\n")?stringFinish:stringFinish + stringUpdate+ "\n";
    }
    return stringFinish;
}

console.log( mutateMyStrings('bubble gum', 'turtle ham') )//, 'bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n');