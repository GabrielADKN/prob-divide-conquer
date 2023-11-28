export default function sortedFrequency(arr, num) {
    const firstIndex = findIndex(arr, num, true);

    // If the element is not present, return -1
    if (firstIndex === -1) {
        return -1;
    }

    const lastIndex = findIndex(arr, num, false);

    // Return the count of occurrences
    return lastIndex - firstIndex + 1;
}

// Helper function to find the index of the first or last occurrence
function findIndex(arr, num, isFirst) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            result = mid;

            if (isFirst) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}