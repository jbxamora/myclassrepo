// The array must be sorted for binary search to work.

function binarySearch(array, element) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === element) {
      // We must return teh index once we have found the element being searched for.
      return mid;
    } else if (array[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  // If we do not find the element we need to return -1.
  return -1;
}

module.exports = binarySearch;