// EXO 1

// var a=5;
// var b=3;

// [a,b]=[b,a]
// alert([a,b]);


// EXO 2

// var nom = 'toto';
// var age = 30;
// var homme = true;

// alert('Je suis '+nom+' et j`ai '+age+ ' ans.');


//EXO 2.3

// let num = prompt('Entrez un nombre');
// document.write(Math.pow(num, 2));


// _______________________________________________________________

// EXO 3 

// var a = 2;
// var b = 3;
// var somme = a + b;

// function addition(a, b){
// 	a+b;
// 	document.write(somme);
// }

// addition();

//_________________________________________________________________

//EXO 3

// function convert(minute){
// 	document.write(minute*60)
	
// }
// convert(4);

//_________________________________________________________________
//EXO 4

// let nbr = parseInt(prompt('entrez un nombre'));

// function plusUn(){
// 	result = nbr + 1;
// 	document.write(result);
// }

// plusUn();

//___________________________________________________________________

//EXO 5

// var base;
// var hauteur;
// var surface;

// function getSurface(base, hauteur){
// 	surface = base * hauteur / 2;
// 	alert(surface);
// }

// getSurface(16, 4);


//____________________________________________________________________
 
//EXO 6

// let str = ['H', 'E', 'L', 'L', 'O'];

// function reverse(){
// 	str.reverse();
// 	alert(str.join(''));
// }

// reverse();

//____________________________________________________________________

//EXO 7 

// let array = [70, 50, 78];
// document.write(Math.max(...array));


//____________________________________________________________________

//EXO 8

// let array = [45, 5, 8, 12];

// function getFirst(){
// 	document.write(array[0]);
// }

// getFirst();

//_____________________________________________________________________

//EXO 9

// document.write(window.location.href);

//_____________________________________________________________________

//EXO 10

// let a = parseInt(prompt('entrez un nombre'));
// let b = parseInt(prompt('entrez un nombre'));

// let reste1 = a%b;

// document.write(reste1);

//_____________________________________________________________________

//EXO 11

// let a = parseInt(prompt('entrez un nombre'));
// let b = parseInt(prompt('entrez un nombre'));

// if(a + b<100){

// 	document.write('la somme des nombres que vous venez d`entrer est inférieur a 100');
// }else{

// 	document.write('la somme des nombres que vous venez d`entrer est supérieur a 100');
// }

//_____________________________________________________________________

//EXO 12 

// function getSec(heure){
// 	document.write(heure * 3600);
// }

// getSec(3);


//_____________________________________________________________________

//EXO 13



// function check(n){
// 	return n <=0;

// }

// document.write(check(-2));

//_____________________________________________________________________

//EXO 14

// function check2(nbr1, nbr2){
// 	return nbr1 === nbr2;
// }

// document.write(check2(5, 5));

//_______________________________________________________________________

//EXO 15 

// function divisible(n){
// 	return n%5===0;
// }

// document.write(divisible(20));

//______________________________________________________________________

//EXO 16

// function heureMin(heure, minute){
// 	document.write(heure*3600 + minute*60);
// }

// heureMin(1, 10);

//_______________________________________________________________________

//EXO 17

// let array= [5, 4, 3, 2, 1];
// let array2 = [];
// let taille = array.length;


// function reverse(){
// 	for(let i = 0; i<taille; i++)	
// 	array2.push(array.pop());
// 	document.write(array2);
// }

// reverse();

//________________________________________________________________________

//EXO 18

// let array = [7, 5, 8 ,10, 50];

// function getLast(){
// 	document.write(array.pop());
// }

// getLast();

//_______________________________________________________________________

//EXO 19

// function verif(a, b){
// 	return a===b;
// }

// document.write(verif(5, '5'));

//______________________________________________________________________

//EXO 20

// function vide(str){
// 	return str.length == 0;
// }

// document.write(vide(""));