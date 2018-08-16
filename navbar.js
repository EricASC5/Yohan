//home button
let btn1= document.getElementById("home_button");
if(btn1){
    btn1.addEventListener("click", home);
}
function home(){
    document.location.href="index.html"
}

// contact button
let btn2= document.getElementById("contact_button");
if(btn2){
    btn2.addEventListener("click",contact2);
}
function contact2(){
    document.location.href="contact.html"
}

//games button
let btn3= document.getElementById("games_button");
if(btn3){
    btn3.addEventListener("click",games);
}
function games(){
    document.location.href="games.html"
}


//about button
let btn4= document.getElementById("about_button");
if(btn4){
    btn4.addEventListener("click",navigate);
}
function navigate(){
    document.location.href="about.html"
}

//assets button
let btn5= document.getElementById("assets_button");
if(btn5){
    btn5.addEventListener("click", assets);
}
function assets(event){
    event.preventDefault();
    document.location.href="assets.html";
}
