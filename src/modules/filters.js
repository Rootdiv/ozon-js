export const searchFilter = (goods, value) =>
  goods.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase()));

export const categoryFilter = (goods, value) => goods.filter(({ category }) => category === value);

export const priceFilter = (goods, value) =>
  goods.filter(({ price }) => String(price).includes(value));
