export const searchFilter = (goods, value) =>
  goods.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase()));

export const categoryFilter = (goods, value) => goods.filter(({ category }) => category === value);

export const priceFilter = (goods, min, max) =>
  goods.filter(goodsItem => {
    if (min === '' && max === '') {
      return goodsItem;
    } else if (min !== '' && max !== '') {
      return goodsItem.price > +min && goodsItem.price < +max;
    } else if (min !== '' && max === '') {
      return goodsItem.price > +min;
    } else if (min === '' && max !== '') {
      return goodsItem.price < +max;
    }
  });

export const hotSaleFilter = (goods, value) =>
  goods.filter(goodsItem => {
    if (value) {
      return goodsItem.sale === true;
    } else {
      return goodsItem;
    }
  });
