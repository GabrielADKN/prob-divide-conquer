function countZeroes(arr) {
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start+end)/2);
    while(start <= end) {
        if(arr[mid] === 0) {
            if(arr[mid-1] === 0) {
                end = mid-1;
            } else {
                return arr.length-mid;
            }
        } else {
            start = mid+1;
        }
        mid = Math.floor((start+end)/2);
    }
}

module.exports = countZeroes