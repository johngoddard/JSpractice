import { TreeNode } from '../util/tree.js';
import { expect } from 'chai';
import { 
  checkBalance,
  leastCommonAncestor, 
  isSymmetric,
  constructTree 
  } from '../lib/ch10.js';

describe("Chapter 10 Questions", function () {

  describe("10.1 #checkBalance", function () {

    it("returns false for an unbalanced tree", function () {
      let a = new TreeNode(3);
      let b = new TreeNode(1);
      let c = new TreeNode(4);

      a.right = b;
      b.right = c;

      let result = checkBalance(a);
      expect(result).to.be(false);
    });

    it("returns true for a balanced tree", function () {
      let a = new TreeNode(314);
      let b = new TreeNode(6);
      let c = new TreeNode(6);
      let d = new TreeNode(5);
      let e = new TreeNode(7);
      let f = new TreeNode(8);

      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      c.left = f;

      let result = checkBalance(a);
      expect(result).to.be(true);
    });

  });

  describe("10.4 #leastCommonAncestor", function () {

    let a = new TreeNode(10);
    let b = new TreeNode(6);
    let c = new TreeNode(15);
    let d = new TreeNode(5);
    let e = new TreeNode(7);
    let f = new TreeNode(8);

    a.left = b;
    b.parent = a;
    a.right = c;
    c.parent = a;
    b.left = d;
    d.parent = b;
    b.right = e;
    e.parent = b;
    c.left = f;
    f.parent = c;

    it("returns the least common ancestor", function () {
      let result = leastCommonAncestor(d, e);
      expect(result.val).to.equal(6);
    });

    it("returns the lca when the lca is one of the nodes", function () {
      let result = leastCommonAncestor(a, b);
      expect(result.val).to.equal(10);
    });

  });

  describe("10.2 #isSymmetric", function(){
    let a = new TreeNode(10);
    let b = new TreeNode(6);
    let c = new TreeNode(6);
    let d = new TreeNode(5);
    let e = new TreeNode(7);
    let f = new TreeNode(7);
    let g = new TreeNode(5);
    let h = new TreeNode(9);
    let i = new TreeNode(9);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;
    d.left = h;
    g.right = i;

    it("returns true for a balanced tree", function(){
      expect(isSymmetric(a)).to.be.true;
    });
  
    it("returns false for an ubalanced tree", function(){
      expect(isSymmetric(b)).to.be.false;
    });

    
    it("returns false for a structurally symmetric tree with differnt values", function(){
      let j = new TreeNode(10);
      g.right = j;
      expect(isSymmetric(a)).to.be.false;
    });

  });

  describe("10.12 #constructTree", function(){
    it("correctly constructs a tree", function(){
      let a = constructTree([4,2,1,3], [1,2,4,3]);
      expect(a.val).to.equal(1);
      expect(a.left.val).to.equal(2);
      expect(a.right.val).to.equal(3);
      expect(a.left.left.val).to.equal(4);
      });


    it("correctly constructs case 2", function(){
      let a = constructTree([6,2,7,1,4,3,5], [1,2,6,7,3,4,5]);
      expect(a.val).to.equal(1);
      expect(a.left.val).to.equal(2);
      expect(a.left.left.val).to.equal(6);
      expect(a.left.right.val).to.equal(7);
      expect(a.right.val).to.equal(3);
      expect(a.right.left.val).to.equal(4);
      expect(a.right.right.val).to.equal(5);
    });
  });

});

