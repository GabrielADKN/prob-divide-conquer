export default function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // If the array is already sorted, no rotation has occurred
        if (arr[left] <= arr[right]) {
            return left;
        }

        let mid = Math.floor((left + right) / 2);
        let next = (mid + 1) % arr.length;
        let prev = (mid - 1 + arr.length) % arr.length;

        // Check if the mid element is the minimum element
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        }

        // Decide which half to search
        if (arr[mid] <= arr[right]) {
            right = mid - 1;
        } else if (arr[mid] >= arr[left]) {
            left = mid + 1;
        }
    }

    return -1;
}