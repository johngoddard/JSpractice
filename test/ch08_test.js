import { expect } from 'chai';
import { mergeLists, reverseSublist, areConverging } from '../lib/ch08.js';
import { Link, LinkedList } from '../util/list.js';

describe("Chapter 8 Question", function () {

  describe("8.1 #mergeLists", function () {

    let listA, listB, result;

    beforeEach(function() {
      listA = new LinkedList();
      listA.push(1);
      listA.push(3);
      listA.push(5);

      listB = new LinkedList();
      listB.push(2);
      listB.push(4);
      listB.push(6);

      result = mergeLists(listA, listB);
    });

    it("produces a list of the correct length", function () {
      expect(result.count).to.equal(6);
    });

    it("correctly merges two lists", function () {
      expect(result.tail.prev.value).to.equal(6);
      expect(result.head.next.value).to.equal(1);
    });
  });

  describe("8.2 #reverseSublist", function () {

    let list;

    beforeEach(function() {
      list = new LinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);
      list.push(6);
      list.push(7);
    });

   it("does not change the count of the list", function () {
     reverseSublist(list, 0, 1);
     expect(list.count).to.equal(7);
   });

   it("handles indices outside the list length", function () {
     const fn = () => {
       reverseSublist(list, 4, 10);
     };
     expect(fn).to.not.throw();
   });

   it("correctly reverses a sublist", function () {
     reverseSublist(list, 4, 6);
     expect(list.tail.value).to.equal(5);
     expect(list.tail.prev.value).to.equal(6);
     expect(list.tail.prev.prev.value).to.equal(7);
     expect(list.tail.prev.prev.prev.value).to.equal(4);
   });
  });
  
  describe("8.4 #areConverging", function(){
    let list;
    let list2;
    let list3;
    
    beforeEach(function() {
      list = new LinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);
      list.push(6);
      list.push(7);

      list2 = new LinkedList();
      list2.push(1);
      list2.push(2);
      list2.push(3);
  
      list3 = new LinkedList();
      list3.push(1);
      list3.push(2);
      
      list2.tail.prevLink.nextLink = list.head.next.nextLink;
    });
    it('returns true for linked lists that share nodes', function(){
      expect(areConverging(list, list2)).to.equal(true);
    });

    it('returns false for non-overlapping lists', function(){
      expect(areConverging(list, list3)).to.equal(false);
    });
  });
});
