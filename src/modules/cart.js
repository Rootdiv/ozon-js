const cart = () => {
  //const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  //const cartCloseModal = cartModal.querySelector('.cart-close');

  const openCart = () => {
    cartModal.style.display = 'flex';
  };

  const closeCart = () => {
    cartModal.removeAttribute('style');
  };

  document.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('#cart')) {
      openCart();
    } else if (target.closest('.cart-close')) {
      closeCart();
    } else if (target.matches('.cart') && !target.closest('.cart-body')) {
      closeCart();
    }
  });
  // cartBtn.addEventListener('click', openCart);
  // cartCloseModal.addEventListener('click', closeCart);
};

export default cart;
