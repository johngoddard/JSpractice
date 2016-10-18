
// write a recursive version of fibs
let fibs = (n) => {
  if(n === 1){
    return 0;
  } else if (n === 2){
    return 1;
  } else {
    return fibs(n - 2) + fibs(n - 1);
  }
};

//write a memoized version of fibs
function fibs2(n, solutions = {1: 0, 2: 1}){
  if(solutions[n] || n === 1){
    return solutions[n];
  }

  let secondPrev = solutions[n - 2] ? solutions[n - 2] : fibs2(n - 2, solutions);
  let prev = solutions[n - 1] ? solutions[n - 1] : fibs2(n - 1, solutions);

  solutions[n] = secondPrev + prev;
  return secondPrev + prev;
}

// write a function that accepts a function and memoizes it
const memoizer = (callback, context = null) => {
  let solutions = {};

  const memoizedFunc = (...args) => {
    if(solutions.hasOwnProperty(args.toString())){
      return solutions[args.toString()];
    }

    solutions[args.toString()] = callback.apply(context, args);
    return solutions[args.toString()];
  };

  return memoizedFunc;
};

fibs = memoizer(fibs, null);
console.log(fibs(50));

