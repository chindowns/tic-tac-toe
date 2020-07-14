# Tic-Tac-Toe
https://chindowns.github.io/tic-tac-toe/

This is a simple jQuery game.  HTTML5, CSS and Javascript.  
It's you against the computer!

![Site](assets/images/gamePlay.gif)

# Technology
* JavaScript
* jQuery
* HTML5
* CSS

# Snippet
User and Computer moves.  The computer move randomly selects a square from the available squares then the square is removed from the array available.

```
    const playerMove = () => {
        $(".game-square").on("click", function (event) {
            event.preventDefault();

            let square = $(this).attr('id');
            square = +square;
            console.log(typeof (square));

            if (available.includes(square)) {

                $(this).html("X");
                board[square] = "X";
                available.splice(available.indexOf(square), 1);

                console.log(`Player chose: ${square}`)
                checkGame("player");
            }
        });
    }

    const computerMove = () => {
        console.log("Computer's Move");

        let index = Math.floor(Math.random() * available.length);
        let osquare = available[index];

        console.log(`Computer Chose: ${osquare}`);

        $(`#${osquare}`).html("O");
        board[osquare] = "O";
        available.splice(available.indexOf(osquare), 1);
        console.log(`Available Choices: ${available}`);

        checkGame("comp");
    }
```
# Author
### Michael Downs
<img src="https://avatars3.githubusercontent.com/u/61262454?v=4" alt = "Michael's avatar" style = "width: 40px; border-radius: 15px;"/>   [GitHub](https://github.com/chindowns) Michael Downs 
[LinkedIn](http://www.linkedin.com/in/michaeldownssj)  
