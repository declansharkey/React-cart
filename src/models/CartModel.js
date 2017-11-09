
import products from '../sample-products';
import { observable, action } from 'mobx';

export default class CartModel {

    @observable products = [];

    constructor() {
        //setting up this.products array
        Object.keys(products).map((key) => {
            return this.products.push(products[key])
        })
    }

    @action.bound clear = () => {
        console.log('clearing');
        this.products = [];
    }

    @action.bound remove =(name)=> {
        this.products  = this.products.filter((product)=> {
           return product.name !== name;
        })
    }

    // observable = any object or primitive that you want to see and change

    // action = changes an observable

    //observer = the thing that will rerender based on your change

}