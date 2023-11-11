console.log("welcome to Bingo")

// To fill box with random number between 1 to 25 

let box = document.querySelectorAll(".boxtext2 .num")
let bingoBox = document.querySelectorAll(".boxtext1 .x1")
// console.log(box[0].innerText); 
// console.log(box[2].innerText); 
// console.log(bingoBox[0].innerText);
// console.log(bingoBox[2].innerText);

let count = -1;
let flag = 0;


function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function createArrayOfNumbers(start, end) {
    let myArray = [];

    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }

    return myArray;
}

let numbersArray = createArrayOfNumbers(1, 25);

function fillBox() {
    let i = 0;
    while (numbersArray.length > 0 && i < 25) {
        let randomIndex = getRandomNumber(0, numbersArray.length - 1);
        let randomNumber = numbersArray[randomIndex];
        numbersArray.splice(randomIndex, 1);
        box[i].innerText = randomNumber;
        i++;
    }
}

fillBox();




// to display Cross "X" when click on respective number


// Function to check one complete cross
let checkCross = () => {
    let boxtext2 = document.getElementsByClassName("x")
    let boxes2 = document.getElementsByClassName("boxtext2");
    check = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
    ]

    let c = 0;
    check.forEach(e => {
        if ((boxtext2[e[0]].innerText === boxtext2[e[1]].innerText) && (boxtext2[e[1]].innerText === boxtext2[e[2]].innerText) && (boxtext2[e[2]].innerText === boxtext2[e[3]].innerText) && (boxtext2[e[3]].innerText === boxtext2[e[4]].innerText) && (boxtext2[e[0]].innerText !== "")) {

            c++;
            // console.log(e);
        }
    })

    if(c>flag){
        count=c;
        for(let i=0;i<c;i++)
        {
            bingoBox[i].innerText = "X";   
            bingoBox[i].style.display = "block";
        }
        flag++;
        // console.log(count);
    }

    // if (c > flag) {
    //     count++;
    //     bingoBox[count].innerText = "X";
    //     bingoBox[count].style.display = "block";
    //     flag++;
    //     console.log(count);
    // }

}

// to fill cross and display on click    

let boxes = document.getElementsByClassName("boxtext2");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.x');
    element.addEventListener('click', () => {
        boxtext.innerText = "X";
        boxtext.style.display = "block";
        checkCross();
        if(count===5){
            // console.log("YOU WON THE GAME");
            document.querySelector(".imgbox").style.scale = "1";
        }
        
    })
})

