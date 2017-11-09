import React from 'react';
import Products from '../components/Products'
import { observer } from 'mobx-react';

@observer
class OrderSummary extends React.Component {
    // passing cartModel from parent

    // constructor() {
    //     super();

    //     //what I'm doing here is loading my products list, into the state
    //     // this.state={
    //     //     products:sampleProducts
    //     // };

    // }
    render() {

        return (
            <section className="order-summary">
                <div class="order-summary-title">
                    <h3>Order Summary</h3>
                    <span class="change-order">Change</span>
                </div>
                <div className="my-orders-wrapper">
                    {
                        Object
                            .keys(this.props.products)
                            .map(key => <Products
                                key={key}
                                details={this.props.products[key]}
                            />)
                    }
                </div>
                <button onClick={this.props.clear}> clear </button>
            </section>
        )
    }
}

export default OrderSummary;