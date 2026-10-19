SimpleAudio.tracks.add("bub1", "audio/bub1.mp3");
/*I don't like two*/SimpleAudio.tracks.add("bub2", "audio/bub2.mp3");
SimpleAudio.tracks.add("bub3", "audio/bub3.mp3");
SimpleAudio.tracks.add("bub4", "audio/bub4.mp3");
/*I can change this*/SimpleAudio.tracks.add("bub5", "audio/bub5.mp3");
SimpleAudio.tracks.add("bub6", "audio/bub6.mp3");
SimpleAudio.tracks.add("bub7", "audio/bub7.mp3");
/*Feels too long*/SimpleAudio.tracks.add("bub8", "audio/bub8.mp3");

setup.prevRand = -1

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

	}
}

setup.populateFidget = function populateFidget(name) {
	let container = document.getElementById("container");
	let postContainer = document.getElementById("postContainer");
	container.replaceChildren();
	postContainer.replaceChildren();
	switch (name) {
		case "bubbleWrap":
			/*Do math here based on size of screen to know how many bubbles to make */
			for (let i = 0; i < (13 * 12); i++) {
				let newButton = document.createElement('button');
				newButton.id = "notPopped"
				newButton.addEventListener('click', () => setup.respond(name, newButton));
				newButton.classList.add("bubble");
				container.appendChild(newButton);
			}
			let refreshButton = document.createElement('button');
			refreshButton.addEventListener('click', () => setup.populateFidget(name));
			refreshButton.classList.add("refreshButton");
			refreshButton.textContent = "Refresh Bubble Wrap"
			postContainer.appendChild(refreshButton);
			break;
		default:
			console.log("Something went wrong when populating fidget")
	}
}