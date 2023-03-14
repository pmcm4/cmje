import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
function App() {
    return (<div className={styles.App}>
            <Menu />
            <Container />
        </div>);
}
export default App;
