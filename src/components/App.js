import React from 'react';
import Title from './Title';
import DeliveryMethods from './DeliveryMethod';
import PaymentMethods from './PaymentMethod';
import OrderSummary from './OrderSummary';
import OrderTotal from './OrderTotal';

class App extends React.Component {

    render() {
        return (
            <div className="cart-main">
                <Title page="Delivery &amp; Payment Methods" />
                <DeliveryMethods />
                <PaymentMethods />
                <OrderSummary loadSamples={this.loadSamples}/>
                <OrderTotal />
            </div>
        )
    }
}

export default App;