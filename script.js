var products = [];
var cart = [];
var isAdded = false;
function selection() {
    var inp1 = document.getElementById("inp1").value;
    if (inp1.trim() == "") {
        alert("Enter valid Input");
        return;
    }
    var select = document.getElementById("options");
    var newOption = document.createElement("option");
    newOption.text = inp1;
    newOption.value = inp1;
    select.add(newOption);
    select.value = inp1;
}
function add() {
    if(products.includes(products)){
alert("Don't Repeat")
    }
    var product = document.getElementById("options").value;
    var price = document.getElementById("price").value;
    if (product.trim() == "" || price.trim() == "") {
        alert("Select product and enter price");
        return;
    }
    products.push({
        name: product,
        price: parseFloat(price)
    });
    isAdded = true;
    document.getElementById("alert").innerHTML =
        "Successfully Set " + product + " Price to ₹ " + price;
}
function transaction() {
    if (!isAdded) {
        alert("Please set the product and its Price Properly !");
        return;
    }
    var select2 = document.getElementById("checkoutSelect");
    select2.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        var newOption = document.createElement("option");
        newOption.text = products[i].name + " : ₹ " + products[i].price;
        newOption.value = products[i].price;
        select2.add(newOption);
    }
}
function addtocart() {
    var select = document.getElementById("checkoutSelect");
    var productText = select.options[select.selectedIndex].text;
    var price = parseFloat(select.value);
    var qty = parseInt(document.getElementById("unit").value);
    if (qty ===""|| qty <= 0) {
        alert("Enter valid quantity");
        return;
    }
    cart.push({
        name: productText.split(" : ")[0],
        price: price,
        qty: qty
    });
    document.getElementById("unit").value = "0";
}
function press(num) {
    let input = document.getElementById("unit");
    if (input.value === "" || input.value === "0") {
        input.value = num;
    } else {
        input.value += num;
    }
}
function receipt() {
    var output = document.getElementById("output");
    output.innerHTML = "";
    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }
    var table = document.createElement("table");
    table.style.border = "2px solid black";
    table.style.borderCollapse = "collapse";
    table.style.width = "500px";
    table.style.backgroundColor = "white"
    var headerRow = document.createElement("tr");
    var headers = ["Product", "₹/unit", "Unit(s)", "Price"];
    headers.forEach(text => {
        var th = document.createElement("th");
        th.innerText = text;
        th.style.border = "2px solid black";
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    var total = 0;
    cart.forEach(item => {
        var row = document.createElement("tr");
        var itemTotal = item.price * item.qty;
        total += itemTotal;
        var data = [
            item.name,
            item.price.toFixed(2),
            item.qty,
            itemTotal.toFixed(2)
        ];
        data.forEach(text => {
            var td = document.createElement("td");
            td.innerText = text;
            td.style.border = "2px solid black";
            row.appendChild(td);
        });
        table.appendChild(row);
    });
    output.appendChild(table);
    var tax = total * 0.05;
    var amount = total + tax;
    var summary = document.createElement("div");
    summary.innerHTML = `<br>
        <p><b>Total Price :</b> ${total.toFixed(2)}</p><br>
        <p><b>Taxes :</b> ${tax.toFixed(2)}</p><br>
        <p><b>Amount Due :</b> ${amount.toFixed(2)}</p>
    `;
summary.style.backgroundColor = "white"
summary.style.border = "2px solid black"
    output.appendChild(summary);
        var container = document.getElementById("table");
        var now = new Date();
        var date = now.toLocaleDateString();
        var time = now.toLocaleTimeString();
        container.innerHTML = `
            <h2>Date : ${date}</h2>
            <h2>Time : ${time}</h2>
        `
    }