// After yet another dispute on their game the Bingo Association decides to change course and automate the game.
//
//     Can you help the association by writing a method to create a random Bingo card?
//
//     Bingo Cards
// A Bingo card contains 24 unique and random numbers according to this scheme:
//
//     5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75
// Task
// Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:
//
//     [ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
// The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

function getCard() {
    const arrLetters = ['B', 'I', 'N', 'G', 'O'];
    const arrRes = [];
    arrLetters.forEach((letter)=>{
        let count = 0;
        while (count<5){
            let rangeFrom = 1;
            let rangeTo = 0;
            switch (letter){
                case 'B':
                    rangeFrom = 1;
                    rangeTo = 15;
                    break;
                case 'I':
                    rangeFrom = 16;
                    rangeTo = 30;
                    break;
                case 'N':
                    rangeFrom = 31;
                    rangeTo = 45;
                    break;
                case 'G':
                    rangeFrom = 46;
                    rangeTo = 60;
                    break;
                case 'O':
                    rangeFrom = 61;
                    rangeTo = 75;
                    break;
            }
            if(letter==='N'&&count===4) break;
            let symbol = letter+getRandomInt(rangeFrom,rangeTo);
            while (arrRes.includes(symbol)){
                symbol = letter+getRandomInt(rangeFrom,rangeTo);
            }
            arrRes.push(symbol);
            count=count+1;
        }
    })
    return arrRes;
    // Start your coding here...
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getCard())