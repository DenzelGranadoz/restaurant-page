import * as homepage from './homepage';
export { createContact, renderContact };

function createContact() {
  const contactBody = document.createElement('div');
  contactBody.classList.add('contact-body');

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-div');
  contactBody.appendChild(contactDiv);

  const contactNum = document.createElement('p');
  contactNum.textContent = 'Contact us at: +63 983 328 3932';
  contactNum.classList.add('contact-info');
  contactDiv.appendChild(contactNum);

  const contactAdd = document.createElement('p');
  contactAdd.textContent = 'Address: Filinvest Ave, Alabang, Muntinlupa, 1780 Metro Manila, Philippines';
  contactAdd.classList.add('contact-info');
  contactDiv.appendChild(contactAdd);

  const contactMap = document.createElement('img');
  contactMap.src = '../src/assets/location.png';
  contactMap.alt = 'Address Map';
  contactMap.classList.add('contact-map');
  contactDiv.appendChild(contactMap);


  return contactBody;
}

function renderContact() {
  const content = document.getElementById('content');
  content.appendChild(homepage.createNavbar());
  content.appendChild(createContact());
  content.appendChild(homepage.createFooter());
}

