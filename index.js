const min = 1 
const max = 100
const answer = Math.floor(Math.random() * (max -  min + 1 ) + min)

let attempt = 0
let guess ;
let running = true ;

while (running) {

    guess = window.prompt(`Guess the number between ${min} - ${max}  `)
    guess = Number(guess)

    if(isNaN(guess)){
        window.alert("Please enter a valid Number ")

    }
    else if(guess < min || guess > max){
        window.alert("Please enter a valid number")
    }
    else{
        attempt++;
        if(guess < answer){
            window.alert("Too Low! Try Again")
        }
        else if(guess > answer){
            window.alert("Too High! Try Again")
        }else if(guess === answer ){
            window.alert(`Yes!  You guessed the number correctly ${answer}`)
            running = false ; 
        }
    }
}
