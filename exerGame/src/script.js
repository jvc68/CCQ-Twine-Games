setup.zombieDist = 20000
setup.zombieAmount = 100
setup.multi = 100
setup.gameOver = false
setup.currentStepGoal = 10
setup.actualDistance = 0
setup.exposedExtras = []
setup.currentFinalExtra = 0

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
		"Walk 1,000 Steps": { "reward": 1, "type": "multi", "requiredSteps": 1000, "ogRequiredSteps": 1000 },
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
	setup.multi = 1
}
setup.decZombieDist = function decZombieDist(amount) {
	setup.zombieDist += amount
	if (setup.zombieAmount > 0 && setup.zombieDist > 0) {
		setup.zombieDistText.textContent = `The zombies are ${setup.zombieDist} steps away!`
	} else {
		setup.stopChase()
	}
	setup.checkWinLoss()

}

setup.incZombieDist = function incZombieDist(amount) {
	setup.zombieDist += amount * setup.multi;

	if (setup.zombieAmount > 0 && setup.zombieDist > 0) {
		setup.zombieDistText.textContent = `The zombies are ${setup.zombieDist} steps away!`
	} else {
		setup.stopChase()
	}
	setup.redeem(amount * setup.multi)
	setup.checkWinLoss()
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

	switch (setup.mode) {
		case "easy":
			setup.intervalId = setInterval(setup.decZombieDist, 9000000, -1);
			break;
		case "med":
			setup.intervalId = setInterval(setup.decZombieDist, 1000, -10);
			break;
		case "hard":
			setup.intervalId = setInterval(setup.decZombieDist, 1000, -50);
			break;
		case "impossible":
			setup.intervalId = setInterval(setup.decZombieDist, 100, -1000);
			break;
	}

	let container = document.getElementById("extras");

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

	let newButton = document.createElement('span');
	newButton.classList.add("extraButton");
	newButton.id = "notRedeemed"

	switch (currentExtra.type) {
		case "killZombies":
			newButton.textContent = `Kill ${currentExtra.reward} zombies`
			break;
		case "multi":
			newButton.textContent = `Increase Step Power by ${currentExtra.reward}`
			break;
	}

	setup.currentFinalExtra += 1


	newDiv.appendChild(newButton);

	container.appendChild(newDiv);
}

setup.redeem = function redeem(stepsWalked) {
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
}

setup.reset = function reset() {

	setup.stopChase();

	setup.zombieAmount = 100;
	setup.zombieDist = 20000;
	setup.gameOver = false;

	setup.multi = 1;
	setup.currentFinalExtra = 0;

	for (let [key, value] of Object.entries(window.GameData.extras)) {
		value.requiredSteps = value.ogRequiredSteps
	}
}

/*
Useful later:
	newButton.addEventListener('click', () => setup.respond(name, newButton));
*/