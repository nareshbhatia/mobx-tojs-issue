import { Order } from './order';

test('Order is serialized correctly', () => {
    const order = new Order('o100', 'AAPL', 10000);
    const jsOrder = order.serialize();
    expect(jsOrder).toEqual({
        id: 'o100',
        symbol: 'AAPL',
        quantity: 10000
    });
});
