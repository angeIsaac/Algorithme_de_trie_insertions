function insertionTrie(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i];
        let keyIndex = i;
        while(i > 0 && key < arr[keyIndex - 1]){
            arr[keyIndex] = arr[keyIndex - 1];
            arr[keyIndex - 1] = key;
            keyIndex--;
        }
    }
    return arr;
}

let tab = [2, 5, 3, 8, 1, 4, 6];
console.log(insertionTrie(tab));