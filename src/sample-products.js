// I made some products here to mimic pulling in products from the DB.
// Mounting them using React works the same way, wether we pull them in from a server or from an object like below
const products = {
  product1: {
    name: 'Photo Calendar. 8.5 x 11',
    image: 'http://via.placeholder.com/72x72',
    quantity: 10,
    price: 1000,
    status: 'available'
  },

  product2: {
    name: 'Prints 4 x 6',
    image: 'http://via.placeholder.com/72x72',
    quantity: 25,
    price: 3200,
    status: 'available'
  },

  product3: {
    name: 'Mousepad',
    image: 'http://via.placeholder.com/72x72',
    quantity: 1,
    price: 1600,
    status: 'unavailable'
  },

  product4: {
    name: 'Mug, 4oz',
    image: 'http://via.placeholder.com/72x72',
    quantity: 32,
    price: 1129,
    status: 'available'
  },

  product5: {
    name: 'Metal Prints',
    image: 'http://via.placeholder.com/72x72',
    quantity: 14,
    price: 4234,
    status: 'available'
  },

  product6: {
    name: 'Business Card, Double Sided',
    image: 'http://via.placeholder.com/72x72',
    quantity: 9,
    price: 500,
    status: 'available'
  }
};

export default products;
