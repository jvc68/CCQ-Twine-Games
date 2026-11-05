setup.zombieDist = 20000
setup.zombieAmount = 100
setup.multi = 100
setup.gameOver = false
setup.currentStepGoal = 10
setup.actualDistance = 0
setup.exposedExtras = []
setup.currentFinalExtra = 0
setup.mode = "easy"

// window.GameData = {
// 	// "extras": {
// 	// 	"Stretch Your Arms": { "reward": -10, "type": "killZombies" },
// 	// 	"Stretch Your Legs": { "reward": 1, "type": "multi" },
// 	// 	"Do 10 Jumping Jacks": { "reward": -100, "type": "killZombies" }
// 	// }

// }

window.GameData = {
	"extras": {
		"Walk 100 Steps": { "reward": -1, "type": "killZombies", "requiredSteps": 100, "ogRequiredSteps": 100 },
		"Walk 800 Steps": { "reward": 1, "type": "multi", "requiredSteps": 800, "ogRequiredSteps": 800 },
		"Walk 3,000 Steps": { "reward": -10, "type": "killZombies", "requiredSteps": 3000, "ogRequiredSteps": 3000 },
		"Walk 5,000 Steps": { "reward": -10, "type": "killZombies", "requiredSteps": 5000, "ogRequiredSteps": 5000 },
		"Walk 8,000 Steps": { "reward": -20, "type": "killZombies", "requiredSteps": 8000, "ogRequiredSteps": 8000 },
		"Walk 10,000 Steps": { "reward": 1, "type": "multi", "requiredSteps": 10000, "ogRequiredSteps": 10000 },
		"Walk 12,000 Steps": { "reward": -30, "type": "killZombies", "requiredSteps": 12000, "ogRequiredSteps": 12000 },
		"Walk 15,000 Steps": { "reward": -30, "type": "killZombies", "requiredSteps": 15000, "ogRequiredSteps": 15000 },
	}

}

// Sends messages from Twine to Flutter.
setup.sendFlutterMessage = function (type) {
	console.log("Twine is sending message to Flutter:", type);

	if (window.FlutterBridge &&
		typeof window.FlutterBridge.postMessage === "function") {

		window.FlutterBridge.postMessage(JSON.stringify({
			type: type
		}));

		console.log("FlutterBridge message sent successfully.");

	} else {
		console.error("FlutterBridge is NOT available!");
	}
}

setup.setMode = function setMode(mode) {
	setup.mode = mode
	setup.multi = 100
	setup.currentFinalExtra = 0;
	setup.exposedExtras = []
	setup.actualDistance = 0
	for (let [key, value] of Object.entries(window.GameData.extras)) {
		value.requiredSteps = value.ogRequiredSteps
	}
}

setup.reset = function reset() {

	setup.stopChase();

	setup.zombieAmount = 100;
	setup.zombieDist = 20000;
	setup.gameOver = false;
	setup.actualDistance = 0

	setup.multi = 1;
	setup.currentFinalExtra = 0;
	setup.exposedExtras = []

	for (let [key, value] of Object.entries(window.GameData.extras)) {
		value.requiredSteps = value.ogRequiredSteps
	}
}

setup.decZombieDist = function decZombieDist(amount) {
	setup.zombieDist += amount
	if (setup.zombieAmount > 0 && setup.zombieDist > 0) {
		setup.zombieDistText.textContent = `The zombies are ${Math.trunc(setup.zombieDist)} steps away!`
	} else {
		setup.stopChase()
	}
	setup.checkWinLoss()
	setup.updateTotalDistance()

}

setup.incZombieDist = function incZombieDist(amount) {
	setup.actualDistance += amount
	setup.zombieDist += amount * setup.multi;
	if (setup.zombieAmount > 0 && setup.zombieDist > 0) {
		setup.zombieDistText.textContent = `The zombies are ${Math.trunc(setup.zombieDist)} steps away!`
	} else {
		setup.stopChase()
	}
	setup.redeem(amount * setup.multi)
	setup.checkWinLoss()
	setup.updateTotalDistance()
}

// Stops the zombie timer and Flutter step tracking.
setup.stopChase = function stopChase() {
	clearInterval(setup.intervalId);

	setup.sendFlutterMessage("STOP_STEP_TRACKING");
}


setup.checkWinLoss = function checkWinLoss() {

	if (setup.gameOver == true) {
		return;
	}

	// Player wins when all zombies are eliminated.
	if (setup.zombieAmount <= 0) {

		setup.zombieDistText.textContent = "All the zombies are Gone!";
		setup.zombieCntText.textContent = "There are 0 left...";

		setup.stopChase();

		setup.gameOver = true;

		setTimeout(function () {
			Engine.play("You Win");
		}, 3000);

	}

	// Player loses when the zombies catch them.
	else if (setup.zombieDist <= 0) {

		setup.zombieDistText.textContent = "The zombies caught you...";
		setup.zombieCntText.textContent = "";

		setup.stopChase();

		setup.gameOver = true;

		setTimeout(function () {
			Engine.play("You Lose");
		}, 3000);

	}
}

