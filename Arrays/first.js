const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage


// push
strings.push('e'); //O(1) - add to the end

// pop
strings.pop();// O(1) - delete 1 from end

// unshift
strings.unshift('x'); // O(n) - add to the beginning also shift the indexes so it's why O(n)

// splice
strings.splice(2, 0, 'ahmady'); //O(n)

console.log(strings);