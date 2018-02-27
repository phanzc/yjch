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
	"Fronthouse": "fronthousebg.jpg",
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
			"Sad": "jsad.png",
		}
	},
	"l":{ 
		"Name": "Linda",
		"Color": "#33333",
		"Images": {
			"Normal": "lnormal.png",
			"Mad": "lmad.png",
			"Serious": "lserious.png",

		}

	},
	"a":{
		"Name": "Ariel",
		"Color": "",
		"Images": {
			"Normal": "anormal.png",
			"Mad": "amad.png",
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

		"Hi {{player.Name}}, Welcome to Our Journey! Keep clicking left or press the spacebar to continue",
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
		"j Then you are ready to go ahead !",
		"j I can't wait to tell you my story",
		"scene Fronthouse",
		"show a Normal right fadeIn",
		"a Wake up, we need to go if we going to get there at a good time!!",
		
		"Ok!, Ok!, I am awake ready to go.",
		"1 hours and 30 minutes later",

		"scene Mountain",
		"show a Normal right fadeIn",
		"a Be silent, approach as silently as possible.",
		"show j Normal left fadeIn",
		"j I got one in my scope.",

		"a Take a breath and focus the scope then shoot.",

		{"Choice":{
			"Dialog": "What are you going to do? ",
			"Shoot": {
				"Text": "Shoot right away!!",
				"Do": "jump Shoot"
			},
			"Wait": {
				"Text": "Wait to have clear shoot",
				"Do": "jump Shoot"
			},



		}
	},


		
	],

	"No": [

		"j You can do it now.",

		"display message Help",

		"j Go ahead and create an amazing Game!",
		"j I can't wait to see what story you'll tell!",
		"end"
	]

}