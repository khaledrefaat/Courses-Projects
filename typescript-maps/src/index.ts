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
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const map = new CustomMap();
map.addMarker(user);
map.addMarker(company);
