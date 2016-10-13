import { Link, LinkedList } from '../util/list.js';

// 8.1: Merge two sorted link lists and return the result

export const mergeLists = (listA, listB) => {

};

// 8.2 reverse a subList in a linked list, and return the mutated list

export const reverseSublist = (list, startIdx, endIdx) => {

};

// 8.4 takes in 2 lists and returns true if they converge

export const areConverging = (list1, list2) => {
  const lengthA = getLength(list1);
  const lengthB = getLength(list2); 
  const diff = Math.abs(lengthA - lengthB);

  const longList = (lengthA > lengthB) ? list1 : list2;
  const shortList = (lengthA > lengthB) ? list2 : list1;
  
  let count = 0; 
  let longListNode = longList.head.nextLink;

  while(count < diff){
    longListNode = longListNode.nextLink;
  }

  let shortListNode = shortList.head.next;

  while(shortListNode && longListNode) {
    if(shortListNode === longListNode) {
      return true;
    } else {
      shortListNode = shortListNode.nextLink;
      longListNode = longListNode.nextLink;
    }
  }

  return false;
};

const getLength = list => {
  let length = 0; 
  let currNode = list.head.nextLink;

  while(currNode !== list.tail){
    length++;
    currNode = currNode.nextLink;
  }

  return currNode;
};

const deleteKthToLastNode = (list, k) => {
  let trailingNode = list.head.nextLink;
  let leadingNode = list.head.nextLink;

  for(let i = 0; i < k - 1; i++){
    leadingNode = leadingNode.nextLink;
    
    if(!leadingNode){
      throw 'K must be smaller than the number of nodes';
    }
  }

  while(leadingNode){
    leadingNode = leadingNode.nextLink;
    if(!leadingNode){
      return trailingNode;
    }

    trailingNode = trailingNode.nextLink;
  }
};
