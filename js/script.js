// Define the messages used in the game.
var messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='http://monogatari.hyuchia.com/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='http://monogatari.hyuchia.com/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
//var notifications = {
//	"Welcome": {
//		title: "Welcome",
//		body: "This is an interactive story",
//		icon: ""
//	}
//};

// Define the Particles JS Configurations used in the game
let particles = {
		"universe": {"particles":{"number":{"value":0,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#330B29"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}

};

// Define the music used in the game.
var music = {


};

// Define the voice files used in the game.
var voice = {
	"Story": "story.wav",
	"Voice1": "STE-000.mp3",
	"Voice2": "STE-001.mp3",
	"Voice3": "STE-002.mp3",
	"Voice4": "STE-003.mp3",
	"Voice5": "STE-004.mp3",
	"Voice6": "STE-005.mp3",
	"Voice7": "STE-006.mp3",
	"Voice8": "STE-007.mp3",
	"Voice9": "STE-008.mp3",
	"Voice10": "STE-009.mp3",
	"Voice11": "STE-010.mp3",
	"Voice12": "STE-011.mp3",
	"Voice13": "STE-012.mp3",
	"Voice14": "STE-013.mp3",
	"Voice15": "STE-014.mp3",
	"Voice16": "STE-015.mp3",
	"Voice17": "STE-016.mp3",
	"Voice18": "STE-017.mp3",
	"Voice19": "STE-018.mp3",
	"Voice20": "STE-019.mp3",
	"Voice21": "STE-020.mp3",
	"Voice22": "STE-021.mp3",
	"Voice23": "STE-022.mp3",
	"Voice24": "STE-023.mp3",
	"Voice25": "STE-025.mp3",
	"Voice26": "STE-026.mp3",
	"Voice27": "STE-028.mp3",
	"Voice28": "STE-030.mp3",
	"Voice29": "STE-031.mp3",
	"Voice30": "STE-032.mp3",
	"Voice31": "STE-035.mp3",
	"Voice32": "STE-036.mp3",
	"Voice33": "STE-037.mp3",
	"Voice34": "STE-038.mp3",
	"Voice35": "STE-039.mp3",

};

// Define the sounds used in the game.
var sound = {

};

// Define the videos used in the game.
var videos = {

};

// Define the images used in the game.
var images = {


};

// Define the backgrounds for each scene.
var scenes = {
	"Main": "ourjourney.png",
	"Home": "housebg.jpg",
	"Fronthouse": "fronthousebg.jpg",
	"Mountain": "mountainbg.jpg",
	"Forest": "forestbg.jpg",
	"Beach": "beach.png",
	"Bed": "bed.png",
	"Housefar": "housefar.png",
	"Blackscreen": "blackscreen.jpg",
	"Theway": "outside.png",





};

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


	};



var script = {
	// The game starts here.

		"Start":[
			"notify Welcome",


		"scene Blackscreen",

		"Hi {{player.Name}}, Welcome to Our Journey! Press any key to continue",
		"This story is based on real immigrant's life",

		{"Choice": {
				"Dialog": "Are you ready to start the journey?",
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

		"scene Blackscreen",
		"Mexico...",
		"scene Bed",
		"play voice Voice1",
		"show j Normal right fadeIn",
		"I was 11 years old and this morning I had woken up at 5:00 AM to travel to el Cerro Trozado which is a mountain about 7 miles from house in order to go hunt for food.",
//		"a Wake up, we need to go if we going to get there at a good time!!",

//		"Ok!, Ok!, I am awake ready to go.",
//		"1 hours and 30 minutes later",

		"scene Mountain",
		"show j Normal right fadeIn",
		"show a Normal left fadeIn",
		"play voice Voice2",
		"I reach EL Cerro Trozado at 7:00 AM and I started looking for deer and animals I could hunt for food.",
		"scene Forest",
		"show j Normal right fadeIn",
		"play voice Voice3",
		"I then saw a deer in the distance I approached as silently as possible from a distance of 100 meter, I adjusted my scope and made sure I wouldn’t miss.",

		"scene Blackscreen",
		"Your Choice",
		{"Choice": {
				"Dialog": "What are you going to do?",
				"Shoot": {
					"Text": "Shoot right away",
					"Do": "jump Shoot"
				},
				"Wait": {
					"Text": "Wait to have clear shoot.",
					"Do": "jump Wait"
				}
			}
		}
	],

"Shoot": [
	"scene Blackscreen",
	"Mexico...",
	"scene Bed",
	"play voice Voice1",
	"show j Normal right fadeIn",
	"I was 11 years old and this morning I had woken up at 5:00 AM to travel to el Cerro Trozado which is a mountain about 7 miles from house in order to go hunt for food.",

],
"Wait": [
 	"scene Mountain",
	"show j Normal right fadeIn",
	"Yes!!,  It looks like I got it."
],


//		"a Be silent, approach as silently as possible.",
//		"show j Normal left fadeIn",
//		"j I got one in my scope.",

//		"a Take a breath and focus the scope then shoot.",
//		"a See, I told you to have a clear shoot, Listen to me next time!! ",
//		"j I will do that next time, what do we do next?",
//		"a We got to go to a different location because if they was any deer near, now they are long gone.",
//		"j Ok, let go then I am getting hungry",
//		"2 hours later",
//		"a Let go home, it doesn’t look we will any, you scare them away.",

		//Thoughts:  (“I felt really bad for ruining our chances at getting the deer, because of my impatience.”)

//		"j OK",

	//	"1 hour later",
	//	"scene Home",
		// grandma dissapointed
//		"l You didn’t get anything, I had a feeling this might happen so I prepare you some food.",
		//j and a
//		"Aaah beans again, You know what I so hungry and tire that this are delicious, but deer would have been great.",

		//If shoot right away
//		"scene Mountain",
//		"j Yes!! It looks like I got it",
//		"a Nice, we are going to eat great tonight.",
//		"j Let go get it.",
//		"a Be careful don’t get to close!!",

		// choice "be careful dont get too close", "get a closer look"
//		"j It ok, it dead already",
//		"j Aaah, aah, aah.",
//		"a I told you not get close, when deer are dying there at their strongest.",
//		"a You know we can’t afford for any of us to get injured the closest clinic is 2 hours away And doctors is never there.",
//		"j And the doctor it not there we would to drive to the city which takes about 3 hours. I know I am sorry. Live and Learn.",
//		"a Alright, Let go you have be with pain, so you can learn from your mistakes it will heal with time.",
//		"At home.",
//		"What happened to you?",
//		"j I got kick the deer, but though ARIEL told not get close I still did.",
//		"l This why listen to your cousin he has more experience. We pour alcohol and disinfectant and you will be fine. Any great hunt -- get to cook that deer. We will have food for days to come.",
//		"j Ok, I wait make sure it dead.",
//		"l Alright, help me carry it home.",
//		"Great jobs, we got us food for days. Let get started on the preparation, I send some food to your other cousin too. ",

		//new scene
//		"After finish eating a great meal, all seats down to admire the fresh humit wind blowing and nice shade as the sun goes down.",
//		"l You know I went to see you Grandma Lucinda and she told your parent called They told her they will soon have enough money to bring you to the United States.",
//		"j doesn’t usually show any emotion, but at this moment he began which show How much he cares for his grandmother.",
//		"You I am very happy that I finally be able to see them soon, but at the same time I feel very sad because I will leave you behind grandma. Once I leave I won’t be able to see you ever again grandma. (Tears behind to fall.) ",







//		{"Choice":{
//			"Dialog": "What are you going to do? ",
//			"Shoot": {
//				"Text": "Shoot right away!!",
//				"Do": "jump Shoot"
//			},
//			"Wait": {
//				"Text": "Wait to have clear shoot",
//				"Do": "jump Shoot"
//			}
//		}
//	}



//Important  ],


	"No": [

		"end"
	]

}