setup.startChase = function startChase() {
	setup.zombieDistText = document.getElementById("zombieDist")
	setup.zombieCntText = document.getElementById("zombieCnt")
	setup.multiText = document.getElementById("multi")

	setup.decZombieDist(0)


	setup.zombieCntText.textContent = `There are ${setup.zombieAmount} left...`
	setup.multiText.textContent = setup.multi

	// Tell Flutter that the chase has started.
	setup.sendFlutterMessage("START_STEP_TRACKING");

	/*
	This sets the zombies speed to just above the average walking, jogging, and running pace
	These were set above the average as the game gives double steps per step after walking 800 steps, which 
	so to outpace the zombies you only need to be going half their speed after roughly 8 minutes of walking.
	*/
	switch (setup.mode) {
		case "easy":
			/*This sets zombie speed to 102 steps per minute */
			setup.intervalId = setInterval(setup.decZombieDist, 1000, -1.7);
			break;
		case "med":
			/*This sets zombie speed to 150 steps per minute */
			setup.intervalId = setInterval(setup.decZombieDist, 1000, -2.5);
			break;
		case "hard":
			/*This sets zombie speed to 192 steps per minute */
			setup.intervalId = setInterval(setup.decZombieDist, 1000, -3.2);
			break;
		case "impossible":
			setup.intervalId = setInterval(setup.decZombieDist, 1000, -1000);
			break;
		default:
			console.error(`${setup.mode} is not a mode`)
	}

	let container = document.getElementById("extras");
	container.replaceChildren();

	for (let i = 0; i < 3; i++) {
		setup.createExtra(container)
	}

}

setup.createExtra = function createExtra(container) {
	if (setup.currentFinalExtra >= Object.keys(window.GameData.extras).length) {
		let newDiv = document.createElement('div');
		newDiv.classList.add("extra");

		let newTask = document.createElement('span')
		newTask.textContent = `No New Extras!`;

		newDiv.appendChild(newTask);
		container.appendChild(newDiv);
		return
	}
	let i = setup.currentFinalExtra
	let allKeys = Object.keys(window.GameData.extras)
	let currentExtra = window.GameData.extras[allKeys[i]]
	setup.exposedExtras.push([allKeys[i], currentExtra])

	let newDiv = document.createElement('div');
	newDiv.classList.add("extra");
	newDiv.id = allKeys[setup.currentFinalExtra]

	let newTask = document.createElement('span')
	newTask.textContent = `${allKeys[i]}`;

	newDiv.appendChild(newTask);

	let newButton = document.createElement('div');
	newButton.classList.add("progress-container");
	newButton.id = "notRedeemed";

	let fillElement = document.createElement('div');
	fillElement.classList.add("progress-fill");
	fillElement.style.width = "0%";

	let labelText = '';
	switch (currentExtra.type) {
		case "killZombies":
			labelText = `${currentExtra.reward} Zombies`;
			break;
		case "multi":
			labelText = `+${currentExtra.reward} Step Power`;
			break;
	}

	let textElement = document.createElement('span');
	textElement.classList.add("progress-text");
	textElement.textContent = labelText;

	// Assemble progress bar structure
	newButton.appendChild(fillElement);
	newButton.appendChild(textElement);

	setup.currentFinalExtra += 1;
	newDiv.appendChild(newButton);
	container.appendChild(newDiv);
	setup.updateExtraProgress();
};


setup.updateExtraProgress = function updateExtraProgress() {

	if (setup.gameOver) {
		return;
	}

	for (let item of setup.exposedExtras) {
		let extraElement = document.getElementById(item[0])
		let fill = extraElement.querySelector('.progress-fill');
		if (!fill) return;
		let stepsCompleted = item[1].ogRequiredSteps - item[1].requiredSteps;
		let percent = Math.min(Math.max((stepsCompleted / item[1].ogRequiredSteps) * 100, 0));
		fill.style.width = percent + '%';
	}

};

setup.updateTotalDistance = function updateTotalDistance() {
	let bar = document.getElementById("bar")
	let fill = bar.querySelector('.progress-fill');
	if (!fill) return;
	let stepsCompleted = 20000 - setup.zombieDist;
	let percent = Math.min(Math.max((stepsCompleted / 20000) * 100, 0));
	fill.style.width = percent + '%';

}

setup.redeem = function redeem(stepsWalked) {

	if (setup.gameOver) {
		return;
	}

	let spotsToDelete = []

	for (let [key, value] of Object.entries(window.GameData.extras)) {
		if (value.requiredSteps >= 0) {
			value.requiredSteps -= stepsWalked
		}
	}

	for (let item of setup.exposedExtras) {
		if (item[1].requiredSteps <= 0) {
			let container = document.getElementById("extras");

			switch (item[1].type) {
				case "killZombies":
					setup.zombieAmount += item[1].reward
					if (setup.zombieAmount > 0) {
						setup.zombieCntText.textContent = `There are ${setup.zombieAmount} left...`
					}
					break;
				case "multi":
					setup.multi += item[1].reward
					setup.multiText.textContent = setup.multi
					break;
			}

			let theExtra = document.getElementById(item[0])
			theExtra.classList.add('fade-out');

			setTimeout(() => {
				theExtra.remove()
				setup.createExtra(container)
			}, 1200);

			let index = setup.exposedExtras.indexOf(item)
			spotsToDelete.push(index)
		}
	}

	for (let spot in spotsToDelete) {
		console.log(spot)
		setup.exposedExtras.splice(spot, 1)
	}

	setup.checkWinLoss()
	setup.updateExtraProgress();
}

/*
Useful later:
	newButton.addEventListener('click', () => setup.respond(name, newButton));
*/