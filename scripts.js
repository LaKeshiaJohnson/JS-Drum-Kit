console.log("scripts.js is loading");

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  function playSound(e) {
  	//console.log("EVENT: ", e);
	//console.log("EVENT: ", e.keycode);
	//select audo file with data key that matches the pressed key code
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stops the function from running all together

    key.classList.add('playing'); //adding css to animate keys
    audio.currentTime = 0; //rewinds sound to the beginning
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
//listen for the key down. when we hear the key down
//run the function playSound
  window.addEventListener('keydown', playSound);