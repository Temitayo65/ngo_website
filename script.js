const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const navControl = document.querySelector('.nav_control');
    const navList = document.querySelectorAll('.nav_control li');

    burger.addEventListener('click', function(){
        navControl.classList.toggle('nav_active')
    })

    navList.forEach(function(links,index){
        if(links.style.animation){
            links.style.animation = ''
        }else{
            links.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 1.5}s`
        }
    })
}
navSlide();
