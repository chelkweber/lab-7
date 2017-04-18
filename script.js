//list of items 
var list = [
  { 
	  name: "avacado",
	  quantity: 2,
	  price: 1.00,
  },
  { 
	  name: "limes",
	  quantity: 2,
	  price: 0.75,
  },
  { 
	  name: "lettuce",
	  quantity: 1,
	  price: 1.00,
  },
  { 
	  name: "bread",
	  quantity: 1,
	  price: 2.00,
  },
  { 
	  name: "eggs",
	  quantity: 1,
	  price: 3.49,
  },
  { 
	  name: "chips",
	  quantity: 1,
	  price: 1.59,
  },
  { 
	  name: "Almond Milk",
	  quantity: 1,
	  price: 2.99,
  },
  { 
	  name: "juice",
	  quantity: 3,
	  price: 5.00,
  },
  { 
	  name: "LaCroix",
	  quantity: 1,
	  price: 2.99,
  },
  { 
	  name: "beer",
	  quantity: 1,
	  price: 9.99,
  },
  { 
	  name: "ice cream",
	  quantity: 1,
	  price: 3.50,
  },
];

function shoppingCart() {
//Declare the initial total as 0
	var totalPreTax = 0;
//loop through each item in the list array
	list.forEach(function(item) {
//add price of item to the total
		totalPreTax += (item.quantity * item.price);
	});	
//add tax
	var total = "$" + (totalPreTax + (totalPreTax*0.6))
//output total
	console.log(total);	
}

shoppingCart();