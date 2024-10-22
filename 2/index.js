

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');



function ifMobile (){

    const mobileSize = 768;

    if(window.innerWidth <= mobileSize){
        hamburger.style.visibility = 'visible';
        menu.style.flexDirection = 'column'
        
        
    }else{
        console.log('Window width is PC size');
        hamburger.style.visibility = 'hidden';
        
        menu.style.flexDirection = 'row'
        
    }
}

ifMobile();

window.addEventListener('resize' , ifMobile);

// Width phone jitni ho create a hamburger circle at top left and on click of it create a div which has all of these menu items present vertically