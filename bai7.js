const arr7 = [3, 5, 2, 5, 66, 43];
let title7 = "Enter a number";
let input7 = Number(prompt(title7));
let index = arr7.findIndex(function (result7) {
  return result7 == input7;
});

if (index >= 0) alert(`${input7} is FOUND in my array at index ${index}`);
else alert(`${input7} is NOT FOUND in my array`);
