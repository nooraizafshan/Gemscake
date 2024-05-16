let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if(window.scrollY>60)
    {
        document.querySelector('#scroll-top').classList.add('active');
    }
    else{
        document.querySelector('#scroll-top').classList.remove('active');

    }

}
let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header navbar a');
window.onscroll =() =>{
    section.forEach(sec=> {
        let top=window.scrollY;
        let offset=sec.offsetTop;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>= offset && top<offset + height){
            navbar.forEach(links=> {
links.classList.remove(`active`);
document.querySelector('header navbar a [href='+id+']').classList.add(`active`);
            });
        };

    });
};