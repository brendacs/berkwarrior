// button active state for mobile
document.addEventListener("touchstart", function(){}, true)

// variables
var textDiv = document.getElementById('text');
var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');
var actionBtn = document.getElementById('action');
var inventoryBtn = document.getElementById('inventory');

// change text
var changeText = function(text) {
	textDiv.innerHTML = text;
};

// disable some buttons during certain scenes
// change actionBtn text and action
var changeActionBtn = function(btnText, action) {

	if (btnText == "Pick up" || btnText == "Shrug" || btnText == "Listen" || btnText == "Nod" || btnText == "Go forth") {
		leftBtn.disabled = true;
		rightBtn.disabled = true;
		inventoryBtn.disabled = true;
	} else {
		leftBtn.disabled = false;
		rightBtn.disabled = false;
		inventoryBtn.disabled = false;
	}

	actionBtn.innerHTML = btnText;
	actionBtn.onclick = action;
};

// advance scenes from scenarios
var advanceTo = function(scene) {
	changeText(scene.text);
	changeActionBtn(scene.button, scene.actionScene);
};


// the many different game scenarios
scenario = {}

var scenario = {

	note: {
		text: "<p>Standing on Telegraph Avenue, you see an important-looking note on the ground.</p>",
		button: "Pick up",
		actionScene: function changeAction() {
			return advanceTo(scenario.scroll);
		}
	},

	scroll: {
		text: "<p>The text on the note is written in pencil. It is faded, hard to read. You try anyway.</p> <br/> \
		<p>\"Hello there, adventurer. Sometimes, you will have to scroll to read all the text.\"</p> <br/> \
		<p>You wonder what that means.</p>",
		button: "Shrug",
		actionScene: function changeAction() {
			return advanceTo(scenario.intro);
		}
	},

	intro: {
		text: "<p>A strange man with feathery hair approaches you.</p> <br/> \
		<p>\"Hey! You there! Yes you, Berkelian! Would you like to know a secret?\" \
		His rags flop around in the wind as he waits for your answer.</p>",
		button: "Listen",
		actionScene: function changeAction() {
			return advanceTo(scenario.secret);
		}
	},

	secret: {
		text: "<p>His eyes appear to sparkle. He continues.</p> <br/> \
		\"Hidden within the walls of UC Berkeley, there are many treasures.\"</p> <br/> \
		<p>\"If you collect them all, you will gain access to unimaginable power... \
		but should you fail, you will be sent into a despair far worse than you've ever known.\"</p>",
		button: "Nod",
		actionScene: function changeAction() {
			return advanceTo(scenario.berktime);
		}
	},

	berktime: {
		text: "<p>\"To help you in your journey, I will bestow upon you the magnificent power of Berkeley Time.\"</p> <br/> \
		<p>\"You will be able to backtrack to go to the past and change your whole situation or advance to the future to skip events.\"</p> <br/> \
		\"However, acting at the right times will bring great rewards. Go forth and decide your future. Berkeley awaits.\"",
		button: "Go forth",
		actionScene: function changeAction() {
			return advanceTo(scenario.disappear);
		}
	},

	disappear: {
		text: "<p>The man disappears around the corner, laughing hysterically.</p> <br/> \
		<p>You wonder if what he says is true... Maybe it's time to head back to UC Berkeley.</p>",
		button: "Walk",
		actionScene: "None yet"
	}

};

// start -- will change when localStorage is implemented
advanceTo(scenario.note);

// store game -- completely incomplete
// if (!localStorage.getItem('textDiv')) {
// 	populateStorage();
// } else {
// 	setScene();
// }

// function populateStorage() {
// 	localStorage.setItem('textDiv', textDiv.innerHTML);
// 	localStorage.setItem('leftBtnDo', leftBtn.onclick);
// 	localStorage.setItem('rightBtnDo', rightBtn.onclick);
// 	localStorage.setItem('actionBtnText', actionBtn.innerHTML);
// 	localStorage.setItem('actionBtnDo', actionBtn.onclick);

// 	setScene();
// }

// function setScene() {
// 	var currentText = localStorage.getItem('textDiv');
// 	var currentLeftBtnDo = localStorage.getItem('leftBtnDo');
// 	var currentRightBtnDo = localStorage.getItem('rightBtnDo');
// 	var currentActionText = localStorage.getItem('actionBtnText');
// 	var currentActionDo = localStorage.getItem('actionBtnDo');

// 	textDiv.innerHTML = currentText;
// 	leftBtn.onclick = currentLeftBtnDo;
// 	rightBtn.onclick = currentRightBtnDo;
// 	actionBtn.innerHTML = currentActionText;
// 	actionBtn.onclick = currentActionDo;
// }

// textDiv.onchange = populateStorage;
// leftBtn.onchange = populateStorage;
// rightBtn.onchange = populateStorage;
// actionBtn.onchange = populateStorage;
// actionBtn.onchange = populateStorage;