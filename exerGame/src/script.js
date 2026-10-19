setup.zombieDist = 20022

setup.setMode = function setMode(mode) {
	setup.mode = mode
}

setup.decZombieDist = function decZombieDist(amount) {

	setup.zombieDist -= amount
	setup.zombieDistText.textContent = setup.zombieDist
}

setup.incZombieDist = function incZombieDist(amount) {

	setup.zombieDist += amount
	setup.zombieDistText.textContent = setup.zombieDist
}

setup.clearID = function clearID() {
	clearInterval(setup.intervalId)
}

setup.startChase = function startChase() {
	setup.zombieDistText = document.getElementById("zombieDist");
	setup.decZombieDist(0)
	switch (setup.mode) {
		case "easy":
			setup.intervalId = setInterval(setup.decZombieDist, 1000, 5);
			break;
		case "med":
			setup.intervalId = setInterval(setup.decZombieDist, 1000, 10);
			break;
		case "hard":
			setup.intervalId = setInterval(setup.decZombieDist, 1000, 50);
			break;
	}

}