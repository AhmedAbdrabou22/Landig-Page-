$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
});
var setting = document.getElementById("setting");

setting.addEventListener("click",()=>{
    if(setting.classList.contains('toggle')){
        setting.classList.remove('toggle')
        setting.classList.add('sett');
        setting.style.transition = '1s';
    }else{
        setting.classList.add('toggle');
    }
})

//Calling Bakground colors for change color of background 
var color1 = document.querySelector('.color1')
var color2 = document.querySelector('.color2')
var color3 = document.querySelector('.color3')
var color4 = document.querySelector('.color4')

var svg = document.querySelector('.svg path');
var nav = document.querySelector('.nav');
var test = document.querySelector('.test .overlay');
var sub = document.querySelector('.subscripe .overlay');
var footer = document.querySelector('.footer')
color3.addEventListener('click',()=>{
    svg.setAttribute('fill','#05b3b6');
    nav.style.backgroundColor ='#05b3b6';
    test.style.backgroundColor ='#05b3b6';
    sub.style.backgroundColor ='#05b3b6';
    footer.style.backgroundColor ='#05b3b6';
})
