
import products from '../sample-products';
import { observable } from 'mobx';

export default class CartModel {

    products = observable([]);

    constructor() {
        this.products = products;
    }

    getTotalPrice = () => {
        let price = 0;
        this.products.forEach((product) => {
            price = price + product.price;
        })
        return price;
    }

}