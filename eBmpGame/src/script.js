setup.prevRand = -1
setup.currentFidget = "switch"

setup.isMouseDown = false;
setup.light = [0, 0, 0, 0]


document.addEventListener('mousedown', () => { setup.isMouseDown = true; });
document.addEventListener('mouseup', () => { setup.isMouseDown = false; });

/*This function allows for clicking and dragging to pop bubbles */
setup.bubbleRespondDrag = function bubbleRespond(obj) {
	if (setup.isMouseDown) {
		if (obj.id == "popped") {
			return
		}
		let random = setup.prevRand
		do {
			random = Math.floor(Math.random() * 7) + 1
		} while (random == setup.prevRand)
		setup.prevRand = random
		SimpleAudio.select(`bub${random}`).play();
		obj.style.backgroundColor = "white";
		obj.id = "popped"
	}
}

setup.bubbleRespond = function bubbleRespond(obj) {
	if (obj.id == "popped") {
		return
	}
	let random = setup.prevRand
	do {
		random = Math.floor(Math.random() * 7) + 1
	} while (random == setup.prevRand)
	setup.prevRand = random
	SimpleAudio.select(`bub${random}`).play();
	obj.style.backgroundColor = "white";
	obj.id = "popped"
}

setup.switchRespond = function switchRespond(obj) {
	if (obj.id == "on") {
		obj.style.backgroundColor = "#2B2B2B";
		obj.id = "off"
		SimpleAudio.select(`off`).stop();
		SimpleAudio.select(`off`).play();
	} else {
		obj.style.backgroundColor = "#5C5C5C";
		obj.id = "on"
		SimpleAudio.select(`on`).stop();
		SimpleAudio.select(`on`).play();
	}
}

setup.swapFidget = function swapFidget(id) {
	setup.currentFidget = id
	setTimeout(function () { Engine.play("Home") }, 600);
}


setup.toggleLight = function toggleLight(light) {

	/*light is an array, that looks like:
	[obj, int1, int2] where 
	obj is the html element,
	int1 is whether its on or off,
	int2 is the current color it is*/

	/*1 means on, 0 means off */
	if (light[1] == 1) {
		light[0].style.boxShadow = `none`
		light[0].style.backgroundColor = 'transparent'
		light[1] = 0
	} else {
		light[0].style.boxShadow = setup.lightColors[light[2]][0]
		light[0].style.backgroundColor = setup.lightColors[light[2]][1]
		light[1] = 1
	}
}

setup.incLight = function incLight(light) {
	if (light[2] == 8) {
		light[2] = 1
	} else {
		light[2] += 1
	}

	light[0].style.boxShadow = setup.lightColors[light[2]][0]
	light[0].style.backgroundColor = setup.lightColors[light[2]][1]
}

setup.decLight = function decLight(light) {
	if (light[2] == 1) {
		light[2] = 8
	} else {
		light[2] -= 1
	}

	light[0].style.boxShadow = setup.lightColors[light[2]][0]
	light[0].style.backgroundColor = setup.lightColors[light[2]][1]
}

setup.drumPlay = function drumPlay(item) {
	let newAudio = SimpleAudio.tracks.get(item);
	newAudio.clone().play();
}

setup.populateFidget = function populateFidget() {
	let container = document.getElementById("container");
	let blankSpace = document.getElementById("blankSpace");
	let postContainer = document.getElementById("postContainer");
	let fidgetLabel = document.getElementById("currentFidget");
	container.replaceChildren();
	postContainer.replaceChildren();
	switch (setup.currentFidget) {
		case "bubbleWrap":
			blankSpace.style.height = '0'
			fidgetLabel.textContent = "Bubble Wrap"
			/*Do math here based on size of screen to know how many bubbles to make */
			for (let i = 0; i < (13 * 12); i++) {
				let newButton = document.createElement('button');
				newButton.id = "notPopped"
				newButton.addEventListener('mouseover', () => setup.bubbleRespondDrag(newButton));
				newButton.addEventListener('click', () => setup.bubbleRespond(newButton));
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
			blankSpace.style.height = '1%'
			container.style.height = '72%'
			fidgetLabel.textContent = "Light Switch"
			let newButton = document.createElement('button');
			newButton.addEventListener('click', () => setup.switchRespond(newButton));
			newButton.classList.add("switch");
			newButton.style.backgroundColor = "#5C5C5C";
			newButton.id = "on"
			container.appendChild(newButton);

			break;

		case "controlPanel":
			blankSpace.style.height = '5%'
			container.style.height = '50%'

			fidgetLabel.textContent = "Control Panel"
			let newDiv = document.createElement('div');
			newDiv.classList.add("controlPanel");


			let buttonRow = document.createElement('div');
			buttonRow.classList.add("row");

			let lightRow = document.createElement('span');
			lightRow.classList.add("row");

			let flipRow = document.createElement('div');
			flipRow.classList.add("row");

			for (let i = 0; i < 4; i++) {
				let newLight = document.createElement('div');
				newLight.classList.add("light");
				lightRow.appendChild(newLight);
				setup.light[i] = [newLight, 1, 1]

				let newButton = document.createElement('button');
				newButton.classList.add("lightButton");
				newButton.addEventListener('click', () => setup.toggleLight(setup.light[i]));
				buttonRow.appendChild(newButton);

				let flipCol = document.createElement('div');
				flipCol.classList.add("flipCol");
				for (let k = 0; k < 2; k++) {
					let newFlip = document.createElement('button');
					newFlip.id = "flip"
					newFlip.classList.add("flip");
					if (k == 0) {
						newFlip.addEventListener('click', () => setup.incLight(setup.light[i]));
					} else {
						newFlip.addEventListener('click', () => setup.decLight(setup.light[i]));
					}
					flipCol.appendChild(newFlip)
				}
				flipRow.appendChild(flipCol);
			}

			newDiv.appendChild(lightRow)
			newDiv.appendChild(flipRow)
			newDiv.appendChild(buttonRow)
			container.appendChild(newDiv);

			break;

		case "drums":
			blankSpace.style.height = '5%'
			container.style.height = '50%'
			fidgetLabel.textContent = "Drum Kit"
			console.log(setup.instruments)

			for (let drum in setup.instruments) {
				let newButton = document.createElement('button');
				newButton.classList.add(setup.instruments[drum]);
				newButton.addEventListener('click', () => setup.drumPlay(setup.instruments[drum]));
				container.appendChild(newButton);
			}
			break;

		default:
			console.log(`Something went wrong when populating fidget, given ${setup.currentFidget}`)
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
