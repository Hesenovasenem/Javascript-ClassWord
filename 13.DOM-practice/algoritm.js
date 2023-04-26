function medianofArr(arr1) {
    let median = arr1;
    median = median.sort(
        function (a, b) { return b - a });
    // console.log(median);
  
    let length = median.length;
    let halfTheLength=(length/2)
    if (length % 2 == 1) {
  
        // If length is odd
        console.log(median[(halfTheLength) - .5])
        return median[(halfTheLength) - .5]
  
    }
    else {
        console.log((median[halfTheLength] 
            + median[(halfTheLength) - 1]) / 2);
              
        return (median[halfTheLength] 
            + median[(halfTheLength) - 1]) / 2;
    }
}
  
arr1 = [12, 22, 6, 3]              //9
arr2 =[3,9,5,10,32,21,8,30,42]     //10
medianofArr(arr1);
medianofArr(arr2)
