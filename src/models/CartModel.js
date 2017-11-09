
import products from '../sample-products';
import { observable, action } from 'mobx';

export default class CartModel {

    @observable products = [];

    constructor() {
        this.products = products;
    }

    @action.bound clear =() => {
        console.log('clearing');
        this.products = [];
    }

    // observable = any object or primitive that you want to see and change

    // action = changes an observable

    //observer = the thing that will rerender based on your change

}