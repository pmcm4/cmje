import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1034,
        windowHeight: 640,
        canvasHeight: 494,
    },
});
