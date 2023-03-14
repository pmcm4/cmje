import styles from './navbar.module.scss';
import classNames from 'classnames';
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-navbars-and-templates
 */
export const Navbar = ({ className }) => {
    return (<div className={classNames(styles.root, className)}>
            <span className={styles.text}>NAVBAR</span>
        </div>);
};
