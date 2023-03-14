import { createBoard } from '@wixc3/react-board';
import { Hist } from '../../../components/hist/hist';

export default createBoard({
    name: 'Hist',
    Board: () => <Hist />
});
