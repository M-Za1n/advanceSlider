let form = document.getElementById('form');
let regForm = document.getElementById('reg-form');
let logForm = document.getElementById('log-form');
let swtch = document.getElementById('switch');
function swt(){
    if (swtch.innerHTML=='Sign Up'){
        document.getElementById("desc").style.transform='translateX(-150%)'
        document.getElementById("frm").style.transform='translateX(66.65%)'
        logForm.style.animation='0.3s fadeout 1';
        document.getElementById('h').innerHTML='Already a Member ..?'
        document.getElementById('ds').innerHTML='No nee to create an account just click the button below and log in'
        setTimeout(function f(){logForm.style.display='none';},250)
        setTimeout(function f(){regForm.style.display='flex'},400)
        regForm.style.animation='0.3s fadein 1'
        swtch.innerHTML='Log In'
    }
    else{
        document.getElementById("desc").style.transform='translateX(0)'
        document.getElementById("frm").style.transform='translateX(0)'
        document.getElementById('h').innerHTML='Welcome !'
        document.getElementById('ds').innerHTML="Login to track your status<br>Dont have an account dont worry just click the button below to get registered it's free! :) "
        regForm.style.animation='0.3s fadeout 1';
        setTimeout(function f(){regForm.style.display='none';},250)
        setTimeout(function f(){logForm.style.display='flex'},400)
        logForm.style.animation='0.3s fadein 1'
        swtch.innerHTML='Sign Up'
    }
}
