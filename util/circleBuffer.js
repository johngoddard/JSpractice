class DynamicQueue {
  constructor(capacity){
    this.capacity = capacity;
    this.store = new Array(capacity); 
    this.count = 0;
    this.start = 0;
  }
  
  enqueue(el){
    if(this.count === this.capacity){
      this.resize();
    } 
    
    this.count += 1;
    const lastIdx = (this.start + this.count - 1) % this.capacity;
    this.store[lastIdx] = el;
  }

  dequeue(){
    let toReturn = this.store[this.start];
    this.store[this.start] = null;
    this.start++;
    this.count--;
    return toReturn;
  } 

  resize(){
    let newStore = new Array(this.capacity * 2);
    for(let i = 0; i < this.capacity; i++){
      newStore.push(this.store[(this.start + i) % this.capacity]);
    }

    this.capacity *= 2;
    this.start = 0;
    this.store = newStore;
  }
}

module.exports = DynamicQueue;
