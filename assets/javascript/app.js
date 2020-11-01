letters = [];



console.log(letters)

$(document).ready(function(){


    $("body").on('click','.startGame',function(){
        $(".startGame").hide();
        $(".gameBoard").show();

        for (i=0; i<26; i++){
            letters.push(String.fromCharCode(i+97))
            $(".letters").append($(`<button class="userInput btn btn-light m-1" value = ${String.fromCharCode(i+97)}> ${String.fromCharCode(i+97)} </button>`))
        }
        console.log(letters);
        

        
    })


})

