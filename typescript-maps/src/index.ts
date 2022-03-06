(function () {
  // changing the color of the h1 to random color just for fun ^_^
  const h1 = document.querySelector('h1');
  h1.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    h1.style.backgroundColor = randomColor;
  });
})();

import { User } from './User';
import { Company } from './Company';

const user1 = new User();
const company1 = new Company();

console.log(user1);
console.log(company1);
