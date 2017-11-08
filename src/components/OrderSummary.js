import React from 'react';
import Products from '../components/Products'

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
                <div className="my-orders-wrapper">
                {
                    Object
                        .keys(this.props.products)
                        .map(key => <Products key={key} details={this.props.products[key]}/> )
                }
                </div>
            </section>
        )
    }
}

export default OrderSummary;