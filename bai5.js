const input = prompt("Enter number sequence, seperated by commas");
let day = input.split(",");
day = day.map(function (value) {
  return Number(value);
});
let sum = day.reduce(function (truoc, sau) {
  return truoc + sau;
}, 0);
alert(`The sum of them is : ${sum}`);
