// change text
var changeText = function(text) {
	storyText.innerHTML = text;
};

var changeBtns = function(chapter, btnText, backtrack, advance, action) {

	// disable most buttons during intro scenes
	if (chapter == 'Intro' || chapter == 'Nope') {
		leftBtn.disabled = true;
		rightBtn.disabled = true;
		inventoryBtn.disabled = true;
	} else {
		leftBtn.disabled = false;
		rightBtn.disabled = false;
		inventoryBtn.disabled = false;
	}

	// change actionBtn text and action
	actionBtn.innerHTML = btnText;

	// change which scenes buttons lead to
	leftBtn.onclick = backtrack;
	rightBtn.onclick = advance;
	actionBtn.onclick = action;
};

// advance scenes from scenarios
var advanceTo = function(scene) {
	changeText(scene.text);
	changeBtns(scene.chapter, scene.btnText, scene.back, scene.adv, scene.action);
};


// the many different game scenarios
var intro = {

	note: {
		chapter: 'Intro',
		text: '<p>Standing on Telegraph Avenue, you see an important-looking note on the ground.</p>',
		btnText: 'Pick up',
		action: function() {
			playerInventory.add(objects.note);
			displayInv(); // to update display in inventory, but not a very DRY technique?
			return advanceTo(intro.scroll);
		}
	},

	scroll: {
		chapter: 'Intro',
		text: '<p>The text on the note is written in pencil. It is faded, hard to read. You try anyway.</p> \
		<p>\"Hello there, adventurer. Sometimes, you will have to scroll to read all the text.\"</p> \
		<p>You wonder what that means.</p>',
		btnText: 'Shrug',
		action: function() {
			return advanceTo(intro.stranger);
		}
	},

	stranger: {
		chapter: 'Intro',
		text: '<p>A strange man with feathery hair approaches you.</p> \
		<p>\"Hey! You there! Yes you, Berkelian! Would you like to know a secret?\" \
		His rags flop around in the wind as he waits for your answer.</p>',
		btnText: 'Listen',
		action: function() {
			return advanceTo(intro.secret);
		}
	},

	secret: {
		chapter: "Intro",
		text: '<p>His eyes appear to sparkle. He continues.</p> \
		\"Hidden within the walls of UC Berkeley, there are many treasures.\"</p> \
		<p>\"If you collect them all, you will gain access to unimaginable power... \
		but should you fail, you will be sent into a despair far worse than you\'ve ever known.\"</p>',
		btnText: 'Nod',
		action: function() {
			return advanceTo(intro.berktime);
		}
	},

	berktime: {
		chapter: 'Intro',
		text: '<p>\"To help you in your journey, I will bestow upon you the magnificent power of Berkeley Time.\"</p> \
		<p>\"You will be able to backtrack to go to a DIFFERENT past and change your whole situation or advance to the future to SKIP events.\"</p> \
		\"However, acting at the right times will bring great rewards. Go forth and decide your future. Berkeley awaits.\"',
		btnText: 'Go forth',
		action: function() {
			return advanceTo(chapterOne.disappear);
		}
	}

};

var chapterOne = {

	nobacksies: {
		chapter: 'Nope',
		text: '<p>Nothing to backtrack to yet. Already abusing your power?</p>',
		btnText: 'Continue',
		action: function() {
			return advanceTo(chapterOne.disappear);
		}
	},

	noadvancement: {
		chapter: 'Nope',
		text: '<p>Nothing to advance to yet. Already abusing your power?</p>',
		btnText: 'Continue',
		action: function() {
			return advanceTo(chapterOne.disappear);
		}
	},

	disappear: {
		chapter: 'One',
		text: '<p>The man disappears around the corner, laughing hysterically.</p> \
		<p>You wonder if what he says is true... Maybe it\'s time to head back to UC Berkeley.</p>',
		btnText: 'Walk',
		back: function() {
			return advanceTo(chapterOne.nobacksies);
		},
		adv: function() {
			return advanceTo(chapterOne.noadvancement);
		},
		action: function() {
			return advanceTo(chapterOne.toberk);
		}
	},

	toberk: {
		chapter: 'One',
		text: '<p>You are walking towards UC Berkeley.</p> \
		<p>Sather Gate is in view. The sight gives you mixed feelings.</p>',
		btnText: 'Walk',
		back: function() {
			return advanceTo(chapterOne.NOTIMPLEMENTED);
		},
		adv: function() {
			return advanceTo(chapterOne.NOTIMPLEMENTED);
		},
		action: function() {
			return advanceTo(chapterOne.NOTIMPLEMENTED);
		},
	}

};

// start -- will change when localStorage is implemented
advanceTo(intro.note);