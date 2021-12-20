import renderCart from './renderCart';
import postData from './postData';

const cart = () => {
  //const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  //const cartCloseModal = cartModal.querySelector('.cart-close');
  const cartTotal = cartModal.querySelector('.cart-total > span');
  // const goodsWrapper = document.querySelector('.goods');
  // const cartWrapper = document.querySelector('.cart-wrapper');
  // const cartSendBtn = cartModal.querySelector('.cart-confirm');
  const counter = document.querySelector('.counter');
  const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  counter.textContent = cart.length;
  const sumCart = () => {
    cartTotal.textContent = cart.reduce((sum, goodItem) => sum + goodItem.price, 0);
  };

  const openCart = () => {
    cartModal.style.display = 'flex';
    renderCart(cart);
    sumCart();
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
    } else if (!target.closest('.cart-wrapper') && target.classList.contains('btn-primary') &&
        !target.classList.contains('cart-confirm')) {
      const key = +target.closest('.card').dataset.key;
      const goods = JSON.parse(localStorage.getItem('goods'));
      const goodItem = goods.find(item => item.id === key);
      cart.push(goodItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      counter.textContent = cart.length;
    } else if (target.closest('.cart-wrapper') && target.classList.contains('btn-primary')) {
      const key = +target.closest('.card').dataset.key;
      const index = cart.findIndex(item => item.id === key);
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart(cart);
      sumCart();
    } else if (target.classList.contains('cart-confirm')) {
      postData(cart).then(() => {
        localStorage.removeItem('cart');
        renderCart([]);
        cartTotal.textContent = 0;
        counter.textContent = 0;
      });
    }
  });
  // cartBtn.addEventListener('click', openCart);
  // cartCloseModal.addEventListener('click', closeCart);
  // goodsWrapper.addEventListener('click', event => {
  //   const target = event.target;
  //   if (target.classList.contains('btn-primary')) {
  //     const card = target.closest('.card');
  //     const key = +card.dataset.key;
  //     const goods = JSON.parse(localStorage.getItem('goods'));
  //     const goodItem = goods.find(item => item.id === key);
  //     console.log('goodItem: ', goodItem);
  //     cart.push(goodItem);
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //   }
  // });
  // cartWrapper.addEventListener('click', event => {
  //   const target = event.target;
  //   if (target.classList.contains('btn-primary')) {
  //     const card = target.closest('.card');
  //     const key = +card.dataset.key;
  //     const index = cart.findIndex(item => item.id === key);
  //     cart.splice(index, 1);
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //     renderCart(cart);
  //     sumCart();
  //   }
  // });
  // cartSendBtn.addEventListener('click', () => {
  //   postData(cart).then(() => {
  //     localStorage.removeItem('cart');
  //     renderCart([]);
  //     cartTotal.textContent = 0;
  //   });
  // });
};

export default cart;
