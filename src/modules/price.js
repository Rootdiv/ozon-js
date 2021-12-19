import getData from './getData';
import renderGoods from './renderGoods';
import { priceFilter } from './filters';

const price = () => {
  const priceInput = document.getElementById('min');
  priceInput.addEventListener('input', event => {
    const value = event.target.value;
    getData().then(data => renderGoods(priceFilter(data, value)));
  });
};

export default price;
