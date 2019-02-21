//Selection Sort
//Runs through the array until it finds the minimum number, once found, it will swap the minimum number to the front of the array. It will continue to run through the entire array until sorted. This algorith does less swapping than the Bubble Sort method

array =[11, 19, 1989, 1991, 5, 8]

function selectionSort(arr){
    for(var i = 0; i<arr.length-1; i++){
        var min = i
        for(var j = i; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        var temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
  return arr
}

console.log(selectionSort(array))