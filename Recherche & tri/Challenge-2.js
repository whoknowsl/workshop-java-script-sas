//Tri par Insertion
function InsertionSort(arr) {
    let temp;
    let size = arr.length;
    for (let i = 0; i < size - 1; i++) {
        let minIndx = i;
        for (let j = i + 1; j < size; j++) {
            if (arr[j] < arr[minIndx]) {
                minIndx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndx];
        arr[minIndx] = temp
    }

    return arr
}

console.log(InsertionSort([5, 4, 6, 1, 3, 5, 7]))


