// active menu
var navCnt = document.getElementById('nav-content');
    window.addEventListener('scroll', function(){
        if (window.scrollY > 90) {
            navCnt.classList.add('sticky-content-active');
        } else {
            navCnt.classList.remove('sticky-content-active');
        }
    });

