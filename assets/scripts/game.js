
let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

let players = ['X', 'O'];

let currentPlayer;

function setup() {
    createCanvas(400, 400);
    curentPlayer = random(players);
}

function draw() {
    background(245);
    let w = width / 3;
    let h = height / 3;

    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let x = w * i + w / 2;
            let y = h * j + h / 2;
            let spot = board[j][i]; //j first so x represents x-axis 
            textSize(32);
            strokeWeight(4)
            if (spot == players[0]) {
                let xr = w / 4
                line(x - xr, y - xr, x + xr, y + xr)
                line(x + xr, y - xr, x - xr, y + xr)
            } else if (spot === players[1]) {
                noFill();
                ellipse(x, y, w / 2);
            }
            // text(spot, x, y);
        }
    }
}

draw();