import { createBoard } from '@wixc3/react-board';
import { Analystics } from '../../../components/analystics/analystics';

export default createBoard({
    name: 'Analystics',
    Board: () => <Analystics />
});
