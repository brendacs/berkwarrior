// to show or close inventory
inventoryBtn.onclick = function toggleInventory() {
	if (inventoryBtn.innerHTML == 'Bookbag') {
		storyText.style.display = 'none';
		invText.style.display = 'flex';
		inventoryBtn.innerHTML = 'Close';
		leftBtn.disabled = true;
		rightBtn.disabled = true;
		actionBtn.disabled = true;
	} else {
		storyText.style.display = 'flex';
		invText.style.display = 'none';
		inventoryBtn.innerHTML = 'Bookbag';
		leftBtn.disabled = false;
		rightBtn.disabled = false;
		actionBtn.disabled = false;
	}
};

// inventory array
var playerInventory = {
	// default objects
	items: [objects.calculator, objects.textbook, objects.laptop],
	treasures: [], // honestly not sure if going to use a separate array for these

	// add items
	add: function(item) {
		this.items.push(item);
	},
	// remove items
	remove: function(index) {
		this.items.splice(index, 1);
	}
};

var displayInv = function() {
	var items = playerInventory.items;
	var treasures = playerInventory.treasures;

	// list items
	var currentItem = 0;
	while (currentItem < items.length) {
		invText.innerHTML += '<p><h2>' + items[currentItem].name + '</h2>' + items[currentItem].desc + '</p>';
		currentItem++;
	}
}

// note to self: will backtracking and advancing remove/add items?