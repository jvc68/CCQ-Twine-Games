SimpleAudio.tracks.add("bub1", "audio/bub1.mp3");
/*I don't like two*/SimpleAudio.tracks.add("bub2", "audio/bub2.mp3");
SimpleAudio.tracks.add("bub3", "audio/bub3.mp3");
SimpleAudio.tracks.add("bub4", "audio/bub4.mp3");
/*I can change this*/SimpleAudio.tracks.add("bub5", "audio/bub5.mp3");
SimpleAudio.tracks.add("bub6", "audio/bub6.mp3");
SimpleAudio.tracks.add("bub7", "audio/bub7.mp3");
/*Feels too long*/SimpleAudio.tracks.add("bub8", "audio/bub8.mp3");

setup.prevRand = -1
setup.currentFidget = "switch"

setup.respond = function respond(name, obj) {
	if (obj.id == "popped") {
		return
	}
	switch (name) {
		case "bubbleWrap":
			let random = setup.prevRand
			do {
				random = Math.floor(Math.random() * 7) + 1
			} while (random == setup.prevRand)
			setup.prevRand = random
			SimpleAudio.select(`bub${random}`).play();
			obj.style.backgroundColor = "white";
			obj.id = "popped"
			break;
		case "switch":
			SimpleAudio.select(`bub6`).play();

	}
}

setup.swapFidget = function swapFidget(id) {
	setup.currentFidget = id
	setTimeout(function () { Engine.play("Home") }, 600);
}

setup.populateFidget = function populateFidget() {
	let container = document.getElementById("container");
	let postContainer = document.getElementById("postContainer");
	let fidgetLabel = document.getElementById("currentFidget");
	container.replaceChildren();
	postContainer.replaceChildren();
	switch (setup.currentFidget) {
		case "bubbleWrap":
			fidgetLabel.textContent = "Bubble Wrap"
			/*Do math here based on size of screen to know how many bubbles to make */
			for (let i = 0; i < (13 * 12); i++) {
				let newButton = document.createElement('button');
				newButton.id = "notPopped"
				newButton.addEventListener('click', () => setup.respond(setup.currentFidget, newButton));
				newButton.classList.add("bubble");
				container.appendChild(newButton);
			}
			let refreshButton = document.createElement('button');
			refreshButton.addEventListener('click', () => setup.populateFidget(setup.currentFidget));
			refreshButton.classList.add("refreshButton");
			refreshButton.textContent = "Refresh Bubble Wrap"
			postContainer.appendChild(refreshButton);
			break;
		case "switch":
			fidgetLabel.textContent = "Switch"
			let newButton = document.createElement('button');
			newButton.addEventListener('click', () => setup.respond(setup.currentFidget, newButton));
			newButton.classList.add("switch");
			container.appendChild(newButton);
			break;
		default:
			console.log("Something went wrong when populating fidget")
	}
}

setup.totalSeconds = 0;

setup.updateTimer = function updateTimer() {
	setup.totalSeconds++;

	const hours = Math.floor(setup.totalSeconds / 3600);
	const minutes = Math.floor((setup.totalSeconds % 3600) / 60);
	const seconds = setup.totalSeconds % 60;

	setup.formattedTime =
		String(hours).padStart(2, '0') + ':' +
		String(minutes).padStart(2, '0') + ':' +
		String(seconds).padStart(2, '0');

	document.getElementById('timer').textContent = setup.formattedTime;
}
