let chars = ["joker","panther", "skull", "queen", "mona", "fox", "oracle", "noir", "crow"];
let emptyChar = [];
let guessesRemaining = 10;
let points = 0;
let endGame = false;
let guessedLetters = [];
let foundLetter = false;


randomChar = chars[Math.floor(Math.random()*chars.length)]
console.log("random character is " + randomChar)

for(i=0;i<randomChar.length;i++){
if (randomChar[i]=== " "){
    emptyChar.push(" ")
}
else{
    emptyChar.push("_");
}
}

console.log("blank spaces are " + emptyChar);
console.log(emptyChar.join(' '));

emptyChar=emptyChar.join(' ');




