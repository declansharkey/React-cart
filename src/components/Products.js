import React from 'react';
import {formatPrice} from '../helpers';

class Products extends React.Component {
    render() {
        const {details} = this.props;
        return (
            <div className="my-order-grid">
                <img src={details.image} alt={details.name}/>
                <h4>{details.name}</h4>
                <span className="item-price">{formatPrice(details.price)}</span>
                <span className="item-quantity">Quantity: {details.quantity}</span>
            </div>
        )
    }
}

export default Products;