const postData = cart => fetch('https://ozon-js-default-rtdb.firebaseio.com/orders.json', {
  method: 'POST',
  body: JSON.stringify(cart),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json());

export default postData;
