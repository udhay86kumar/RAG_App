var globalVar = 26;
function variables() {
  var globalVar = 2;
  var a = 1;
  let b = 2;
  console.log("before a: " + a);
  console.log("before b: " + b);
  if (a === 1) {
    var a = 2;
    let b = 3;
    var globalVar = 27;
    console.log("inside a: " + a);
    console.log("inside b: " + b);
  }
  console.log("after a: " + a);
  console.log("after b: " + b);
  console.log("global var: " + globalVar);
}
