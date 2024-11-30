// this is your main.js script

let challenge = '30 Days Of JavaScript';
console.log('Ex2 :', challenge);
console.log('Ex3 :', challenge.length);
console.log('Ex4 :', challenge.toUpperCase());
console.log('Ex5 :', challenge.toLowerCase());
console.log('Ex6 :', challenge.substring(0, 2));
console.log('Ex7 :', challenge.substring(2, 21));
console.log('Ex8 :', challenge.includes('Script'));
console.log('Ex9 :', challenge.split());
console.log('Ex10 :', challenge.split(' '));
console.log('Ex11 :', 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));
console.log('Ex12 :', challenge.replace(challenge,'30 days Of Python'));
console.log('Ex13 :', challenge.charAt('15'));
console.log('Ex14 :', challenge.charCodeAt('12'));
console.log('Ex15 :', challenge.indexOf('a'));
console.log('Ex16 :', challenge.lastIndexOf('a'));
console.log('Ex17 :', 'You cannot end a sentence with because because because is a conjunction'.indexOf('because'));
console.log('Ex18 :', 'You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
console.log('Ex19 :', 'You cannot end a sentence with because because because is a conjunction'.search('because'));
console.log('Ex20 :',  ' 30 Days Of JavaScript '.trim());
console.log('Ex21 :',  challenge.startsWith('30 Days Of JavaScript'));
console.log('Ex22 :',  challenge.endsWith('30 Days Of JavaScript'));
console.log('Ex23 :',  challenge.match('a'));
console.log('Ex24 :',  challenge.concat('30 days of ', 'Javascript'));
console.log('Ex25 :',  challenge.repeat(2));