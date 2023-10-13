let student = {

name: 'pierre',
favoritefood: 'pizza',
city: 'clamart',
}
// simple

let result = 0;
let values = Object.values(student);

values.forEach((value) => {
	result += value.length 

});

console.log(result);


//complexe 

result = 0
result = values.reduce((acc, value) => acc + value. length, result)
console.log(result);


// pair ou impair ?

if (result % 2) {
	console.log('impair');
}  else {
	console.log('pair');
}

console.log (`Le résultat est ${result}`); //L'interpolation
console.log('Le resultat est ' + result); //La concaténation

//ternaire
console.log(`Le résultat est ${result % 2 ? 'impair' : 'pair'}`);
//condition ? vrai: faux
