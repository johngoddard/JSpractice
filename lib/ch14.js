
// 14.1: Find the intersection of 2 sorted arrays

export const intersection = (arr1, arr2) => {

};

// 14.2: Merge sorted arrays. Assume that the first array is big enough
// to fit all elements of the first. Don't create a new array

export const mergeSorted = (arr1, arr2) => {

};

// 14.4: Take in a set of events (format [start, end]), and return the max number of 
// overlapping events. 

export const concurrentEvents = events => {
  let endPoints = [];
  events.forEach(event => {
    endPoints.push({time: event[0], start: true});
    endPoints.push({time: event[1], start: false});
  });

  endPoints.sort((a, b) => {
    return a['time'] - b['time'];
  });

  let max = 0;
  let currOverlapping = 0;
  
  for(let i = 0; i < 24; i++){
 
    while(endPoints.length > 0 && endPoints[0]['time'] === i){
      let first = endPoints.shift();
      if(first['start']){
        currOverlapping += 1;
      } else{
        currOverlapping -= 1;
      }

      if(currOverlapping > max){
        max = currOverlapping;
      }
    }
  }

  return max;
};
