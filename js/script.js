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
		body: "This is an interactive story",
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
		"a See, I told you to have a clear shoot, Listen to me next time!! ",
		"j I will do that next time, what do we do next?",
		"a We got to go to a different location because if they was any deer near, now they are long gone.",
		"j Ok, let go then I am getting hungry",
		"2 hours later",
		"a Let go home, it doesn’t look we will any, you scare them away.",

		//Thoughts:  (“I felt really bad for ruining our chances at getting the deer, because of my impatience.”)

		"j OK",

	//	"1 hour later",
		"scene Home",
		// grandma dissapointed 
		"l You didn’t get anything, I had a feeling this might happen so I prepare you some food.",
		//j and a 
		"Aaah beans again, You know what I so hungry and tire that this are delicious, but deer would have been great.",
		
		//If shoot right away
		"scene Mountain",
		"j Yes!! It looks like I got it",
		"a Nice, we are going to eat great tonight.",
		"j Let go get it.",
		"a Be careful don’t get to close!!",

		// choice "be careful dont get too close", "get a closer look"
		"j It ok, it dead already",
		"j Aaah, aah, aah.",
		"a I told you not get close, when deer are dying there at their strongest.",
		"a You know we can’t afford for any of us to get injured the closest clinic is 2 hours away And doctors is never there.",
		"j And the doctor it not there we would to drive to the city which takes about 3 hours. I know I am sorry. Live and Learn.",
		"a Alright, Let go you have be with pain, so you can learn from your mistakes it will heal with time.",
		"At home.",
		"What happened to you?",
		"j I got kick the deer, but though ARIEL told not get close I still did.",
		"l This why listen to your cousin he has more experience. We pour alcohol and disinfectant and you will be fine. Any great hunt -- get to cook that deer. We will have food for days to come.",
		"",







		{"Choice":{
			"Dialog": "What are you going to do? ",
			"Shoot": {
				"Text": "Shoot right away!!",
				"Do": "jump Shoot"
			},
			"Wait": {
				"Text": "Wait to have clear shoot",
				"Do": "jump Shoot"
			}
		}
	}
	
	

], 


	"No": [

		"j You can do it now.",

		"display message Help",

		"j Go ahead and create an amazing Game!",
		"j I can't wait to see what story you'll tell!",
		"end"
	]

}