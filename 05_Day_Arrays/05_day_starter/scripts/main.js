console.log(countries)

// 1. Declare an empty array;
let emptyArray = [];

// 2. Declare an array with more than 5 number of elements
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3. Find the length of your array
console.log(numbers.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(numbers[0]);
console.log(numbers[numbers.length / 2]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array should have the following:
let mixedDataTypes = [1, 'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

//9
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length -1])
//10
console.log(itCompanies)

//11
itCompanies.forEach(company => console.log(company.toUpperCase()));

//12
let txt = 'Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.'
const words = txt.split(' ')
console.log(words)

//13
console.log(itCompanies.includes('Facebook'))

//14 




//17 
console.log(itCompanies.splice(0,3))

