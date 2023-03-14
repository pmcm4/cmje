import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Sell } from './components/sell/sell';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            <Sell />
        </div>
    );
}

export default App;
