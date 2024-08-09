function loadComponent(url, id){
    fetch(url)
    .then(response=>response.text()
    .then(data=>{document.getElementById(id).innerHTML = data;}));
}
function loadComponents(){
    loadComponent('/front-end/component/header.html', 'header');
    loadComponent('/front-end/component/navbar.html', 'navbar');
    loadComponent('/front-end/component/footer.html', 'footer');
}
window.onload = loadComponents;