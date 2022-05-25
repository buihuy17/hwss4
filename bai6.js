const input6 = prompt("Enter number sequence, seperated by commas (,)");

let day6 = input6.split(",");
let min;

day6 = day6.map(function (result) {
  let r = Number(result);
  if (min == undefined || r < min) min = r;
  return r;
});

alert(`The smallest number is: ${min}`);
