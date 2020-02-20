// Back End
function PizzaOrder(toppingSelection, cheeseSelection, sizeSelection) {
  this.toppingSelection = toppingSelection;
  this.cheeseSelection = cheeseSelection;
  this.sizeSelection = sizeSelection;
}

PizzaOrder.prototype.addPrice = function() {
  price = 0;
  if (this.toppingSelection === "spendy") {
    price += 9;
  } else if (this.toppingSelection === "mix") {
    price += 7;
  } else {
    price += 5;
  }
  if (this.cheeseSelection === "spendy") {
    price += 7;
  } else if (this.cheeseSelection === "mix") {
    price += 5;
  } else {
    price += 3;
  }
  if (this.sizeSelection === "spendy") {
    price += 12;
  } else if (this.sizeSelection === "mix") {
    price += 10;
  } else {
    price += 9;
  }
  return price;
}

// Front End
$(document).ready(function() {
  $("form#topping-selection").submit(function(e) {
    e.preventDefault();
    var toppingSelect = $("select#toppings").val();
    var cheeseSelect = $("select#cheese").val();
    var sizeSelect = $("select#size").val();

    var userPizza = new PizzaOrder(toppingSelect, cheeseSelect, sizeSelect);
    $("#display-price").empty().prepend("$" + userPizza.addPrice() + " is your total price!");
    $(".full-price").show();
  })
})
