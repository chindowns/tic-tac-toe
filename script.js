const board = [null, null, null, null, null, null, null, null, null];

$(document).ready(() => {
    const playerMove = () => {
        $(".game-square").on("click", function (event) {
            event.preventDefault();
            let square = $(this).attr('id')

            $(this).html("X");
            $(this).addClass("uk-padding-medium-vertical");

            board[square] = "X";

            checkGame("player");
        });
    }

    const computerMove = () => {
        console.log("Computer's Move");
        let selected = false;

        const tries = board.map((played, index) => {
            if(played === null ) {
                return null
            }else {
                return index
            }
        });

        // const tries = [];
        // for (let i = 0; i < 9; i++){
        //     if(board[i] !== null){
        //         tries.push(i);
        //     }
        // }
        console.log(tries);

        do {
            let setSquare = Math.floor(Math.random() * 9);
            console.log(setSquare);
            if (tries[setSquare] === null) {
                selected = true;
                $(`#${setSquare}`).html("O");
            }
        }
        while (selected === false);

        checkGame("comp");
    }

    const checkGame = (turn) => {
        const row1 = board[0] + board[1] + board[2];
        const row2 = board[3] + board[4] + board[5];
        const row3 = board[6] + board[7] + board[8];
        const col1 = board[0] + board[3] + board[6];
        const col2 = board[1] + board[4] + board[7];
        const col3 = board[2] + board[5] + board[8];
        const diag1 = board[0] + board[4] + board[8];
        const diag2 = board[2] + board[4] + board[6];


        if (row1 === "XXX" ||
            row2 === "XXX" ||
            row3 === "XXX" ||
            col1 === "XXX" ||
            col2 === "XXX" ||
            col3 === "XXX" ||
            diag1 === "XXX" ||
            diag2 === "XXX" ) {
            $("#game").html(`<h1>YOU WIN</h1>`);
        }
        else if (row1 === "OOO" ||
            row2 === "OOO" ||
            row3 === "OOO" ||
            col1 === "OOO" ||
            col2 === "OOO" ||
            col3 === "OOO" ||
            diag1 === "OOO" ||
            diag2 === "OOO") {
            $("#game").html(`<h1>you lose<h1>`);
        }
        else {
            nextMove(turn);
        }
    }

    const nextMove = (turn) => {
        if (turn === "player") {
            computerMove();
        }
        else {
            playerMove();
        }
    }

    playerMove();

})







