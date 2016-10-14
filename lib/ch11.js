import { Heap } from '../util/heap.js';

// 11.1: Accept multiple sorted arrays and return a sorted array
// of all of their elements

exports.sortedArrSort = (...arrs) => {
  let x = 0;
};

// 11.4: Return the kth largest number in an aray
// Hint: you can use the Heap class imported above if needed

exports.kthLargest = (arr, k) => {
  let x = 0;
};

exports.almostSorted = (arr, k) => {
  const res = [];
  const heap = new Heap(); 
  
  let count = 0;

  while(count < k){
    heap.insert(arr[count++]);
  }


  for(let i = k; i < arr.length; i++){
    heap.insert(arr[i]);
    res.push(heap.remove());
  }

  while(heap.store.length > 0){
    res.push(heap.remove());
  }

  return res;
};
