import React from 'react';

class PaymentMethods extends React.Component {
    render() {
        return (
            <section className="pay-method">
                <div className="payment-method">
                    <h3>Payment Method</h3>
                    <input type="radio" name="payment" id="payclub" value="1" />
                    <label htmlFor="payclub">Pay at club</label>
                    <input type="radio" name="payment" id="payonline" value="1" />
                    <label htmlFor="payonline">Pay Online</label>
                </div>
            </section>
        )
    }
}

export default PaymentMethods;