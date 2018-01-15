console.log("scripts.js is loading");
//listen for the key down. when we hear the key down,
//run the function thst will give us the event

window.addEventListener("keydown", function (e) {
	//console.log("EVENT: ", e);
	console.log("EVENT: ", e.keycode);

});