const mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);
mainDiv.className = "m-8";

const heading = document.createElement("h1");
mainDiv.appendChild(heading);
heading.className = "font-semibold text-5xl font-mono";
heading.innerText = "Food menu 🍜";

const foodList = document.createElement("ol");
foodList.className = "list-decimal flex gap-2 flex-col text-xl mt-4";
mainDiv.appendChild(foodList);

const li1 = document.createElement("li");
foodList.appendChild(li1);
li1.innerText = "Vegetarian Foods";

const li2 = document.createElement("li");
foodList.appendChild(li2);
li2.innerText = "Non-Vegetarian Foods";

const li3 = document.createElement("li");
foodList.appendChild(li3);
li3.innerText = "Eggetarian Foods";

const li4 = document.createElement("li");
foodList.appendChild(li4);
li4.innerText = "Diet-Foods";

const li5 = document.createElement("li");
foodList.appendChild(li5);
li5.innerText = "Juices";

const li6 = document.createElement("li");
foodList.appendChild(li6);
li6.innerText = "Chats";

const boxDiv = document.createElement("div");
mainDiv.appendChild(boxDiv);
boxDiv.className = "flex gap-4 mt-4";

const line = document.createElement("p");
boxDiv.appendChild(line);
line.innerText = "Enter a number";
line.className = "text-lg";

const box = document.createElement("input");
box.type = "number";
box.id = "number";
box.className = "border-2 p-2 ring-2 border-slate-400 outline-none";
boxDiv.appendChild(box);

const button = document.createElement("button");
button.className = "p-2 bg-slate-700 text-white text-lg hover:ring-2 rounded";
button.innerText = "Submit";
button.onclick = foodLists;
boxDiv.appendChild(button);

const listDiv = document.createElement("div");
listDiv.id = "listDiv";
mainDiv.appendChild(listDiv);

function foodLists() {
  var number = parseInt(document.getElementById("number").value);
  var foodArray = [];
  var results = document.getElementById("listDiv");

  if (number === 1) {
    foodArray = [
      "Chappathi",
      "Bismillah bath",
      "Curd Rice",
      "Veg Briyani",
      "Mushroom Rice",
    ];
  } else if (number === 2) {
    foodArray = [
      "Chicken Lolipop",
      "Crab 65",
      "Mutton Fry",
      "Mutton Briyani",
      "Chicken Biryani",
    ];
  } else if (number === 3) {
    foodArray = ["Boiled Egg", "Omelette", "Egg Roll", "Egg Maggi"];
  } else if (number === 4) {
    foodArray = [
      "Corn flakes",
      "Oats",
      "Cucumber Salad",
      "Veg salad",
      "Fruit salad",
    ];
  } else if (number === 5) {
    foodArray = [
      "Orange juice",
      "Carrot juice",
      "Smoothie",
      "Apple juice",
      "Berry Juice",
    ];
  } else if (number === 6) {
    foodArray = ["Panipuri", "Sweet Corn", "JamBun", "Vada pav", "Aloo tikki"];
  } else {
    results.innerText = "Invalid number !!!";
    return;
  }
  generatelist(foodArray, results);
}

function generatelist(foodArray, results) {
  var listOfFood =
    "<ul class='list-disc flex gap-2 flex-col justify-around mt-3'>";

  foodArray.forEach(function (food) {
    listOfFood += "<li class='text-slate-950 text-xl'>" + food + "</li>";
  });
  listOfFood += "</ul>";
  results.innerHTML = listOfFood;
}
