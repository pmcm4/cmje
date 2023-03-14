import { createBoard } from '@wixc3/react-board';
import { InvoiceCard } from '../../../components/invoice-card/invoice-card';

export default createBoard({
    name: 'InvoiceCard',
    Board: () => <InvoiceCard />
});
