import menuData from '../menu.json';
import makeMenuMarkup from '../templates/menu.hbs';
const container = document.querySelector('.js-menu');

const menuMarkup = makeMenuMarkup(menuData);
container.insertAdjacentHTML('afterbegin', menuMarkup);
