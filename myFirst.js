var navbar=document.querySelector('.navbar');

var menu_bar=document.querySelector('#menu-bar');
menu_bar.onclick=function()
{
    navbar.classList.toggle('active');    
};
var close=document.querySelector('#close');
close.onclick=function(){
    navbar.classList.remove('active');
};

window.onscroll=function()
{
    navbar.classList.remove('active');
    if(window.pageYOffset>100)
    {
        var header=document.querySelector('header');
        header.classList.add('active');
    }
    else
    {
        header.classList.remove('active');
    }
};

var theme_toggler=document.querySelector('#theme-toggler');
theme_toggler.onclick=function()
{
    theme_toggler.classList.toggle('fa-sun');
    var body=document.querySelector('body');
    if(theme_toggler.classList.contains('fa-sun'))
    {
        body.classList.add('active');
    }
    else
    {
        body.classList.remove('active');
    }
}

var small_image=document.querySelectorAll('.small-image-1');
small_image.forEach(function(value)
{
    var element=value;
    element.onclick=function()
    {
        var big_image=document.querySelector('.big-image-1');
        big_image.src=element.getAttribute('src');
    }
});

var small_image=document.querySelectorAll('.small-image-2');
small_image.forEach(function(value)
{
    var element=value;
    element.onclick=function()
    {
        var big_image=document.querySelector('.big-image-2');
        big_image.src=element.getAttribute('src');
    }
});

var small_image=document.querySelectorAll('.small-image-3');
small_image.forEach(function(value)
{
    var element=value;
    element.onclick=function()
    {
        var big_image=document.querySelector('.big-image-3');
        big_image.src=element.getAttribute('src');
    }
});



var offerDate = new Date('february 8, 2023 05:00:00').getTime();

function timeCountDown(){

    var now = new Date().getTime();
	gap = offerDate - now;

    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;

    var d = Math.floor(gap / (days));
	var h = Math.floor((gap % (days)) / (hours));
	var m = Math.floor((gap % (hours)) / (minutes));
	var s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}
setInterval(function()
{
    timeCountDown();
},1000);

var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});