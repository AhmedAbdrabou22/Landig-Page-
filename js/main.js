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


var svg = document.querySelector('.svg path');
var nav = document.querySelector('.nav');
var test = document.querySelector('.test .overlay');
var sub = document.querySelector('.subscripe .overlay');
var footer = document.querySelector('.footer')
var features = document.querySelector('.features')
var caurs = document.querySelector('.caurs')
var allColors = document.querySelectorAll('.color');

allColors.forEach((color)=>{
    color.addEventListener('click',()=>{
        var atr = color.getAttribute('value');
        nav.style.backgroundColor=atr;
        svg.setAttribute('fill',atr);
        test.style.backgroundColor=atr;
        sub.style.backgroundColor=atr;
        footer.style.backgroundColor=atr;
        features.style.backgroundColor=atr;
    })
})