SimpleAudio.tracks.add("zombieSnarl1", "audio/zombieSnarl1.wav");
SimpleAudio.tracks.add("zombieSnarl2", "audio/zombieSnarl2.wav");
SimpleAudio.tracks.add("zombieSnarl3", "audio/zombieSnarl3.wav");
SimpleAudio.tracks.add("zombieSnarl4", "audio/zombieSnarl4.wav");
SimpleAudio.tracks.add("zombieSnarl5", "audio/zombieSnarl5.wav");
SimpleAudio.tracks.add("zombieSnarl6", "audio/zombieSnarl6.wav");
SimpleAudio.tracks.add("zombieSnarl7", "audio/zombieSnarl7.wav");
SimpleAudio.tracks.add("zombieSnarl8", "audio/zombieSnarl8.wav");
SimpleAudio.tracks.add("zombieSnarl9", "audio/zombieSnarl9.wav");
SimpleAudio.tracks.add("zombieSnarl0", "audio/zombieSnarl10.wav");
SimpleAudio.tracks.add("music", "audio/runningMusic.mp3");


/*
Win at 100 zombies:
At milestone 15,000, the user would have walked 7,116 steps, which is the minimum for a healthy daily step count 
Win at 140 zombies:
At milestone 21,000, the user would have walked 9,116 steps, which is just under whats considered "active"
Win at 200 zombies:
At milestone 26,000, the user would have walked 10,783 steps, which is considered active 
*/

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
		"Walk 18,000 Steps": { "reward": -20, "type": "killZombies", "requiredSteps": 18000, "ogRequiredSteps": 18000 },
		"Walk 21,000 Steps": { "reward": -20, "type": "killZombies", "requiredSteps": 22000, "ogRequiredSteps": 22000 },
		"Walk 24,000 Steps": { "reward": -20, "type": "killZombies", "requiredSteps": 24000, "ogRequiredSteps": 24000 },
		"Walk 26,000 Steps": { "reward": -40, "type": "killZombies", "requiredSteps": 26000, "ogRequiredSteps": 26000 }
	}
}