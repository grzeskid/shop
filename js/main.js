document.addEventListener("DOMContentLoaded", function () {
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
    // do sumowania
    const price = document.querySelectorAll(".item__price");

    // // buttony z sekcji prices
    const btnBasic = document.querySelector(".prices-btn-1");
    const btnProfessional = document.querySelector(".prices-btn-2");
    const btnPremium = document.querySelector(".prices-btn-3");

    //cały kalkulator
    const calc = document.querySelector(".calc");

    btnBasic.addEventListener("click", openCalc);
    btnProfessional.addEventListener("click", openCalc);
    btnPremium.addEventListener("click", openCalc);

    function openCalc(event) {
        event.preventDefault();
        calc.style.display = "block";
        calc.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    //otwieranie i zamykanie wariantów
    package.addEventListener("click", addClass);
    packageList.forEach(function (el) {
        el.addEventListener("click", selectPackage)
    })

    function addClass(event) {
        event.target.parentElement.classList.add("open");
    }

    function selectPackage(event) {
        event.target.parentElement.parentElement.classList.remove("open");
        packageToCalc.classList.add("open");
        if (event.target.dataset.value === "basic") {
            chosenOne.innerText = "Basic";
            packageToCalc.querySelector("span:nth-of-type(2)").innerText = "Basic";
            packageToCalc.querySelector("span:nth-of-type(3)").innerText = "0$";
            summary();
        }
        if (event.target.dataset.value === "professional") {
            chosenOne.innerText = "Professional";
            packageToCalc.querySelector("span:nth-of-type(2)").innerText = "Professional";
            packageToCalc.querySelector("span:nth-of-type(3)").innerText = "25$";
            summary();
        }
        if (event.target.dataset.value === "premium") {
            chosenOne.innerText = "Premium";
            packageToCalc.querySelector("span:nth-of-type(2)").innerText = "Premium";
            packageToCalc.querySelector("span:nth-of-type(3)").innerText = "60$";
            summary();
        }


    }

    // accounting
    account.addEventListener("change", addAccounting)

    function addAccounting(event) {
        if (event.target.checked === true) {
            accountToCalc.classList.add("open");
            accountToCalc.querySelector("span:nth-of-type(2)").innerText = 10 + "$";
            summary();
        } else {
            accountToCalc.classList.remove("open");
            sum.lastElementChild.innerText = parseFloat(price[0].innerText) + parseFloat(price[1].innerText) + parseFloat(price[2].innerText) + parseFloat(price[4].innerText) + "$";
            accountToCalc.querySelector("span:nth-of-type(2)").innerText = 0;
            summaryEnd();
        }
    }

    // terminal
    terminal.addEventListener("change", addTerminal)

    function addTerminal(event) {
        if (event.target.checked === true) {
            terminalToCalc.classList.add("open");
            terminalToCalc.querySelector("span:nth-of-type(2)").innerText = 10 + "$";
            summary();
        } else {
            terminalToCalc.classList.remove("open");
            sum.lastElementChild.innerText = parseFloat(price[0].innerText) + parseFloat(price[1].innerText) + parseFloat(price[2].innerText) + parseFloat(price[3].innerText) + "$";
            terminalToCalc.querySelector("span:nth-of-type(2)").innerText = 0;
            summaryEnd();
        }
    }

    // products
    products.addEventListener("change", addProducts);

    function addProducts(event) {
        if (event.target.value < 0) {
            alert("tylko dodatnie wartości");
        }
        if (event.target.value > 0) {
            productsToCalc.classList.add("open");
            productsToCalc.querySelector("span:nth-of-type(2)").innerText = event.target.value + "*" + "$0.5";
            productsToCalc.querySelector("span:nth-of-type(3)").innerText = event.target.value * 0.5 + "$";
            summary();
        } else {
            productsToCalc.classList.remove("open");
            sum.lastElementChild.innerText = parseFloat(price[1].innerText) + parseFloat(price[2].innerText) + parseFloat(price[3].innerText) + parseFloat(price[4].innerText) + "$";
            productsToCalc.querySelector("span:nth-of-type(3)").innerText = 0;
            summaryEnd();

        }
    }

    // orders
    orders.addEventListener("change", addOrder);

    function addOrder(event) {
        if (event.target.value < 0) {
            alert("tylko dodatnie wartości");
        }
        if (event.target.value > 0) {
            ordersToCalc.classList.add("open");
            ordersToCalc.querySelector("span:nth-of-type(2)").innerText = event.target.value + "*" + "$0.5";
            ordersToCalc.querySelector("span:nth-of-type(3)").innerText = event.target.value * 0.5 + "$";
            summary();
        } else {
            ordersToCalc.classList.remove("open");
            sum.lastElementChild.innerText = parseFloat(price[0].innerText) + parseFloat(price[2].innerText) + parseFloat(price[3].innerText) + parseFloat(price[4].innerText) + "$";
            ordersToCalc.querySelector("span:nth-of-type(3)").innerText = 0;
            summaryEnd();
        }
    }




    // summary

    function summary() {
        sum.classList.add("open");
        sum.lastElementChild.innerText = parseFloat(price[0].innerText) + parseFloat(price[1].innerText) + parseFloat(price[2].innerText) + parseFloat(price[3].innerText) + parseFloat(price[4].innerText) + "$";
    }

    function summaryEnd() {
        if (!productsToCalc.classList.contains("open") && !ordersToCalc.classList.contains("open") && !packageToCalc.classList.contains("open") && !accountToCalc.classList.contains("open") && !terminalToCalc.classList.contains("open")) {
            sum.classList.remove("open");
        }
    }

    document.addEventListener("click", dropdownClose);

    function dropdownClose(event) {
        if (event.target === chosenOne) {
            return
        }
        if (package.classList.contains("open") && event.target !== packageList) {
            package.classList.remove("open");
        }

    }
    console.log(package)
    //koniec document.
})