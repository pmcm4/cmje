import { createBoard } from '@wixc3/react-board';
import { Sell } from '../../../components/sell/sell';

export default createBoard({
    name: 'Sell',
    Board: () => <Sell />
});
