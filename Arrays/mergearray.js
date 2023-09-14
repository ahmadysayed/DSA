function mergeSortedArrays(array1, array2){
    const mergeArray = [];
    let array1Item = [0];
    let array2Item = [0];
    let i = 1;
    let j = 1;

    // Check Input
    if (array1.length === 0){
        return array2;
    }
    if (array2.length === 0){
        return array1;
    }

    while(array1Item || array2Item){
        if(!array2Item || array1Item < array2Item){
            mergeArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }else{
            mergeArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    console.log(mergeArray);
    return mergeArray;
}
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])