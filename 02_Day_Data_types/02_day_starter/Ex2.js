console.log(
  'The quote',
  "'There is no exercise better for the heart than reaching down and lifting people up.'",
  'by John Holmes teaches us to help one another.'
);

let number = '10';
console.log(typeof number);
if (typeof number != 'number') {
  number = parseInt(number);
  console.log(number);
}

let python_jargon = ['python', 'jargon'];

let containsOn = python_jargon.some((word) => word.includes('on'));
console.log(containsOn);

console.log(Math.round(Math.random() * 101));
console.log(Math.floor(Math.random() * 51) + 50);

let str = 'JavaScript';
let random = Math.random() * str.length;
console.log(str.charAt(random));

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

