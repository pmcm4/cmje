import { createBoard } from '@wixc3/react-board';
import { Checkout } from '../../../components/checkout/checkout';

export default createBoard({
    name: 'Checkout',
    Board: () => <Checkout />
});
