import React from 'react';

class DeliveryMethods extends React.Component {
    render() {
        return (
            <section className="section1">
                <div className="delivery-method">
                    <h3>Delivery Method</h3>
                    <input type="radio" name="method" id="pickupat" value="1" />
                    <label htmlFor="pickupat">Pick up at club</label>
                    <input type="radio" name="method" id="shipto" value="1" />
                    <label htmlFor="shipto">Ship to you</label>
                </div>
                <div className="club-select">
                    <h3>Select club for pick up</h3>
                    <label htmlFor="zipcode">Search by:</label>
                    <input type="text" name="method" id="zipcode" placeholder="Zip code or city" />
                    <button className="btn btn-secondary">Find</button>
                </div>

                <div className="clubs-list hidden">
                    <h3 className="clubs-list-title">Clubs near you</h3>
                    <div className="club-wrapper">
                        <div className="club-info">
                            <input type="radio" name="club" id="club1" value="1" />
                            <label htmlFor="club1">
                                <span className="address-ln1">10833 Le Conte Ave,</span>
                                <br />
                                <span className="address-ln1">Los Angeles, CA, 90095</span>
                            </label>
                            <span className="distance">0.5 miles away</span>
                            <span className="view-details-btn">+ View details</span>
                        </div>
                        <div className="view-details hidden">
                            <div className="details-weekdays">
                                <span className="details-tel">(604) 123-1232</span>
                                <span className="details-day">Mon - Fri</span>
                                <span className="details-time">10:00 am - 8:30 pm</span>
                            </div>
                            <div className="details-sat">
                                <span className="details-tel">(604) 123-1232</span>
                                <span className="details-day">Saturday</span>
                                <span className="details-time">10:00 am - 8:30 pm</span>
                            </div>
                            <div className="details-sun">
                                <span className="details-viewmap">View map</span>
                                <span className="details-day">Sunday</span>
                                <span className="details-time">10:00 am - 8:30 pm</span>
                            </div>
                        </div>
                    </div>
                    <div className="club-wrapper">
                        <div className="club-info">
                            <input type="radio" name="club" id="club2" value="1" />
                            <label htmlFor="club2">
                                <span className="address-ln1">5871 Firestone Blvd,</span>
                                <br />
                                <span className="address-ln1">South Gate, CA, 90280</span>
                            </label>
                            <span className="distance">1.0 mile away</span>
                            <span className="view-details-btn">+ View details</span>
                        </div>
                        <div className="view-details hidden">
                            <div className="details-weekdays">
                                <span className="details-tel">(604) 123-1232</span>
                                <span className="details-day">Mon - Fri</span>
                                <span className="details-time">10:00 am - 8:30 pm</span>
                            </div>
                            <div className="details-sat">
                                <span className="details-tel">(604) 123-1232</span>
                                <span className="details-day">Saturday</span>
                                <span className="details-time">10:00 am - 8:30 pm</span>
                            </div>
                            <div className="details-sun">
                                <span className="details-viewmap">View map</span>
                                <span className="details-day">Sunday</span>
                                <span className="details-time">10:00 am - 8:30 pm</span>
                            </div>
                        </div>
                    </div>
                    <div className="club-wrapper">
                        <div className="club-info">
                            <input type="radio" name="club" id="club3" value="1" />
                            <label htmlFor="club3">
                                <span className="address-ln1">1399 Artesia Blvd,</span>
                                <br />
                                <span className="address-ln1">Gardena, CA, 90247,</span>
                            </label>
                            <span className="distance">1.5 miles away</span>
                            <span className="view-details-btn">+ View details</span>
                        </div>
                        <div className="view-details hidden">
                            <div className="details-weekdays">
                                <span className="details-tel">(604) 123-1232</span>
                                <span className="details-day">Mon - Fri</span>
                                <span className="details-time">10:00 am - 8:30 pm</span>
                            </div>
                            <div className="details-sat">
                                <span className="details-tel">(604) 123-1232</span>
                                <span className="details-day">Saturday</span>
                                <span className="details-time">10:00 am - 8:30 pm</span>
                            </div>
                            <div className="details-sun">
                                <span className="details-viewmap">View map</span>
                                <span className="details-day">Sunday</span>
                                <span className="details-time">10:00 am - 8:30 pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default DeliveryMethods;