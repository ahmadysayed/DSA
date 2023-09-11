// Naive
function hasPairWithSum(arr, sum){
    var len = arr.length;
    for (let i = 0; i < arr.len-1; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                return true;
            }            
        }
        
    }
    return false;
}

function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if(mySet.has(arr[i])){
            console.log("true")
            return true
        }
        mySet.add(sum - arr[i])
    }
    console.log("false");
    return false;
}

hasPairWithSum2([2,4,6,4,8,9,1], 9)