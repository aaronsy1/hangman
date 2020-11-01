letters = [];
attemptsRemaining = 10;
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
console.log(randomChar);



$(document).ready(function(){


    $("body").on('click','.startGame',function(){
        $(".startGame").hide();
        $(".gameBoard").show();
        $(".attemptsRemaining").append(`<h2>${attemptsRemaining}</h3>`);

        for (i=0; i<26; i++){
            letters.push(String.fromCharCode(i+97))
            $(".letters").append($(`<button class="userInput btn btn-light m-1" value = ${String.fromCharCode(i+97)}> ${String.fromCharCode(i+97)} </button>`))
        }

        $(".randomWord")
       

    })


})

