console.log ("Hello World!");

let homeScore = document.getElementById('homeScore');
let guestScore = document.getElementById('guestScore');
let countHome = 0;
let countGuest = 0;

function add1(team, scoreAmount){
    if(team == homeScore){
        countHome += 1;
        homeScore.textContent = countHome;
    }
    else{
        countGuest += 1;
        guestScore.textContent = countGuest;
    }
}

function add2(team, scoreAmount){
    if(team == homeScore){
        countHome += 2;
        homeScore.textContent = countHome;
    }
    else{
        countGuest += 2;
        guestScore.textContent = countGuest;
    }
}

function add3(team, scoreAmount){
    if(team == homeScore){
        countHome += 3;
        homeScore.textContent = countHome;
    }
    else{
        countGuest += 3;
        guestScore.textContent = countGuest;
    }
}