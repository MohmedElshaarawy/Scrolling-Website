let stars1 = document.getElementById('stars1')
let moon2 = document.getElementById('moon2')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river5 = document.getElementById('river5')
let boat6 = document.getElementById('boat6')
let mountains7 = document.getElementById('mountains7')
let stars = document.querySelector('.stars')
let lol = document.querySelector('.lol')
let nav = document.getElementById('nav')
let esc = document.querySelector('.esc')

window.onscroll = function(){
    let value = scrollY ; 
    stars1.style.left = value + 'px'; 
    moon2.style.top = value * 3 + 'px'; 
    mountains3.style.top = value * 1.5 + 'px'; 
    river5.style.top = value + 'px'; 
    boat6.style.left = value * 2 + 'px';
    boat6.style.top = value  + 'px';
    mountains4.style.top = value + 'px';
    mountains7.style.top = value + 'px';
    stars.style.fontSize = value + 'px';
    if(scrollY >= 67){
        stars.style.fontSize = 67 + 'px';
        stars.style.position = 'fixed'

    }
    if(scrollY >= 500){
        stars.style.display= 'none'
    }else{
        
        stars.style.display= 'block'
    }
    if(scrollY >= 294){
        document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)';
    }else{
        document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)';

    }
}   
    lol.onclick =()=>{
       nav.style.left = '300px'
       esc.style.display= 'block'
       esc.onclick = ()=>{
           esc.style.display= 'none'
            nav.style.left= ''
       }
    }