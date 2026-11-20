setup.prevRand = -1
setup.currentFidget = "drums"

setup.isMouseDown = false;
setup.light = [0, 0, 0, 0]
setup.isPointerDown = false;


document.addEventListener('mousedown', () => { setup.isMouseDown = true; });
document.addEventListener('mouseup', () => { setup.isMouseDown = false; });

document.addEventListener('pointerup', () => {
	setup.isPointerDown = false;
});

document.addEventListener('pointercancel', () => {
	setup.isPointerDown = false;
});

setup.swapFidget = function swapFidget(id) {
	setup.currentFidget = id
	Engine.play("Home")
}


setup.bubbleRespond = function bubbleRespond(obj) {
	if (obj.id == "popped") {
		return;
	}

	let random = setup.prevRand;

	do {
		random = Math.floor(Math.random() * 7) + 1;
	} while (random == setup.prevRand);

	setup.prevRand = random;

	SimpleAudio.select(`bub${random}`).play();

	obj.style.backgroundColor = "white";
	obj.id = "popped";
}

setup.switchRespond = function switchRespond(obj, img) {
	if (obj.id == "on") {
		obj.id = "off"
		img.src = '../../img/measurement/switchOff.png'
		SimpleAudio.select(`off`).stop();
		SimpleAudio.select(`off`).play();
	} else {
		obj.id = "on"
		img.src = '../../img/measurement/switchOn.png'
		SimpleAudio.select(`on`).stop();
		SimpleAudio.select(`on`).play();
	}
}

setup.toggleLight = function toggleLight(light) {

	/*light is an array, that looks like:
	[obj, int1, int2] where 
	obj is the html element,
	int1 is whether its on or off,
	int2 is the current color it is*/

	/*1 means on, 0 means off */
	SimpleAudio.select("buttonClick").stop();
	SimpleAudio.select("buttonClick").play();
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

setup.playLight = function playLight(light) {
	if (light[1] == 0) {
		return
	}
	SimpleAudio.select(`${light[2]}`).stop();
	SimpleAudio.select(`${light[2]}`).play();
}

setup.incLight = function incLight(light) {
	light[1] = 1
	if (light[2] == 8) {
		light[2] = 1
		SimpleAudio.select("1").stop();
		SimpleAudio.select("1").play();
	} else {
		light[2] += 1
		SimpleAudio.select(`${light[2]}`).stop();
		SimpleAudio.select(`${light[2]}`).play();
	}

	light[0].style.boxShadow = setup.lightColors[light[2]][0]
	light[0].style.backgroundColor = setup.lightColors[light[2]][1]
}

setup.decLight = function decLight(light) {
	light[1] = 1
	if (light[2] == 1) {
		light[2] = 8
		SimpleAudio.select("8").stop();
		SimpleAudio.select("8").play();
	} else {
		light[2] -= 1
		SimpleAudio.select(`${light[2]}`).stop();
		SimpleAudio.select(`${light[2]}`).play();
	}

	light[0].style.boxShadow = setup.lightColors[light[2]][0]
	light[0].style.backgroundColor = setup.lightColors[light[2]][1]
}

setup.drumPlay = function drumPlay(item) {
	console.log(item)
	let newAudio = SimpleAudio.tracks.get(item);
	newAudio.clone().play();
}

setup.populateFidget = function populateFidget() {
	let container = document.getElementById("container");
	let blankSpace = document.getElementById("blankSpace");
	let postContainer = document.getElementById("postContainer");
	let fidgetLabel = document.getElementById("currentFidget");
	let desc = document.getElementById("desc");
	container.replaceChildren();
	postContainer.replaceChildren();
	container.style.backgroundColor = 'snow'
	container.style.border = '1px solid black'
	switch (setup.currentFidget) {
		case "bubbleWrap":
			blankSpace.style.height = '0px'
			fidgetLabel.textContent = "Bubble Wrap"
			desc.textContent = "Pop the bubbles"
			/*Do math here based on size of screen to know how many bubbles to make */
			for (let i = 0; i < (13 * 12); i++) {
				let newButton = document.createElement('button');
				newButton.id = "notPopped"
				newButton.classList.add("bubble");
				container.appendChild(newButton);
			}

			// Start popping bubbles when the user touches/clicks one
			container.onpointerdown = (event) => {
				let bubble = event.target.closest(".bubble");

				if (!bubble) return;

				setup.isPointerDown = true;
				setup.bubbleRespond(bubble);
			};

			// Continue popping bubbles while dragging
			container.onpointermove = (event) => {
				if (!setup.isPointerDown) return;

				let bubble = document.elementFromPoint(
					event.clientX,
					event.clientY
				);

				bubble = bubble?.closest(".bubble");

				if (bubble && container.contains(bubble)) {
					setup.bubbleRespond(bubble);
				}
			};

			let refreshButton = document.createElement('button');
			refreshButton.addEventListener('click', () => setup.populateFidget(setup.currentFidget));
			refreshButton.classList.add("fancyButton");
			refreshButton.textContent = "Refresh Bubble Wrap"
			postContainer.appendChild(refreshButton);
			break;

		case "switch":
			blankSpace.style.height = '0%'
			blankSpace.style.display = 'hidden'
			container.style.height = '65%'
			container.style.backgroundColor = "transparent"
			container.style.border = "none"
			fidgetLabel.textContent = "Light Switch"

			let newImg = document.createElement('img');
			newImg.src = "../../img/measurement/switchOn.png"
			newImg.classList.add("switchImg")

			let newButton = document.createElement('button');
			newButton.addEventListener('click', () => setup.switchRespond(newButton, newImg));
			newButton.appendChild(newImg)
			newButton.classList.add("switch");
			newButton.id = "on"


			container.appendChild(newButton);
			desc.textContent = "Flip the Switch"

			break;

		case "controlPanel":
			blankSpace.style.height = '5%'
			container.style.height = '50%'
			container.style.backgroundColor = 'gainsboro'

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
				let newLight = document.createElement('button');
				newLight.classList.add("light");
				setup.light[i] = [newLight, 1, 1]
				newLight.addEventListener('click', () => setup.playLight(setup.light[i]));
				lightRow.appendChild(newLight);

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
						let newImg = document.createElement('img');
						newImg.src = "../../img/measurement/arrow.png"
						newImg.classList.add("flipImg")
						newFlip.appendChild(newImg)
						newFlip.addEventListener('click', () => setup.incLight(setup.light[i]));
					} else {
						newFlip.addEventListener('click', () => setup.decLight(setup.light[i]));
						let newImg = document.createElement('img');
						newImg.src = "../../img/measurement/arrow.png"
						newImg.classList.add("flipped");
						newFlip.appendChild(newImg)
					}
					flipCol.appendChild(newFlip)
				}
				flipRow.appendChild(flipCol);
				desc.textContent = "Flip through the Lights"
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
			desc.textContent = "Play the drums"
			console.log(setup.instruments)

			/*For unique drum parts: bass, hihat, crash, and lowTom */
			setup.createUniqueDrums(container, "lowTom");
			setup.createUniqueDrums(container, "crash");
			setup.createUniqueDrums(container, "hihat");
			setup.createUniqueDrums(container, "bass");


			for (let drum in setup.instruments) {
				let newButton = document.createElement('button');
				newButton.classList.add(setup.instruments[drum], "drums");
				let newImg = document.createElement('img');
				newImg.src = "../../img/measurement/snareDrum.png"
				newButton.appendChild(newImg)

				newButton.addEventListener('click', () => {
					setup.drumPlay(setup.instruments[drum])
				});
				container.appendChild(newButton);
			}
			break;

		default:
			console.error(`Something went wrong when populating fidget, given ${setup.currentFidget}`)
			setup.currentFidget = "bubbleWrap"
			setup.populateFidget()
	}
}

