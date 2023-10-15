class taxi {
	constructor(name, health) {
		this.name = name;
		this.health = health;
	}
}

//variables
var playlist = ["rock", "pop", "anissa", "classique", "rap"];
let john = new taxi("john", 10);
let taxi = 0;
let etat = 0;
let musique = "";



for (let feutricolore = 30; feutricolore >= 0; feutricolore--) {
	musique = playlist[Math.floor(Math.random() * playlist.lenght)];
	if (feutricolore == 0) {
		console.log(dernier feutricolore avant que john rentre chez lui et la musique a la radio est ${musique}
			);
	} else {
		console.log(il reste ${feutricolore} avant que john arrive chez lui et la musique jouée est ${musique}
			);
		}
		
		if (musique == "anissa") {
			if (john.health <= 0) {
				etat = 1;
				break;
			} else {
				john.health -= 1;
				console.log("jhon va changer de taxi");
				taxi += 1;
			}
		if (etat == 1) {
			console.log('john explose');
		} else {
			console.log('john est bien arrivé après ${taxi} taxis différents')
		} 

		}


}
