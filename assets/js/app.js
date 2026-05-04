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


function increase(e) {
    const parent = e.target.parentElement;
    const numElement = parent.querySelector('.number');
    
    let count = parseInt(numElement.innerText);
    count++;
    numElement.innerText = count;
    
    updateTotal();
}

function decrease(e) {
    const parent = e.target.parentElement;
    const numElement = parent.querySelector('.number');
    
    let count = parseInt(numElement.innerText);
    if (count > 0) {
        count--;
        numElement.innerText = count;
        updateTotal();
    }
}

function updateTotal() {
    let subtotal = 0;
    
    const cards = document.querySelectorAll('.card-body');
    
    cards.forEach(card => {
        const price = parseFloat(card.querySelector('.price').innerText);
        const count = parseInt(card.querySelector('.number').innerText);
        subtotal += price * count;
    });

    const totalDisplays = document.getElementsByClassName('total-price');
    
    totalDisplays[0].innerText = subtotal.toFixed(2);
    totalDisplays[1].innerText = subtotal.toFixed(2);
}



