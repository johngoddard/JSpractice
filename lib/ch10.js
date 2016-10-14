import { TreeNode } from '../util/tree.js';

// 10.1: accept the root node of a tree and determine if the tree
// is a balanced binary tree

export const checkBalance = root => {

};

// 10.4: Given 2 nodes in a tree, find their closest ancestor
// (nodes have parent pointers)

export const leastCommonAncestor = (node1, node2) => {

};


export const isSymmetric = root => {
  if(!root.left && !root.right){
    return true;
  } else if(root.left && root.right){
    return checkPair(root.left, root.right);
  } else {
    return false;
  }
};

export const checkPair = (node1, node2) => {
  if(!node1 && !node2){
    return true;
  }
  
  let children1 = [node1.left ? 1 : 0, node1.right ? 1 : 0]; 
  let children2 = [node2.right ? 1 : 0, node2.left ? 1 : 0];

  let match = children1.every((el, idx) => el === children2[idx]);

  if(match && node1.val === node2.val){
    return checkPair(node1.left, node2.right) && 
      checkPair(node1.right, node2.left);
  } else {
    return false;
  }
};


function indexMap(arr){
  let map = {}; 
  arr.forEach((el, idx) => {
    map[el] = idx;
  });
  return map;
}

export const constructTree = (inOrder, preOrder) => {
  let inOrderIdx = indexMap(inOrder);
  return cTreeHelper(inOrderIdx, preOrder);
};

function cTreeHelper(inOrderIdx, preOrder) {
  if(preOrder.length === 0){
    return null;
  }

  let root = new TreeNode(preOrder[0]); 
  let leftPreOrder = [];
  let rightPreOrder = [];
  
  preOrder.forEach(el => {
    if(inOrderIdx[el] < inOrderIdx[root.val]){
      leftPreOrder.push(el);
    } else if (inOrderIdx[el] > inOrderIdx[root.val]){
      rightPreOrder.push(el);
    }
  });

  root.left = cTreeHelper(inOrderIdx, leftPreOrder);
  root.right = cTreeHelper(inOrderIdx, rightPreOrder);

  return root;
};
