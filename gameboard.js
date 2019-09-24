let arrHole = [];
let rabbit = new RabbitHole();

function createArrHole() {
    for (let i = 1; i <= 10; i++) {
        arrHole.push(rabbit);
    }
}

createArrHole();
let temp = 0;
let id = "";
let countScore = 0;

function checkRabbit() {
    if (arrHole[0].status === false || arrHole[1].status === false
        || arrHole[2].status === false || arrHole[3].status === false || arrHole[4].status === false
        || arrHole[5].status === false || arrHole[6].status === false || arrHole[7].status === false
        || arrHole[8].status === false || arrHole[9].status === false) {
        let randomNumber = Math.ceil(Math.random() * 9);
        temp = randomNumber;
        id = "game" + randomNumber;
        arrHole[randomNumber].checkRabbitOnHole();
        document.getElementById(id).innerHTML = arrHole[randomNumber].getImageRabbit();
    } else {
        arrHole[temp].checkRabbitOffHole();
        document.getElementById(id).innerHTML = "";
    }
}
let clear;

function start() {
    clear = setInterval(checkRabbit,500);
    document.getElementById('quit').hidden = false;
    document.getElementById('start').hidden = true;
    document.getElementById('displayTable').style.display = "Block";
}

function clearScreen() {
    clearInterval(clear);
}
function quit() {
    reset();
    document.getElementById('displayTable').style.display = "none";
    document.getElementById('quit').hidden = true;
    document.getElementById('start').hidden = false;
}

function increaseScore() {
    ++countScore;
    let  total = countScore * 1000;
    document.getElementById('displayScocer').innerText = "Điểm " + total;
    if (countScore === 10) {
        alert("Bạn đã chiến thắng");
        reset();
    }
}

function reset() {
    clearScreen();
    countScore = 0;
    document.getElementById('displayScocer').innerText = "Điểm " + "";
    document.getElementById('quit').hidden = true;
    document.getElementById('start').hidden = false;
}
