class Pokemon {
	constructor(name, attack, defense, hp, luck) {

this.name = name;
this.attack = attack;
this.defense = defense;
this.hp = hp;
this.luck = luck;

}


isLucky() {
	return Math.floor(Math.random() * 100) <= this.luck;

}
attackPokemon() {
  if (this. islucky())   {
  	let damages = this.attack - pokemon.defense; 
    pokemon.hp -= damages;

    console.log(`${this.name} a attaqué ${pokemon.name}, perdant ${damages} hp !`);
}else {
	console.log(`${this.name} a raté son attaque !`)

  }


//fin de la classe pokemon