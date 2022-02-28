export { createNavbar, createHomepageBody, createFooter, renderHomepage };

function createNavbar() {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const ulist = document.createElement('ul');
  ulist.classList.add('navbar-items');
  nav.appendChild(ulist);

  const homeItem = document.createElement('li');
  homeItem.classList.add('home-nav');
  homeItem.textContent = 'Home';
  ulist.appendChild(homeItem);

  const menuItem = document.createElement('li');
  menuItem.classList.add('menu-nav');
  menuItem.textContent = 'Menu';
  ulist.appendChild(menuItem);

  const contactItem = document.createElement('li');
  contactItem.classList.add('contact-nav');
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

function renderHomepage() {
  const content = document.getElementById('content');
  content.appendChild(createNavbar());
  content.appendChild(createHomepageBody());
  content.appendChild(createFooter());
}