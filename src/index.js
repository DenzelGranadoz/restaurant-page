import './styles/style.css';
import * as homepage from './homepage';
import * as menupage from './menu';
import * as contactpage from './contact';

window.addEventListener('DOMContentLoaded', homepage.renderHomepage());

const home = document.querySelector('.home-nav');
home.addEventListener('click', homeNav);

function homeNav() {
  console.log('home');
  location.reload();
  homepage.renderHomepage();
}

const menu = document.querySelector('.menu-nav');
menu.addEventListener('click', menuNav);

const openMenu = document.querySelector('.open-menu');
openMenu.addEventListener('click', menuNav);

function menuNav() {
  console.log('menu');
  resetDOMContent();
  menupage.renderMenu();
}

const contact = document.querySelector('.contact-nav');
contact.addEventListener('click', contactNav);

function contactNav() {
  console.log('contact');
  resetDOMContent();
  contactpage.renderContact();
}

function resetDOMContent() {
  while (content.lastChild && content.childElementCount != 1) {
    content.lastChild.remove();
  }
}