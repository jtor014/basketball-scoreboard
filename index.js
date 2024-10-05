let homeScore = 0
let guestScore = 0


function add1home(){
    homeScore = homeScore + 1
    document.getElementById("home-score").innerHTML = homeScore;
}
function add2home(){
    homeScore = homeScore + 2
    document.getElementById("home-score").innerHTML = homeScore;
}
function add3home(){
    homeScore = homeScore + 3
    document.getElementById("home-score").innerHTML = homeScore;
}
function add1guest(){
    guestScore = guestScore + 1
    document.getElementById("guest-score").innerHTML = guestScore;
}
function add2guest(){
    guestScore = guestScore + 2
    document.getElementById("guest-score").innerHTML = guestScore;
}
function add3guest(){
    guestScore = guestScore + 3
    document.getElementById("guest-score").innerHTML = guestScore;
}

