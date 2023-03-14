import { createBoard } from '@wixc3/react-board';
import { Checkout_items } from '../../../components/checkout-items/checkout-items';

export default createBoard({
    name: 'Checkout_items',
    Board: () => <Checkout_items />
});
