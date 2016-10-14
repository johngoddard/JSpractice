const binarySearch = (arr, target) => {

};

// 12.1: Find the first occurrence of a target
// number in a sorted array. Once you've solved it with
// a naive solution, try optimizing.

export const firstOccurrence = (arr, target) => {

};

// 12.4: Accept a number, num, and return the largest number whose square
// is less than or equal to num. E.g. 16 and 17 would both return 4.
// Aim for log(n) time

export const closestRoot = (num, candidates = null) => {

};

// 12.8: Find the kth largest number in array. The optimal solution has
// O(1) space & linear time.

export const kthLargestInPlace = (arr, k, start = 0, len = arr.length) => {

};

export const searchCycleSorted = (arr) => {
 let left = 0; 
 let right = arr.length - 1;
 let last = arr.length - 1;
  
  while(left < right){
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] < arr[right]){
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
