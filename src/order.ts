import { decorate, observable, toJS } from 'mobx';

export interface JsOrder {
    id: string;
    symbol: string;
    quantity: number;
}

export class Order {
    constructor(
        readonly id: string,
        public symbol: string,
        public quantity: number,
    ) {}

    serialize(): JsOrder {
        // return toJS(this);
        return JSON.parse(JSON.stringify(this));
    }
}

decorate(Order, {
    id: observable,
    symbol: observable,
    quantity: observable
});
