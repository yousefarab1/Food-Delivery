fetch("../components/navbar.html")           
        .then(response => response.text())
        .then(html => {
        document.getElementById("header").innerHTML = html;
});


fetch("../components/footer.html")           
.then(response => response.text())
.then(html => {
document.getElementById("footer").innerHTML = html;
});