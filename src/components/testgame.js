import React from 'react';

export default function Battle() {
    const player1Att = 7
    const player2Att = 5

    const player1Life = 10
    const player2Life = 10

    const newLife1 = ;
    const newLife2 = ;

    
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const rollDice = () => getRandomNumber(1, 10);

    const player1 = rollDice();
    const player2 = rollDice();


    let result = '';


    if (player1 <= player1Att && player2 <= player2Att) {
        `${newLife1}` = player1Life - 1 && newLife2 = player2Life -1;
    } else if (player1 > player1Att && player2 <= player2Att) {
        return (newLife1 = player1Life - 1);
    } else if (player1 <= player1Att && player2 > player2Att) {
        result = 'you win';
    } else (player1 > player1Att && player2 > player2Att) {
        result = 'you lose';
    }



    return (
        <div id="app">
            <div>
                <input id="player1" placeholder="Enter Player 1 Name" />
            </div>
            <div>
                <input id="player2" placeholder="Enter Player 2 Name" />
            </div>
            <button id="roll">Roll Dice</button>
            <div id="results"></div>
        </div>
    )
}

