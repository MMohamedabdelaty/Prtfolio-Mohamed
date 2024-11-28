'use strict';
console.log("Hi Pr");

$(window).scroll(function (){
    let scrolled = $(window).scrollTop();
    if (scrolled > 500) $(".backtotop").show(500);
    if (scrolled < 500) $(".backtotop").hide(500);
})
$(".backtotop").click(function (){
    $("html , body").animate({
        scrollTop: "0"} , 0)
})

//Let's open and close the mobile menu
$(".openmenu").click(function (){
    $(".sidebar").animate({
        right: "0px"
    })
})
$(".closemenu").click(function (){
    $(".sidebar").animate({
        right: "-250px"
    })
})

let sidebar = document.querySelector('.sidebar');

document.querySelector('#menu-icon').onclick = () => {
    sidebar.classList.toggle('active') 
}
window.onscroll = () => {
    navbar.classList.animate('active');
}

