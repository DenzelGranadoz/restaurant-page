import './styles/style.css';

console.log('heloooss');

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = 'heloooo'
   element.classList.add('hello');

   return element;
 }

 document.body.appendChild(component());

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