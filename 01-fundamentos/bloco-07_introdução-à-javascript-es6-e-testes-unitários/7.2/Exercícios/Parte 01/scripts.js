const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const deliveryInfo = order.order.delivery;
const pizzaOrder = order.order.pizza;
const drinkOrder = order.order.drinks;
const pizzasFlavors = Object.keys(pizzaOrder);
const adrresInfo = order.address;
const paymentInfo = order.payment;

const customerInfo = (order) => {
    return `Olá ${deliveryInfo.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${adrresInfo.street}, Nº: ${adrresInfo.number}, AP: ${adrresInfo.apartment}`
}

console.log(customerInfo(order));

const orderModifier = (order) => {
    order.name = 'Luiz Silva';
    pizzaOrder.marguerita = 20;
    pizzaOrder.pepperoni = 15;
    paymentInfo.total = pizzaOrder.marguerita + pizzaOrder.pepperoni + drinkOrder.coke.price + deliveryInfo.price;

    return `Olá ${order.name}, o total do seu pedido de ${pizzasFlavors[0]}, ${pizzasFlavors[1]} e ${drinkOrder.coke.type} é R$${paymentInfo.total},00`
}

console.log(orderModifier(order));