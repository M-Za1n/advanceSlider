let body = document.getElementById('slider-body')
let leftArrow = document.getElementById('leftArrow')
let rightArrow = document.getElementById('rightArrow')
let pointers = document.getElementsByClassName('pointer');
let slides = document.querySelectorAll('.slide');
let buttons = document.querySelectorAll("button");
let img = document.querySelectorAll(".img");
let mindet= document.querySelectorAll(".min");
let showBox = document.getElementById("show");
let details= document.querySelectorAll(".det");
let detailsBox= document.getElementById('det') ;

// Setting up slider
// img[2].style.transform='translateX(-80%)';

let c= mindet.length-1;

showBox.innerHTML=mindet[c].innerHTML;
detailsBox.innerHTML=details[c].innerHTML;

function discription(){
    for(let i=0;i<slides.length;i++){
        if(slides[i].style.zIndex==slides.length-1){
            detailsBox.innerHTML=details[i].innerHTML;
            showBox.style.opacity='0';
            setTimeout(() => {
                showBox.innerHTML=mindet[i].innerHTML;
                showBox.style.opacity='1';
            }, 250);
        }
        
    }
}

function f(){
    showBox.style.opacity='0'
    for(let i=0;i<slides.length;i++){
        if(slides[i].style.zIndex==slides.length-1){
            let slide= i;
            img[slide].style.transform='translateX(-80%)';
        }
    }
    setTimeout(()=>{detailsBox.style.opacity='1';},400)
}
for (let i = 0; i < slides.length; i++) {
    slides[i].style.zIndex = i;
}
for (let i = slides.length - 2; i >= 0; i--) {
    let s = 1;
    for (let x = 1; x < (slides.length - slides[i].style.zIndex); x++) {
        s = s / 2;
    }
    slides[i].style.transform = `translateX(${(((slides.length - 1) - i) * 650) / 2}px) scale(${s})`;
    slides[i].classList.add("nexts");
}
setTimeout(setTransition, 1000);
function setTransition() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transition = '1s all ease';
    }
}

// cursor controling
document.addEventListener("mouseleave", function f() {
    leftArrow.style.display = 'none'
    rightArrow.style.display = 'none'
})
document.addEventListener("mousemove", function f(e) {
    console.log(e.clientX);
    let x = e.clientX;
    let y = e.clientY;
    let w = window.innerWidth;
    let h = window.innerHeight;
    if(y<h/8){
        body.style.cursor='default';
        leftArrow.style.display='none'
        rightArrow.style.display='none'
    }
    else if(detailsBox.style.opacity==1){
        rightArrow.style.display='none';
        if (x <= w / 8) {
            body.style.cursor = 'none'
            leftArrow.style.display = 'block';
            leftArrow.style.animation = '1s fadein 1';
            leftArrow.style.top = y + 'px';
            leftArrow.style.left = x + 'px';
        }
        else{
            leftArrow.style.display = 'none';
            body.style.cursor='default';
        }
    }
    else if (x <= w / 8) {
        body.style.cursor = 'none'
        rightArrow.style.display = 'none'
        leftArrow.style.display = 'block';
        leftArrow.style.animation = '1s fadein 1';
        leftArrow.style.top = y + 'px';
        leftArrow.style.left = x + 'px';
    }
    else if (x >= w / 2) {
        body.style.cursor = 'none'
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'block';
        rightArrow.style.animation = '1s fadein 1';
        rightArrow.style.left = x + 'px';
        rightArrow.style.top = y + 'px';
    }
    else if (x > w / 8 && x < w / 2 ) {
        body.style.cursor = 'default'
        rightArrow.style.animation = '1s fadout 1';
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
    }
})




// forward motion

rightArrow.addEventListener("click", moveForward)
function moveForward() {

    if (slides[0].style.zIndex == slides.length - 1) {
        rightArrow.style.borderColor = 'red';
    setTimeout(() => {
        rightArrow.style.borderColor = 'black';
    }, 250);
}

else {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.zIndex = Number(slides[i].style.zIndex) + 1;
        discription()
        let s = 1;
        for (let x = 1; x <= (slides.length - slides[i].style.zIndex); x++) {
            s = s / 2;
        }
        if (slides[i].style.zIndex > slides.length - 1) {
            slides[i].style.transform = `translateX(${-1 * ((slides[i].style.zIndex - (slides.length - 1)) * 800)}px) scale(${s * 1.5})`;
        }
        else {
            slides[i].style.transform = `translateX(${-1 * (((slides[i].style.zIndex - (slides.length - 1)) * 650) / 2)}px) scale(${s * 2})`;
        }
        if (slides[i].style.zIndex == slides.length - 1) {
            slides[i].classList.remove('nexts');
        }
        if (slides[i].style.zIndex > slides.length - 1) {
            slides[i].style.opacity = '0';
        }
    }
    rightArrow.style.borderColor = 'rgba(0,0,0,0)';
    setTimeout(() => {
        rightArrow.style.borderColor = 'black';
    }, 250);
}


}

// Reverse motion

leftArrow.addEventListener("click",moveBackward)

function moveBackward(){
    if(detailsBox.style.opacity==1){
        detailsBox.style.opacity=0;
        leftArrow.style.borderColor = 'rgba(0,0,0,0)';
        setTimeout(() => {
            leftArrow.style.borderColor = 'black';
        }, 250);
        for(let i=0;i<slides.length;i++){
            if(slides[i].style.zIndex==slides.length-1){
                let slide= i;
                img[slide].style.transform='translateX(0)';
            }   
        }
        setTimeout(() => {
            showBox.style.opacity=1;
        }, 250);
    }
    else if(slides[slides.length-1].style.zIndex==slides.length-1){
        leftArrow.style.borderColor = 'red';
        setTimeout(() => {
            leftArrow.style.borderColor = 'black';
        }, 250);
    }
    else{
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.zIndex = Number(slides[i].style.zIndex) - 1 ;
            discription();
            let s = 1;
            for (let x = 1; x <= ((slides.length-1) - slides[i].style.zIndex); x++) {
                s = s / 2;
            }
            if(slides[i].style.zIndex==slides.length-1)
            {
                slides[i].style.transform = `translateX(${-1*((slides[i].style.zIndex - (slides.length - 1)) * 800)}px) scale(1)`;
            }
            if(slides[i].style.zIndex<slides.length-1){
                slides[i].style.transform = `translateX(${-1*((slides[i].style.zIndex - (slides.length - 1)) * 650)/2}px) scale(${s})`
            }
            if (slides[i].style.zIndex >= slides.length ) {
                slides[i].style.transform = `translateX(${-1*((slides[i].style.zIndex - (slides.length - 1)) * 800)}px) scale(1.5)`;
            }
            if (slides[i].style.zIndex == slides.length - 1) {
                slides[i].style.opacity = '1';
            }
            if (slides[i].style.zIndex < slides.length - 1) {
                slides[i].classList.add('nexts');
            }
        }
        leftArrow.style.borderColor = 'rgba(0,0,0,0)';
        setTimeout(() => {
            leftArrow.style.borderColor = 'black';
        }, 250);
    }
}