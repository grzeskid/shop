document.addEventListener("DOMContentLoaded" ,function(){
    // ilość produktów
    const products = document.getElementById("products");
    // zamówienia
    const orders = document.getElementById("orders");
    //pakiet do wyboru
    const package = document.getElementById("package");
    // lista wyboru pakietu
    const packageList = document.querySelectorAll(".select__dropdown li");
    // input wyboru pakietu
    const chosenOne = document.querySelector(".select__input");
    // checkbox księgowość
    const account = document.getElementById("accounting");
    // checkbox terminal
    const terminal = document.getElementById("terminal");
    // wyświetlanie klikniętych rzeczy
    const productsToCalc = document.querySelector(".list__item[data-id='products']");
    const ordersToCalc = document.querySelector(".list__item[data-id='orders']");
    const packageToCalc = document.querySelector(".list__item[data-id='package']");
    const accountToCalc = document.querySelector(".list__item[data-id='accounting']");
    const terminalToCalc = document.querySelector(".list__item[data-id='terminal']");
    // suma
    const sum = document.getElementById("total-price");

    //otwieranie i zamykanie wariantów
    package.addEventListener("click", addClass);
    packageList.forEach(function(el){
        el.addEventListener("click", selectPackage)
    })
    
    function addClass(event){
        event.target.parentElement.classList.add("open");
    }

    function selectPackage(event){
        event.target.parentElement.parentElement.classList.remove("open");
        packageToCalc.classList.add("open");
        if(event.target.dataset.value === "basic"){
            chosenOne.innerText = "Basic";
            packageToCalc.querySelector("span:nth-of-type(2)").innerText = "Basic";
            packageToCalc.querySelector("span:nth-of-type(3)").innerText = "0$";
        }
        if(event.target.dataset.value === "professional"){
            chosenOne.innerText = "Professional";
            packageToCalc.querySelector("span:nth-of-type(2)").innerText = "Professional";
            packageToCalc.querySelector("span:nth-of-type(3)").innerText = "25$";
        }
        if(event.target.dataset.value === "premium"){
            chosenOne.innerText = "Premium";
            packageToCalc.querySelector("span:nth-of-type(2)").innerText = "Premium";
            packageToCalc.querySelector("span:nth-of-type(3)").innerText = "60$";
        }
        
        
    }

    // accounting
    account.addEventListener("change", addAccounting)

    function addAccounting(event){
        if(event.target.checked === true){
            accountToCalc.classList.add("open");
        }
        else {
            accountToCalc.classList.remove("open");
        }
    }

    // terminal
    terminal.addEventListener("change", addTerminal)

    function addTerminal(event){
        if(event.target.checked === true){
            terminalToCalc.classList.add("open");
        }
        else {
            terminalToCalc.classList.remove("open");
        }
    }

    // products
    products.addEventListener("change", addProducts);

    function addProducts(event){
        console.log(event.target)
        if (event.target.value > 0){
        productsToCalc.classList.add("open");
        productsToCalc.querySelector("span:nth-of-type(2)").innerText = event.target.value + "*" + "$0.5";
        productsToCalc.querySelector("span:nth-of-type(3)").innerText = "$" + event.target.value * 0.5
    }
    else {
        productsToCalc.classList.remove("open");
    }
}

    // orders
    orders.addEventListener("change", addOrder);

    function addOrder(event){
        if (event.target.value > 0){
            ordersToCalc.classList.add("open");
            ordersToCalc.querySelector("span:nth-of-type(2)").innerText = event.target.value + "*" + "$0.5";
            ordersToCalc.querySelector("span:nth-of-type(3)").innerText = "$" + event.target.value * 0.5;
        }
        else {
            ordersToCalc.classList.remove("open");
        }
    }

    // summary

    console.log(products.value);
    //koniec document.
})