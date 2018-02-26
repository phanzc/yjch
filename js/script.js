// Define the messages used in the game.
var messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='http://monogatari.hyuchia.com/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='http://monogatari.hyuchia.com/demo/'>Demo</a> - A simple Demo.</p>"
	}
}

// Define the notifications used in the game
var notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
}

// Define the Particles JS Configurations used in the game
var particles = {

}

// Define the music used in the game.
var music = {

}

// Define the voice files used in the game.
var voice = {

}

// Define the sounds used in the game.
var sound = {

}

// Define the videos used in the game.
var videos = {

}

// Define the images used in the game.
var images = {


}

// Define the backgrounds for each scene.
var scenes = {
	"Main": "ourjourney.png",
	"Home": "housebg.jpg",
	"Mountain": "mountainbg.jpg",
	"Forest": "forestbg.jpg",
	
	
}

// Define the Characters
var characters = {
	"j": {
		"Name": "Javier",
		"Color": "#5bcaff",
		"Images":{
			"Normal": "jnormal.png",
			"Mad": "jmad.png",
		}
	}
			
		
	}



var script = {
	// The game starts here.

		"Start":[
			"notify Welcome",
			{"Input": {
				"Text": "What is your name?",
				"Validation": function(input) {
					return input.trim().length > 0;
				},
				"Save": function(input) {
					storage.player.Name = input;
				},
				"Warning": "You must enter a name!"
			}
		},

		"scene Home",
		"show j Normal right with fadeIn",

		"Hi {{player.Name}} Welcome to Our Journey!",
		"This story is based on real immigrant's life",
		"Are you ready to start the journey?",

		{"Choice": {
				"Dialog": "j Have you already read some documentation?",
				"Yes": {
					"Text": "Yes",
					"Do": "jump Yes"
				},
				"No": {
					"Text": "No",
					"Do": "jump No"
				}
			}
		}
	],

	"Yes": [

		"j That's awesome!",
		"j Then you are ready to go ahead and create an amazing Game!",
		"j I can't wait to see what story you'll tell!",
		"end"
	],

	"No": [

		"j You can do it now.",

		"display message Help",

		"j Go ahead and create an amazing Game!",
		"j I can't wait to see what story you'll tell!",
		"end"
	]
}

