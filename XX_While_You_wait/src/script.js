setup.populateFidget = function populateFidget(name) {
	let container = document.getElementById("container");
	switch (name) {
		case "bubbleWrap":
			/*Do math here based on size of screen to know how many bubbles to make */
			for (let i = 0; i < (13 * 12); i++) {
				let newButton = document.createElement('button');
				newButton.classList.add("bubble");
				container.appendChild(newButton);
			}
			break;
		default:
			console.log("Something went wrong when populating fidget")
	}
}