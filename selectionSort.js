/*
Selection sort goes through the array to find the minimum number, and once it finds the minimum, it will swap the minimum to the front of the array.  
The algorithm will go through the array and continue to find the next minimum number and bring it to the front till it goes through the array's length
This Algorithm does less swapping than bubble Sort
O(n^2)
*/


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