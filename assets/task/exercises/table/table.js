const menus = [
  {
    type: "Main Course",
    item: "Mutton Briyani",
  },
  {
    type: "Main Course",
    item: "Chicken Briyani",
  },
  {
    type: "Main Course",
    item: "Braciole",
  },
  {
    type: "Main Course",
    item: "Primo",
  },
  {
    type: "Juice",
    item: "Apple juice",
  },
  {
    type: "Chats",
    item: "Panipuri",
  },
  {
    type: "Dessert",
    item: "Ice cream",
  },
  {
    type: "Dessert",
    item: "Brownies",
  },
  {
    type: "Dessert",
    item: "Cheesecake",
  },
  {
    type: "Juice",
    item: "Amla Juice",
  },
];

const generatedList = (menus) => {
  let tab = "<table>";
  tab += "<tr><th>Food Type</th><th>Food Item</th></tr>";
  menus.forEach(tableList);
  function tableList(list) {
    tab += `<tr><td>${list.type}</td><td>${list.item}</td></tr>`;
  }
  tab += "</table>";
  return tab;
};

document.getElementById("result").innerHTML = generatedList(menus);
