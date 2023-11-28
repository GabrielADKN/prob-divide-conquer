export default function countZeroes(arr) {
    if (arr[0] === 0) return arr.length;

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === 1) {
            start = mid + 1;
        } else {
            if (mid === 0 || arr[mid - 1] !== 0) {
                return arr.length - mid;
            } else {
                end = mid - 1;
            }
        }
    }
    return 0;
}