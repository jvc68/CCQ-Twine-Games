/*Audio for Bubble Wrap */

SimpleAudio.tracks.add("bub1", "audio/bub1.mp3");
/*I don't like two*/SimpleAudio.tracks.add("bub2", "audio/bub2.mp3");
SimpleAudio.tracks.add("bub3", "audio/bub3.mp3");
SimpleAudio.tracks.add("bub4", "audio/bub4.mp3");
/*I can change this*/SimpleAudio.tracks.add("bub5", "audio/bub5.mp3");
SimpleAudio.tracks.add("bub6", "audio/bub6.mp3");
/*The best one, do not change*/SimpleAudio.tracks.add("bub7", "audio/bub7.mp3");
/*Feels too long*/SimpleAudio.tracks.add("bub8", "audio/bub8.mp3");

/*Audio for Light Switch */
SimpleAudio.tracks.add("on", "audio/lightOn.mp3");
SimpleAudio.tracks.add("off", "audio/lightOff.mp3");

/*Array For drums, makes code look cleaner */
setup.instruments = ["snare", "bass", "hihat", "lowTom", "medTom", "topTom", "crash"]

/*Audio for control panel*/
SimpleAudio.tracks.add("1", "audio/C.wav");
SimpleAudio.tracks.add("2", "audio/D.wav");
SimpleAudio.tracks.add("3", "audio/E.wav");
SimpleAudio.tracks.add("4", "audio/F.wav");
SimpleAudio.tracks.add("5", "audio/G.wav");
SimpleAudio.tracks.add("6", "audio/A.wav");
SimpleAudio.tracks.add("7", "audio/B.wav");
SimpleAudio.tracks.add("8", "audio/C2.wav");
SimpleAudio.tracks.add("buttonClick", "audio/buttonClick.wav");


/*Color dictionary for Control panel */
setup.lightColors = {
	"1": [`0px 0px 10px rgba(255, 255, 255, 1),
  		4px 4px 10px rgba(255, 255, 255, 1),
  		-4px -4px 10px rgba(255, 255, 255, 1)`, 'white'],

	"2": [`0px 0px 10px rgba(255, 0, 0, 1),
  		4px 4px 10px rgba(255, 0, 0, 1),
  		-4px -4px 10px rgba(255, 0, 0, 1)`, 'red'],

	"3": [`0px 0px 10px rgba(255, 145, 0, 1),
  		4px 4px 10px rgba(255, 145, 0, 1),
  		-4px -4px 10px rgba(255, 145, 0, 1)`, 'orange'],

	"4": [`0px 0px 10px rgba(255, 255, 0, 1),
  		4px 4px 10px rgba(255, 255, 0, 1),
  		-4px -4px 10px rgba(255, 255, 0, 1)`, 'yellow'],

	"5": [`0px 0px 10px rgba(0, 255, 0, 1),
  		4px 4px 10px rgba(0, 255, 0, 1),
  		-4px -4px 10px rgba(0, 255, 0, 1)`, 'lightGreen'],

	"6": [`0px 0px 10px rgba(0, 0, 255, 1),
  		4px 4px 10px rgba(0, 0, 255, 1),
  		-4px -4px 10px rgba(0, 0, 255, 1)`, 'blue'],

	"7": [`0px 0px 10px rgba(75, 0, 130, 1),
  		4px 4px 10px rgba(75, 0, 130, 1),
  		-4px -4px 10px rgba(75, 0, 130, 1)`, 'indigo'],

	"8": [`0px 0px 10px rgb(238, 130, 238),
  		4px 4px 10px rgb(238, 130, 238),
  		-4px -4px 10px rgb(238, 130, 238)`, 'violet'],

}