const renderCart = goods => {
  const cartWrapper = document.querySelector('.cart-wrapper');
  cartWrapper.textContent = '';
  if (goods.length === 0) {
    cartWrapper.insertAdjacentHTML('beforeend', `
      <div id="cart-empty">
        Ваша корзина пока пуста
      </div>
    `);
  }
  goods.forEach(({ id, title, price, sale, img }) => {
    cartWrapper.insertAdjacentHTML('beforeend', `
      <div class="card" data-key="${id}">
        ${sale ? `<div class="card-sale">&#128293;Hot Sale&#128293;</div>` : ''}
        <div class="card-img-wrapper">
          <span class="card-img-top"
            style="background-image: url('${img}')"></span>
        </div>
        <div class="card-body justify-content-between">
          <div class="card-price">${price} &#8381;</div>
          <h5 class="card-title">${title}</h5>
          <button class="btn btn-primary">Удалить</button>
        </div>
      </div>
    `);
  });
};

export default renderCart;
