import React from 'react';

class OrderTotalSum extends React.Component {
    render() {
        return (
            <div className="order-total">
                <p className="promo-code">+ Add promo code
                    <span className="brackets"> (Online Payment Only)</span>
                </p>
                <p className="subtotal-name">Subtotal</p>
                <p className="subtotal-value">$22.00</p>
                <p className="sales-tax-text">Sales Tax</p>
                <p className="sales-tax-value">$3.00</p>
                <div className="total-section">
                    <p className="grand-total">Total</p>
                    <p className="grand-total-value">$25.00</p>
                </div>
            </div>

        )
    }
}

export default OrderTotalSum;