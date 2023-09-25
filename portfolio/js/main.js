// ====================   togle icon navbar ============
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('. navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// ====================   scroll section actip ============
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
gjhk
window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = window.innerHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(Links =>{
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };

        // ============================== stycky navbar ===================
        let header = document.querySelector('header');

        header.classList.toggle('sticky', window.scrollY > 100);
    });
}