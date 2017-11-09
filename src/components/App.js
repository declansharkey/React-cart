import React from 'react';
import Title from './Title';
import DeliveryMethods from './DeliveryMethod';
import PaymentMethods from './PaymentMethod';
import OrderSummary from './OrderSummary';
import OrderTotal from './OrderTotal';
import CartModel from '../models/CartModel';
import { observer } from 'mobx-react';

@observer
class App extends React.Component {

    cartModel = new CartModel();

    render() {
        console.log(this.cartModel.products);
        this.cartModel.remove('Prints 4 x 6');
        return (
            <div className="cart-main">
                <Title page="Delivery &amp; Payment Methods" />
                <DeliveryMethods />
                <PaymentMethods />
                <OrderTotal />
                <OrderSummary
                    products={this.cartModel.products}
                    clear={this.cartModel.clear}
                    remove={this.cartModel.remove}
                />
            </div>
        )
    }
}

export default App;