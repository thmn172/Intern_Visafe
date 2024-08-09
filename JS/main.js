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