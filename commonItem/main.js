// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays
// contain any common items 
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false
// ------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// 2 parameters - arrays - no size limit
// return true or false

// function containsCommonItem(arr1, arr2){
//     for(let i = 0; i < arr1.length; i++){
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// O(arr1*arr2) => O(n^2)

// containsCommonItem(array1, array2);


const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// array1 ==> obj {
//     a: true,
//     b: true,
//     c: true,
//     x: true
// }

// array2[index] === obj.proparties


function containsCommonItem2(arr1, arr2){
    // loop trough first array and create object 
    // where proparties === items in the array
    let map = {}
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
        
    }

    // loop trough second array and check if item 
    // in second array exists on created object
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) { 
            console.log("true")
            return true;
        }
    }
    console.log("false")
    return false;
}

// O(arr1 + arr2)

containsCommonItem2(array1, array2);


function containsCommonItem3(arr1, arr2){
    return arr1.some(item => arr2.includes(item))
}

containsCommonItem3(array1, array2)