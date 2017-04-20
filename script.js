//list of items 
var list = [
  { 
	  name: "avacado",
	  price: 3.25,
  },
  { 
	  name: "limes",
	  price: 1.75,
  },
  { 
	  name: "lettuce",
	  price: 1.55,
  },
  { 
	  name: "bread",
	  price: 2.25,
  },
  { 
	  name: "eggs",
	  price: 3.49,
  },
  { 
	  name: "chips",
	  price: 1.59,
  },
  { 
	  name: "Almond Milk",
	  price: 2.99,
  },
  { 
	  name: "juice",
	  price: 2.99,
  },
  { 
	  name: "LaCroix",
	  price: 2.99,
  },
  { 
	  name: "beer",
	  price: 9.99,
  },
  { 
	  name: "ice cream",
	  price: 3.50,
  },
];


function displayList(list) {
	var shoppingList = document.getElementById('shopping-list')
	//declare var for item name
	var itemName = '';
	//declare var for item price
	var itemPrice = '';
	//forEach loop through the array
	list.forEach(function(item){
		//create element for name of each item
		itemName = document.createElement('li');
		itemName.innerText = item.name;
		shoppingList.appendChild(itemName);
		//create element for price of each item
		itemPrice = document.createElement('span');
		itemPrice.innerText = " $" +item.price;
		itemName.appendChild(itemPrice);
	});
}

displayList(list);

function shoppingCart() {
	//Declare the initial total as 0
	var totalPreTax = 0;
	//loop through each item in the list array
	list.forEach(function(item) {
		//add price of item to the total
		totalPreTax += item.price;
	});	
	//add tax
	var total = "$" + (totalPreTax + (totalPreTax*0.06))
	//display subtotal in document
	subtotal = document.createElement('p');
	subtotal.innerText = totalPreTax;
	document.body.appendChild(subtotal);
	//display total in document
	displayTotal = document.createElement('p');
	displayTotal.innerText = total;
	document.body.appendChild(displayTotal);
}

shoppingCart(list);
