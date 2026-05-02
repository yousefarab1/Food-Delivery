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


const num = document.getElementsByClassName("number")[0]
const price = Number(document.getElementsByClassName('price')[0].innerText)
const total_price = document.getElementsByClassName('total-price')[0]
const total_price1 = document.getElementsByClassName('total-price')[1]
var count = 0

function increase(e) {
    count++
    update()
}

function decrease(e) {
    if (count > 0) {
        count--
        update()
    }
}

function update() {
    num.innerText = count
    const total = price * count
    total_price.innerText = total
    total_price1.innerText = total
}







