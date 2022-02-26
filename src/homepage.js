import './styles/style.css';

export { homepage };


function createNavbar() {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const ulist = document.createElement('ul');
  ulist.classList.add('menu-items');
  nav.appendChild(ulist);

  const homeItem = document.createElement('li');
  homeItem.classList.add('item');
  homeItem.textContent = 'Home';
  ulist.appendChild(homeItem);

  const menuItem = document.createElement('li');
  menuItem.classList.add('item');
  menuItem.textContent = 'Menu';
  ulist.appendChild(menuItem);

  const contactItem = document.createElement('li');
  contactItem.classList.add('item');
  contactItem.textContent = 'Contact Us';
  ulist.appendChild(contactItem);

  return nav;
}

function createHomepageBody() {
  const homepageBody = document.createElement('div');
  homepageBody.classList.add('homepage-body');
  
  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = 'Potatopia';
  homepageBody.appendChild(restaurantName);

  const restaurantQuote = document.createElement('h3');
  restaurantQuote.classList.add('restaurant-quote');
  restaurantQuote.textContent = 'World\'s Best Potato Goodness';
  homepageBody.appendChild(restaurantQuote);

  const openMenuBtn = document.createElement('button');
  openMenuBtn.classList.add('open-menu');
  openMenuBtn.textContent = 'Open Menu';
  homepageBody.appendChild(openMenuBtn);

  const openingHours = document.createElement('h2');
  openingHours.classList.add('opening-hours');
  openingHours.textContent = 'Order Online or Dine with us';
  homepageBody.appendChild(openingHours);

  return homepageBody;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerContent = document.createElement('a');
  footerContent.classList.add('footer-content');
  footerContent.textContent = 'Made by: Denzel Granadoz';
  footerContent.href = 'https://github.com/DenzelGranadoz';
  footerContent.target = '_blank';
  footer.appendChild(footerContent);

  return footer;
}

function homepage() {
  const content = document.getElementById('content');
  content.appendChild(createNavbar());
  content.appendChild(createHomepageBody());
  content.appendChild(createFooter());
}

//  import Icon from './icon.png';

//  function component() {
//    const element = document.createElement('div');

//    // Lodash, now imported by this script
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//    element.classList.add('hello');

//   // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);