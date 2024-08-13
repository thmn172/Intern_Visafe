function loadComponent(url, id){
    fetch(url)
    .then(response=>response.text()
    .then(data=>{document.getElementById(id).innerHTML = data;}));
}
function loadComponents(){
    loadComponent('../component/header.html', 'header');
    loadComponent('../component/navbar.html', 'navbar');
    loadComponent('../component/footer.html', 'footer');
}
window.onload = loadComponents;

var img = document.getElementById('img')
document.addEventListener("onLoad", function() {
    var imageContainer = img;

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                imageContainer.classList.add("visible");
            }
        });
    });

    observer.observe(imageContainer);
});