function exercise(x) {
  return function () {
    //Saying return whats below this line
    return `Today's exercise: ${x}`; // stating whatever is in parenthesis will take place of x
  };
}

let jump = exercise("Jumping");
var run = exercise("running");
var swim = exercise("swimming");
console.log(run()); // prints "Today's exercise: running"
console.log(swim()); // prints "Today's exercise: swimming"
console.log(jump());
