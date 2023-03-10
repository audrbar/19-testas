// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log("-------- 1 -----------");
const a = 5;
const b = 6;
if (a > b) {
  console.log(`${a} daugiau uz ${b}`);
} else if (a == b) {
  console.log(`${a} yra lygu ${b}`);
}
console.log(`${b} daugiau uz ${a} `);

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log("-------- 2 -----------");
for (let i = 1; i <= 10; i++) {
  console.log("Skaiciai nuo 1 iki 10: ", i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log("-------- 3-----------");
for (let i = 0; i <= 10; i++) {
  if (i === 0) {
    console.log(i);
  } else if (i % 2 === 0) {
    console.log(i);
  }
}
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log("-------- 4 -----------");
for (let i = 1; i <= 5; i++) {
  let r = Math.floor(Math.random() * 10 + 1);
  console.log("Atsitiktiniai skaiciai nuo 1 iki 10: ", r);
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log("-------- 5 -----------");
let atsitiktinis = 0;
while (atsitiktinis >= 5) {
  let atsitiktinis = Math.floor(Math.random() * 10 + 1);
  console.log(atsitiktinis);
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.log("-------- 6 -----------");
let masyv = [];
for (let x = 0; x <= 30; x++) {
  let r = Math.floor(Math.random() * 30 + 1);
  masyv.push(r);
}
console.log(masyv);
for (let a = 0; a < masyv.length; a++) {
  let max = -Infinity;
  const numb = masyv[a];
  if (numb > max) {
    max = numb;
  }
}

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log("-------- 7 -----------");

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
console.log("-------- 8 -----------");
const aa = [1, 5, 6, 7];
const bb = [
  [5, 6],
  [4, 5],
  [6, 8],
];
function lygineSuma(a, b) {
  if (typeof aa === Number && typeof bb === Number) {
    return aa + bb;
  } else if (typeof a === Array && typeof b === Array) {
    return aa.length + bb.length;
  }
}
console.log(lygineSuma());
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
console.log("-------- 9 -----------");
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)
console.log("-------- 10 -----------");
