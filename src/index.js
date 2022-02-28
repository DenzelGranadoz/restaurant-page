import './styles/style.css';
import * as homepage from './homepage';
import * as menu from './menu';
import * as contact from './contact';

//use an iife for whole thing? then toggle renders based on button clicked
window.addEventListener('DOMContentLoaded', homepage.renderHomepage());
// content.removeChild(content.children[1]);
resetDOMContent(); 

menu.renderMenu();

resetDOMContent(); 

contact.renderContact();

function resetDOMContent() {
  while (content.firstChild) {
    content.firstChild.remove();
  }
}


// content.appendChild(homepage.createHomepageBody());
// content.appendChild(homepage.createFooter());

