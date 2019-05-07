var slide_id = 1;

function show_slide(n) {
    var i, slides = document.getElementsByClassName('slides'), dots = document.getElementsByClassName('dots');
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
              
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    
    slides[slide_id - 1].style.display = 'block';  
    dots[slide_id - 1].className += ' active';
}

function current_slide(n) {
    show_slide(slide_id = n);
}
            