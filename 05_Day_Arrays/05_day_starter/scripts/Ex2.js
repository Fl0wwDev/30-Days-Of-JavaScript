//2

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
const words = cleanedText.split(' ');
console.log(words);

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')

console.log(shoppingCart)

const index = shoppingCart.indexOf('Honey')
if (index > -1){
    shoppingCart.splice(index, 1)
}

console.log(shoppingCart)

const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}
console.log(shoppingCart);


//4
if (countries.indexOf('Ethiopia') == -1){
    countries.push('Ethiopa')
}
else {
    console.log('ETHIOPIA')
}

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)


console.log(fullStack)