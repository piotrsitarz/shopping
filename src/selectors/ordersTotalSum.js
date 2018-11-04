export default (orders) => {
  return orders.reduce(function(sum, order) {
      return sum+=parseInt(order.amount)*order.price;
  }, 0);
};
