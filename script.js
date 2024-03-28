let user_score = 0;
let comp_score = 0;

let choices = document.querySelectorAll(".choice")



/*
    1 --> Rock
    2 --> Paper
    3 --> Scissors 

*/
let computer_input = Math.floor(Math.random() * 3 + 1);
function com_inp(){
   computer_input  = Math.floor(Math.random() * 3 + 1);
    // console.log(computer_input )
}


let user_input = 0;


function print_inputs(){
    console.log("User input : " , user_input);
    console.log("Computers_input :",computer_input);
}
let p_user = document.querySelector("#users_score")
let c_user = document.querySelector("#computers_score")
let msg_dispayed = document.querySelector("#msg")


function who_wins(){
    if(user_input == computer_input){
        console.log("Its a draw ")
        msg_dispayed.innerHTML = "Its a Draw(Both choosed same)"
    }
    else if(user_input == 1 && computer_input == 2){
        console.log("Computer win --> Paper catches rock")
        comp_score++
        c_user.innerHTML = comp_score
        msg_dispayed.innerHTML = "Computer choosed Paper( Paper catches rock)... You lost"
    }
    else if(user_input == 2 && computer_input == 1){
        console.log("User win -- > Paper catches rock");
        user_score++
        p_user.innerHTML=user_score
        msg_dispayed.innerHTML = "Computer choosed Rock(Paper catches rock)... You won"
    }
    else if(user_input == 2 && computer_input == 3){
        console.log("Computer win --> scissors cut paper")
        comp_score++
        c_user.innerHTML = comp_score
        msg_dispayed.innerHTML = "Computer choosed scissors(scissors cut paper)... You lost"
    }
    else if(user_input == 3 && computer_input == 2){
        console.log("User win -- > scissors cut paper");
        user_score++
        p_user.innerHTML=user_score
        msg_dispayed.innerHTML = "Computer choosed Paper(scissors cut paper)... You won"
    }
    else if(user_input == 1 && computer_input == 3){
        console.log("user win --> rock destroys scissors")
        user_score++
        p_user.innerHTML=user_score
        msg_dispayed.innerHTML = "Computer choosed scissors(rock destroys scissors)... You won"
    }
    else if(user_input == 3 && computer_input == 1){
        console.log("computer win -- > rock destroys scissors");
        comp_score++
        c_user.innerHTML = comp_score
        msg_dispayed.innerHTML = "Computer choosed rock(rock destroys scissors)... You lost"
    }
}

function print_score(){
    console.log("Users Score : " , user_score);
    console.log("Computers Score : " , comp_score);
}
let rock = document.querySelector("#r")

function rock_func(){
    // console.log("Clicked rock")
    user_input = 1
    print_inputs()
    who_wins()
    print_score()

    com_inp()
    
}
rock.addEventListener("click" , rock_func)


let paper = document.querySelector("#p")

function paper_func(){
    // console.log("Clicked paper ")
    user_input = 2
    print_inputs()
    who_wins()
    print_score()
    com_inp()
}
paper.addEventListener("click" , paper_func)

let scissors = document.querySelector("#s")

function scissors_func(){
    // console.log("Clicked scissors")
    user_input = 3
    print_inputs()
    who_wins()
    print_score()
    com_inp()
}
scissors.addEventListener("click" , scissors_func)


if(user_input!= 0){
    console.log(user_input)
    console.log(computer_input)
}
