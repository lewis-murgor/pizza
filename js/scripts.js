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
                                            '<label for="small pizza">Small</label><br>' +
                                            '<input type="radio" id="medium">' +
                                            '<label for="medium pizza">Medium</label><br>' +
                                            '<input type="radio" id="large">' +
                                            '<label for="large pizza">Large</label>' +
                                        '</div>' + 
                                    '</div>' +
                                    '<div class="col-md-6">' +
                                        '<div id="crust">' +
                                            '<p><strong>Choose the crust you want below:</strong></p>' +
                                            '<input type="radio" id="crispy">' +
                                            '<label for="crispy">Crispy</label><br>' +
                                            '<input type="radio" id="stuffed">' +
                                            '<label for="stuffed">Stuffed</label><br>' +
                                            '<input type="radio" id="glutenFree">' +
                                            '<label for="gluten-free">Gluten-free</label>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                                        '<div id="toppings">' +
                                            '<p><strong>Choose the topping(s) you want below:</strong></p>' +
                                            '<input type="checkbox" id="pepperoni">' +
                                            '<label for="pepperoni">Pepperoni</label><br>' +
                                            '<input type="checkbox" id="mushroom">' +
                                            '<label for="mushroom">Mushroom</label><br>' +
                                            '<input type="checkbox" id="extraCheese">' +
                                            '<label for="exra cheese">Extra cheese</label><br>' +
                                            '<input type="checkbox" id="sausage">' +
                                            '<label for="sausage">Sausage</label><br>' +
                                            '<input type="checkbox" id="onion">' +
                                            '<label for="onion">Onion</label><br>' +
                                            '<input type="checkbox" id="blackOlives">' +
                                            '<label for="black olives">Black olives</label><br>' +
                                            '<input type="checkbox" id="greenPepper">' +
                                            '<label for="green pepper">Green pepper</label><br>' +
                                            '<input type="checkbox" id="freshGarlic">' +
                                            '<label for="fresh garlic">Fresh garlic</label><br>' +
                                            '<input type="checkbox" id="tomato">' +
                                            '<label for="tomato">Tomato</label><br>' +
                                        '</div>');
    });
});