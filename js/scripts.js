//busines logic

function size(price) {
    this.small = 500;
    this.medium = 750;
    this.large = 1000;
}

function crust(price) {
    this.crispy = 1200;
    this.stuffed = 1300;
    this.glutenFree = 1500;
}

function toppings(price) {
    this.pepperoni = 350;
    this.mushroom = 400;
    this.extraCheese = 300;
    this.sausage = 250;
    this.onion = 200;
    this.blackOlives = 250;
    this.greenPepper = 250;
    this.freshGarlic = 300;
    this.tomato = 250;
}

function pizza() {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
pizza.prototype.total = function() {
    return size.price + crust.price + toppings.price;
}



//user interface logic

$(document).ready(function() {
    $("#addPizza").click(function() {
        $("#orderPizza").append('<div class="row">' +
                                    '<div class="col-md-6">' +
                                        '<div id="size">' +
                                            '<p><strong>Choose the size you want below:</strong></p>' +
                                            '<input type="radio" id="small">' +
                                            '<label for="small pizza">Small-Ksh 500</label><br>' +
                                            '<input type="radio" id="medium">' +
                                            '<label for="medium pizza">Medium-Ksh 750</label><br>' +
                                            '<input type="radio" id="large">' +
                                            '<label for="large pizza">Large-Ksh 1000</label>' +
                                        '</div>' + 
                                    '</div>' +
                                    '<div class="col-md-6">' +
                                        '<div id="crust">' +
                                            '<p><strong>Choose the crust you want below:</strong></p>' +
                                            '<input type="radio" id="crispy">' +
                                            '<label for="crispy">Crispy-Ksh 1200</label><br>' +
                                            '<input type="radio" id="stuffed">' +
                                            '<label for="stuffed">Stuffed-Ksh 1300</label><br>' +
                                            '<input type="radio" id="glutenFree">' +
                                            '<label for="gluten-free">Gluten free-Ksh 1500</label>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                                        '<div id="toppings">' +
                                            '<p><strong>Choose the topping(s) you want below:</strong></p>' +
                                            '<input type="checkbox" id="pepperoni">' +
                                            '<label for="pepperoni">Pepperoni-Ksh 350</label><br>' +
                                            '<input type="checkbox" id="mushroom">' +
                                            '<label for="mushroom">Mushroom-Ksh 400</label><br>' +
                                            '<input type="checkbox" id="extraCheese">' +
                                            '<label for="exra cheese">Extra cheese-Ksh 300</label><br>' +
                                            '<input type="checkbox" id="sausage">' +
                                            '<label for="sausage">Sausage-Ksh 250</label><br>' +
                                            '<input type="checkbox" id="onion">' +
                                            '<label for="onion">Onion-Ksh 200</label><br>' +
                                            '<input type="checkbox" id="blackOlives">' +
                                            '<label for="black olives">Black olives-Ksh 250</label><br>' +
                                            '<input type="checkbox" id="greenPepper">' +
                                            '<label for="green pepper">Green pepper-Ksh 250</label><br>' +
                                            '<input type="checkbox" id="freshGarlic">' +
                                            '<label for="fresh garlic">Fresh garlic-Ksh 300</label><br>' +
                                            '<input type="checkbox" id="tomato">' +
                                            '<label for="tomato">Tomato-Ksh 250</label><br>' +
                                        '</div>');
    });

    $("form#pizza").submit(function(event) {
        event.preventDefault();

        var inputtedSize = $("#size").val();
        var inputtedCrust = $("#crust").val();
        var inputtedToppings = $("#toppings").val();

        var newPizza = new pizza(inputtedSize, inputtedCrust, inputtedToppings);

        $("ul#pizzaPrice").append("<li><span class='price'>" + newPizza.total() + "</span></li>");
    });

    $("#deliver").click(function() {
        alert("The delivery charge will be Ksh 400 which should be paid on delivery" + ".");   
    });

    $("#total").click(function() {
        var location = prompt("Enter your location");
        alert("Your order will be delivered to " + location + ".");
        $("ul#totalPrice").append("<li><span class='price'>" + newPizza.total() + "</span></li>");
    });
});