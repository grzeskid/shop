document.addEventListener("DOMContentLoaded" ,function(){
    // ilość produktów
    const products = document.getElementById("products");
    // zamówienia
    const orders = document.getElementById("orders");
    //pakiet do wyboru
    const package = document.getElementById("package");
    // lista wyboru pakietu
    const packageList = document.querySelector(".select__dropdown");
    // checkbox księgowość
    const account = document.getElementById("accounting");
    // checkbox terminal
    const terminal = document.getElementById("terminal");
    // suma
    const sum = document.getElementById("total-price");
    console.log(account);

    package.addEventListener("click", addClass);

    function addClass(event){
        event.target.parentElement.classList.add("open");
        console.log(event.target);
    }
    //koniec document.
})