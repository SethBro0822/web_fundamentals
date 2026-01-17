
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        logo.setAttribute("src", "byui-logo-white.webp");
        document.querySelector("body").style.backgroundColor = "#333";
        document.querySelectorAll('h1, p, i, ol').forEach(el => {
    el.style.color = "white";
});
 
    } else {
        // code for changes to colors and logo
        logo.setAttribute("src", "BYUI_Logo.webp");
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelectorAll('h1, p, i, ol').forEach(el => {
    el.style.color = "black";
});
}}         
                    