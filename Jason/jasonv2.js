let names = ["james", "jonathan", "valentine", "rachelle", "serge"]
let joueurs = []
let décédé = []

class joueurs {
	constructor(name, vie, stats) {
		this.name = name;
		this.vie = vie;
		this.stats = stats;
	}


let stats = {
	emo = {
		p_mort: 0.5,
		p_attaque: 0.3,
		p_attaquemort: 0.4,
	},
	sportif = {
		p_mort: 0.7,
		p_attaque: 0.8,
		p_attaquemort: 0.4,
	},
	blonde = {
		p_mort: 0.8,
		p_attaque: 0.3,
		p_attaquemort: 0.7,
	},
	enrobé = {
		p_mort: 0.3,
		p_attaque: 0.3,
		p_attaquemort: 0.1,
	},
	emo = {
		p_mort: 0.5,
		p_attaque: 0.3,
		p_attaquemort: 0.7,
	},




atk (target) {
	if(Math.random() < this.stats.p_attaque) {
		console.log('jason attaque sa proie')
		if (Math.random() < target.stats.p_attaquemort) {
			console.log(`Jason perd de la vie -15 et il reste ${Jason.vie -= 15} et sa proie est décédé `) 
			Jason.vie -=15
			target.vie = 0 
		} else {
			console.log(`la proie est morte`)
		}
	}else{
			if (Math.random() < target.stats.p_attaque) {
			console.log(`La proie attaque Jason lui faisant perdre 10 de vie lui laissant ${Jason.vie -= 10} de vie`) 
			Jason.vie -= 10
		}
	}



let Jason = new joueurs("Jason", 100, Tueur)

Tueur = {
	p_attaque; 0.6,
}

for (i = 0; i < 5; i++) {
	let randomName = names[Math.floor(Math.random() * names.length)]
	let random = Math.floor(Math.random() * stats.length)
	let randomPersonnalité = stats[random]
	let perso = new joueurs(randomName, 100, randomPersonnalité)



}

while (Jason.vie > 0 && joueurs.length > 0) {  
	let random = Math.floor(Math.random() * joueurs.length)
	let randomPersonnalité = joueurs[random]
	Jason.attaque(randomjoueurs)
	if(randomjoueurs.vie == 0){
		}



}  
	


	if (joueurs.length == 0) {
		console.log(`Jason a abattu toute les proies`)
		break

		if (Jason.vie <= 0) {
			console.log(`Jason a été neutralisé`)
		}
	} 

}

}