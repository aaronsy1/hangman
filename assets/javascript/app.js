letters = [];
attemptsRemaining = 10;
blank = [];
guessedLetters=[]
let char = [
    {
    name: "mona",
    image: "./assets/images/mona.jpg"
    },
    {
    name: "fox",
    image: "./assets/images/fox.jpg"
    },
    {
    name: "joker",
    image:"./assets/images/joker.jpg"
    },
    {
    name: "panther",
    image:"./assets/images/panther.jpg"
    },
    {
    name: "skull",
    image: "./assets/images/skull.jpg"
    },
    {
    name: "queen",
    image: "./assets/images/queen.jpg"
    },
    {
    name: "oracle",
    image: "./assets/images/oracle.jpg"
    },
    {
    name: "noir",
    image: "./assets/images/noir.jpg"
    },
    {
    name: "crow",
    image: "./assets/images/crow.jpg"
    }
]



let randomChar = char[Math.floor(Math.random() * char.length)];
console.log(randomChar.name);

//create an array of underscores and spaces to "hide the random character"
for (i = 0; i < randomChar.name.length; i++) {

    if (randomChar.name[i] === " ") {
        blank.push(" ");
    }
    else {
        blank.push("*");
    }

}


//function to change array of underscores and spaces into string
var arrToStr = function (arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}




//creating variable to easily store new string of underscores
empty = arrToStr(blank);



$(document).ready(function(){


    $("body").on('click','.startGame',function(){
        $(".startGame").hide();
        $(".gameBoard").show();
        $(".attemptsRemaining").append(`<h2>${attemptsRemaining}</h2>`);

        for (let i=0; i<26; i++){
            letters.push(String.fromCharCode(i+97))
            $(".letters").append($(`<button class="userInput btn btn-light m-1" value = ${String.fromCharCode(i+97)}> ${String.fromCharCode(i+97)} </button>`))
        }

        $(".randomWord").append(`<h2 class = "m-4">${empty}</h2>`);

        $(".userInput").on('click',function(){

            clickedLetter = $(this).val();

            attemptsRemaining--;
            $(".attemptsRemaining").html(`<h2>${attemptsRemaining}</h2>`);

            guessedLetters.push(clickedLetter);
            showGuessedLetters = arrToStr(guessedLetters)
            $(".guessedLetters").html(`<h2>${showGuessedLetters}</h2>`)


            for(let i=0; i<randomChar.name.length;i++){
                
                if(clickedLetter===randomChar.name[i]){
                    blank[i]=clickedLetter;
                    empty = arrToStr(blank);
                   
                
                $(".randomWord").html(`<h2 class = "m-4">${empty}</h2>`);
                    
                }
               
                
            }

      
        })
       

    })


})