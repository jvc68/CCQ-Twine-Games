NAU CS 486 Capstone
Team Heartline
Mentor Morgan Nicholson
Client Jared Duval

This repo holds the twee .src files and their compiled .html files. These Twine games are to be exported to PHT Lab's CardioCare Quest.

For development, it's recommended to compile the Twee games nodemon by running command "npm run watch" inside VSCode's terminal. 
This is accomplished by maintaining the following file tree organization for each game: 
<img width="562" height="384" alt="image" src="https://github.com/user-attachments/assets/81396ca1-38b0-4032-ab34-75cb15370100" />


And by having the following lines in your package.json:

"scripts": {

"build": "tweego -o dist/Zombie-Chase.html src/",

"watch": "nodemon --watch src --ext tw --exec \"npm run build\""
 
  },

  This Repo is managed by Jesse Ceja, please email me at jvc68@nau.edu for any questions.
