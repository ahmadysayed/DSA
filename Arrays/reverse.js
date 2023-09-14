// Create a function that reverse a string
// 'Hi My name is Mujtaba' should be:
// abatjuM si eman yM iH

// first solution
function reverse(str){
    // check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return "that's not good";
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }
    return backwards.join('');
}

console.log(reverse('Hi My name is Mujtaba'))

// second solution
function reverse2(str) {
    return str.split('').reverse().join('')
}

console.log(reverse2('Hi My name is Mujtaba'))

const reverse3 = str => [...str].reverse().join('');

console.log(reverse3('Hi My name is Mujtaba'))

