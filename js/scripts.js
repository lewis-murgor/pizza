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