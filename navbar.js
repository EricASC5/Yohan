

let btn3= document.getElementById("second_button");
btn3.addEventListener("click",contact2);

function contact2(){
    document.location.href="contact.html"
}

let btn4= document.getElementById("third_button");
btn4.addEventListener("click",games);

function games(){
    document.location.href="games.html"
}

let btn5= document.getElementById("fourth_button");
btn5.addEventListener("click",navigate);

function navigate(){
    document.location.href="about.html"
}

let btn6= document.getElementById("top_button");
btn6.addEventListener("click", home);

function home(){
    document.location.href="index.html"
}
