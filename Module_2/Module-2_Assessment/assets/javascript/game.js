const chosenInfo = {
    sharkName: '',
    nameLength: 0,
    usedLetters: [],
    tries: 12,
    spaces: [],
    wins: 0
}

const sharks = {
    one: "Great White",
    two: "Thresher",
    three: "Great Hammerhead",
    four: "Tiger",
    five: "Bull",
    six: "Whale",
    seven: "Blue",
    eight: "Cookiecutter",
    nine: "Mako",
    ten: "Nurse",
    eleven: "Reef",
    twelve: "Black Tip",
    thirteen: "White Tip",
    fourteen: "Leopard",
    fifteen: "Zebra",
}

function getRandomShark() {
    const max = 15;
    const min = 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getShark() {
    const shark = getRandomShark();
    let name = '';
    let length = 0;
    switch (shark) {
        case 1:
            name = sharks.one;
            break;
        case 2:
            name = sharks.two;
            break;
        case 3:
            name = sharks.three;
            break;
        case 4:
            name = sharks.four;
            break;
        case 5:
            name = sharks.five;
            break;
        case 6:
            name = sharks.six;
            break;
        case 7:
            name = sharks.seven;
            break;
        case 8:
            name = sharks.eight;
            break;
        case 9:
            name = sharks.nine;
            break;
        case 10:
            name = sharks.ten;
            break;
        case 11:
            name = sharks.eleven;
            break;
        case 12:
            name = sharks.twelve;
            break;
        case 13:
            name = sharks.thirteen;
            break;
        case 14:
            name = sharks.fourteen;
            break;
        case 15:
            name = sharks.fifteen;
            break;
    }
    length = name.split('').length;
    console.log('Name:' + name + '\nlength:' + length);
    return {name, length};
}

function gameSet(event) {
    chosenInfo.spaces = [];
    const {name, length} = getShark();
    chosenInfo.sharkName = name;
    chosenInfo.nameLength = length;
    const letters = '^[A-Za-z]+$';
    for (i = 0; i < length; i++) {
        if (name.split('')[i] !== ' ') {
            chosenInfo.spaces.push('_ ')
        }
    }
    document.querySelector('#word').innerHTML = chosenInfo.spaces.join('');
}

function winner() {
    chosenInfo.wins += 1;
    document.querySelector('#caption').innerHTML = chosenInfo.sharkName;
    document.querySelector('#wins').innerHTML = chosenInfo.wins;
    switch(chosenInfo.sharkName) {
        case "Great White":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/great-white.jpg" + ">";
            break; 
        case "Thresher":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/thresher.jpg" + ">";
            break; 
        case "Great Hammerhead":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/great-hammerhead.jpg" + ">";
            break; 
        case "Tiger":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/tiger.png" + ">";
            break; 
        case "Bull":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/bull.jpg" + ">";
            break; 
        case "Whale":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/whale.jpg" + ">";
            break; 
        case "Blue":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/blue.jpg" + ">";
            break; 
        case "Cookiecutter":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/cookiecutter.jpg" + ">";
            break; 
        case "Mako":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/mako.jpg" + ">";
            break; 
        case "Nurse":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/nurse.jpg" + ">";
            break; 
        case "Reef":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/reef.jpg" + ">";
            break; 
        case "Black Tip":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/black-tip.jpg" + ">";
            break; 
        case "White Tip":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/white-tip.jpg" + ">";
            break; 
        case "Leopard":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/Leopard.jpg" + ">";
            break; 
        case "Zebra":
            document.querySelector('#answer-img').innerHTML = "<img src=" + "../images/sharks/zebra.jpg" + ">";
            break; 

    }
}

function fillWord(letter) {
    chosenInfo.usedLetters.push(letter);
    if (chosenInfo.sharkName.includes(letter)) {
        const indecies = [];
        for (i = 0; i < chosenInfo.sharkName.length; i++) {
            if (chosenInfo.sharkName.split('')[i] === letter) {
                indecies.push(i)
            }
        }
        for (i = 0; i < chosenInfo.sharkName.length; i++) {
            for(j = 0; j < indecies.length; j++) {
                if(i === indecies[j]) {
                    chosenInfo.spaces[i] = letter;
                }
            }

        }
        document.querySelector('#word').innerHTML = chosenInfo.spaces.join('');
        if (document.querySelector('#word').innerHTML === chosenInfo.sharkName) {
            winner();
        }
    } else {
        chosenInfo.tries -= 1;
    }    
    document.querySelector('#letters').innerHTML = chosenInfo.usedLetters;
    document.querySelector('#guesses').innerHTML = chosenInfo.tries;
}

function continueGame(event) {
    switch (event.key) {
        case 'a':
            if (!chosenInfo.usedLetters.includes('a') && chosenInfo.tries > 0) {
                fillWord('a');
            }
            break;
        case 'b':
            if (!chosenInfo.usedLetters.includes('b') && chosenInfo.tries > 0) {
                fillWord('b');
            }
            break;
        case 'c':
            if (!chosenInfo.usedLetters.includes('c') && chosenInfo.tries > 0) {
                fillWord('c');
            }
            break;
        case 'd':
            if (!chosenInfo.usedLetters.includes('d') && chosenInfo.tries > 0) {
                fillWord('d');
            }
            break;
        case 'e':
            if (!chosenInfo.usedLetters.includes('e') && chosenInfo.tries > 0) {
                fillWord('e');
            }
            break;
        case 'f':
            if (!chosenInfo.usedLetters.includes('f') && chosenInfo.tries > 0) {
                fillWord('f');
            }
            break;
        case 'g':
            if (!chosenInfo.usedLetters.includes('g') && chosenInfo.tries > 0) {
                fillWord('g');
            }
            break;
        case 'h':
            if (!chosenInfo.usedLetters.includes('h') && chosenInfo.tries > 0) {
                fillWord('h');
            }
            break;
        case 'i':
            if (!chosenInfo.usedLetters.includes('i') && chosenInfo.tries > 0) {
                fillWord('i');
            }
            break;
        case 'j':
            if (!chosenInfo.usedLetters.includes('j') && chosenInfo.tries > 0) {
                fillWord('j');
            }
            break;
        case 'k':
            if (!chosenInfo.usedLetters.includes('k') && chosenInfo.tries > 0) {
                fillWord('k');
            }
            break;
        case 'l':
            if (!chosenInfo.usedLetters.includes('l') && chosenInfo.tries > 0) {
                fillWord('l');
            }
            break;
        case 'm':
            if (!chosenInfo.usedLetters.includes('m') && chosenInfo.tries > 0) {
                fillWord('m');
            }
            break;
        case 'n':
            if (!chosenInfo.usedLetters.includes('n') && chosenInfo.tries > 0) {
                fillWord('n');
            }
            break;
        case 'o':
            if (!chosenInfo.usedLetters.includes('o') && chosenInfo.tries > 0) {
                fillWord('o');
            }
            break;
        case 'p':
            if (!chosenInfo.usedLetters.includes('p') && chosenInfo.tries > 0) {
                fillWord('p');
            }
            break;
        case 'q':
            if (!chosenInfo.usedLetters.includes('q') && chosenInfo.tries > 0) {
                fillWord('q');
            }
            break;
        case 'r':
            if (!chosenInfo.usedLetters.includes('r') && chosenInfo.tries > 0) {
                fillWord('r');
            }
            break;
        case 's':
            if (!chosenInfo.usedLetters.includes('s') && chosenInfo.tries > 0) {
                fillWord('s');
            }
            break;
        case 't':
            if (!chosenInfo.usedLetters.includes('t') && chosenInfo.tries > 0) {
                fillWord('t');
            }
            break;
        case 'u':
            if (!chosenInfo.usedLetters.includes('u') && chosenInfo.tries > 0) {
                fillWord('u');
            }
            break;
        case 'v':
            if (!chosenInfo.usedLetters.includes('v') && chosenInfo.tries > 0) {
                fillWord('v');
            }
            break;
        case 'w':
            if (!chosenInfo.usedLetters.includes('w') && chosenInfo.tries > 0) {
                fillWord('w');
            }
            break;
        case 'x':
            if (!chosenInfo.usedLetters.includes('x') && chosenInfo.tries > 0) {
                fillWord('x');
            }
            break;
        case 'y':
            if (!chosenInfo.usedLetters.includes('y') && chosenInfo.tries > 0) {
                fillWord('y');
            }
            break;
        case 'z':
            if (!chosenInfo.usedLetters.includes('z') && chosenInfo.tries > 0) {
                fillWord('z');
            }
            break;
    }
}

document.addEventListener('mouseenter', gameSet);
document.addEventListener('keyup', continueGame);

