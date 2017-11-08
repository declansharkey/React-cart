import React from 'react';
import Title from './Title';
import DeliveryMethods from './DeliveryMethod';
import PaymentMethods from './PaymentMethod';
import OrderSummary from './OrderSummary';
import OrderTotal from './OrderTotal';
import CartModel from '../models/CartModel';
class App extends React.Component {

    cartModel = new CartModel();
 

    render() {
        console.log(this.cartModel.products);
        return (
            <div className="cart-main">
                <Title page="Delivery &amp; Payment Methods" />
                <DeliveryMethods />
                <PaymentMethods />
                <OrderSummary products={this.cartModel.products} />
                <OrderTotal />
            </div>
        )
    }
}

export default App;