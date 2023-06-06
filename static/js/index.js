const menu_items = [
  {
    id: 1,
    title: "Delicious Pancakes",
    price: 15.99,
    category: "breakfast",
    img: "../static/images/pan_cake.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 2,
    title: "Godzilla Milkshake",
    price: 15.09,
    category: "shakes",
    img: "../static/images/milkshake.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 3,
    title: "burger",
    price: 17.88,
    category: "lunch",
    img: "../static/images/burger.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 4,
    title: "Healthy Pasta",
    price: 12.43,
    category: "lunch",
    img: "../static/images/pasta.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 5,
    title: "Cold coffee",
    price: 14,
    category: "shakes",
    img: "../static/images/cold_coffee.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 6,
    title: "Oreo delight",
    price: 12.33,
    category: "shakes",
    img: "../static/images/oreo_drink.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 7,
    title: "Asian spice",
    price: 18.99,
    category: "lunch",
    img: "../static/images/asian_delight.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 8,
    title: "chocolate bomb",
    price: 16,
    category: "breakfast",
    img: "../static/images/chocolate_bomb.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 9,
    title: "Coffee & croissant",
    price: 11.34,
    category: "breakfast",
    img: "../static/images/coffee_croissant2.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 10,
    title: "egg attack",
    price: 20.22,
    category: "breakfast",
    img: "../static/images/egg_attack.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 11,
    title: "Fruit and nuts",
    price: 14.22,
    category: "shakes",
    img: "../static/images/fruit_with_nuts.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 12,
    title: "Tast wontons",
    price: 15.99,
    category: "lunch",
    img: "../static/images/tasty_wontons.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 13,
    title: "tangy orange",
    price: 10.38,
    category: "shakes",
    img: "../static/images/tangy_orange.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 14,
    title: "sweet waffles",
    price: 13.22,
    category: "breakfast",
    img: "../static/images/waffles.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 15,
    title: "refreshing watermelon",
    price: 11.99,
    category: "shakes",
    img: "../static/images/refreshing_watermelon.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
  {
    id: 16,
    title: "Steak",
    price: 35.99,
    category: "dinner",
    img: "../static/images/steak.jpg",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe ad quibusdam dolore expedita velit.",
  },
];

// loadItems
const menu = document.querySelector(".menu");

const btnContainer = document.querySelector(".btn-container");

// =====here we are using a different method =====

// const categories = menu_items.map((item) => {
//   return item.category;
// });

// let UniqueCategory = ["all"];

// for (category of categories) {
//   if (UniqueCategory.includes(category) == false) {
//     UniqueCategory.push(category);
//   } else {
//     // pass
//   }
// }

// =====here we are using a different method =====

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu_items);
  const UniqueCategory = menu_items.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const Categorybtns = UniqueCategory.map((category) => {
    return `<button data-id=${category}>${category}</button>`;
  }).join("");
  btnContainer.innerHTML = Categorybtns;
  const filterBtns = document.querySelectorAll("button");

  // filter btns

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu_items.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu_items);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
});

// unique category

// =======here is another method========

// function dynamicButtons(categories) {
//   let displayButtons = categories.map((category) => {
//     return `<button data-id=${category}>${category}</button>`;
//   });
//   displayButtons = displayButtons.join("");
//   btnContainer.innerHTML = displayButtons;
// }

// =======here is another method========

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu_item">
          <img src=${item.img} alt=${item.title}/>
          <div class="description">
            <div class="title-rate">
              <h5>${item.title}</h5>
              <h6>$${item.price}</h6>
            </div>
            <p>
              ${item.des}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  menu.innerHTML = displayMenu;
}
