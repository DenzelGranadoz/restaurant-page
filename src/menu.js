import * as homepage from './homepage';
export { createMenu, renderMenu };

function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');
  menu.appendChild(menuItems);

  menuItems.appendChild(
    createMenuItem(
      'BakedPotato',
      'Cashew sour cream, tempeh bacon bits, olive oil, russet'
  ));
  
  menuItems.appendChild(
    createMenuItem(
      'CheeseFries',
      'Cashew sour cream, tempeh bacon bits, olive oil, russet'
  ));  

  menuItems.appendChild(
    createMenuItem(
      'CurlyFries',
      'Cashew sour cream, tempeh bacon bits, olive oil, russet'
  ));

  menuItems.appendChild(
    createMenuItem(
      'FrenchFries',
      'Cashew sour cream, tempeh bacon bits, olive oil, russet'
  ));

  menuItems.appendChild(
    createMenuItem(
      'MashedPotato',
      'Cashew sour cream, tempeh bacon bits, olive oil, russet'
  ));
  
  menuItems.appendChild(
    createMenuItem(
      'PotatoWedges',
      'Cashew sour cream, tempeh bacon bits, olive oil, russet'
  ));

  return menu;
}

function createMenuItem(name, ingredients) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const menuItemLabel = document.createElement('div');
  menuItemLabel.classList.add('item-label');

  const foodName = document.createElement('h2');
  foodName.textContent = name;

  const foodDescription = document.createElement('p');
  foodDescription.textContent = ingredients;

  const foodImage = document.createElement('img');
  foodImage.src = `./src/assets/${name.toLowerCase()}.jpeg`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(menuItemLabel);
  menuItemLabel.appendChild(foodName);
  menuItemLabel.appendChild(foodDescription);

  return menuItem;
}


function renderMenu() {
  const content = document.getElementById('content');
  content.appendChild(createMenu());
  content.appendChild(homepage.createFooter());
}