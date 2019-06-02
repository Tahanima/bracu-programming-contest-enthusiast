var slide_id = 1;

function show_slide(n) {
    var i, slides = document.getElementsByClassName('slides'), dots = document.getElementsByClassName('dots');
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
              
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active-dots', '');
    }

    slides[slide_id - 1].style.display = 'block';  
    dots[slide_id - 1].className += ' active-dots';
}

function current_slide(n) {
    show_slide(slide_id = n);
}

function toggle_nav(){
    var main_nav = document.getElementById('js-menu');;
    main_nav.classList.toggle('active');
}