/*For unique drum parts: bass, hihat, crash, and lowTom */
setup.createUniqueDrums = function createUniqueDrums(container, which) {
	let drum = document.createElement('button');
	drum.classList.add(which, "drums");
	let drumImg = document.createElement('img');

	switch (which) {
		case "bass":
			drumImg.src = `../../img/measurement/bassDrum2.png`
			drum.appendChild(drumImg)
			break;
		case "crash":
			drumImg.src = `../../img/measurement/brassDrum2.png`
			drum.appendChild(drumImg)
			break;
		case "hihat":
			drumImg.src = `../../img/measurement/brassDrum2.png`
			drum.appendChild(drumImg)
			break;
		case "lowTom":
			drumImg.src = `../../img/measurement/snareDrum.png`
			drum.appendChild(drumImg)
			break;

	}

	drum.addEventListener('click', () => {
		setup.drumPlay(which)
	});
	container.appendChild(drum);
}

setup.totalSeconds = 120;

setup.updateTimer = function updateTimer() {
	setup.totalSeconds--;

	const hours = Math.floor(setup.totalSeconds / 3600);
	const minutes = Math.floor((setup.totalSeconds % 3600) / 60);
	const seconds = setup.totalSeconds % 60;

	setup.formattedTime =
		String(minutes).padStart(2, '0') + ':' +
		String(seconds).padStart(2, '0');

	if (setup.totalSeconds <= 0) {
		setup.formattedTime = "00:00"
	}
	document.getElementById('timer').textContent = setup.formattedTime;

}
