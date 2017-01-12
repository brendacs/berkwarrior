// store game -- completely incomplete and probably very wrong

// if (!localStorage.getItem('storyText')) {
// 	populateStorage();
// } else {
// 	setScene();
// }

// function populateStorage() {
// 	localStorage.setItem('storyText', storyText.innerHTML);
// 	localStorage.setItem('leftBtnDo', leftBtn.onclick);
// 	localStorage.setItem('rightBtnDo', rightBtn.onclick);
// 	localStorage.setItem('actionBtnText', actionBtn.innerHTML);
// 	localStorage.setItem('actionBtnDo', actionBtn.onclick);

// 	setScene();
// }

// function setScene() {
// 	var currentText = localStorage.getItem('storyText');
// 	var currentLeftBtnDo = localStorage.getItem('leftBtnDo');
// 	var currentRightBtnDo = localStorage.getItem('rightBtnDo');
// 	var currentActionText = localStorage.getItem('actionBtnText');
// 	var currentActionDo = localStorage.getItem('actionBtnDo');

// 	storyText.innerHTML = currentText;
// 	leftBtn.onclick = currentLeftBtnDo;
// 	rightBtn.onclick = currentRightBtnDo;
// 	actionBtn.innerHTML = currentActionText;
// 	actionBtn.onclick = currentActionDo;
// }

// storyText.onchange = populateStorage;
// leftBtn.onchange = populateStorage;
// rightBtn.onchange = populateStorage;
// actionBtn.onchange = populateStorage;
// actionBtn.onchange = populateStorage;