let title = "Hi there, welcome to shop admin panel, what do you want [C,R,U,D]";
let input = prompt(title);

const items = ["Jeans", "T - Shirt", "Socks"];

//create
if (input == "C" || input == "c") {
  let newItem = prompt("Enter new item");
  items.push(newItem);
  alert("Done");
}

//read
else if (input == "r" || input == "r") {
  console.log("The current items are:");
  for (let i = 1; i <= items.length; i++) {
    console.log(`${i}. ${items[i - 1]}`);
  }
}

//update
else if (cmd == "U" || cmd == "u") {
  let updatePst = prompt("Enter update position");
  let updateItem = prompt("Enter item name");
  shopItems[updatePst - 1] = updateItem;
  alert("Done");
}

//Delete
else if (cmd == "D" || cmd == "d") {
  let deletePst = prompt("Enter delete position");
  shopItems.splice(deletePst - 1, 1);
  alert("Done");
} else alert("This command is not supported");
