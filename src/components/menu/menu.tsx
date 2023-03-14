import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img
                    src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1678451628/My_project_-_Copy_copy_aunrfj.png"
                    className={styles.logoimg}
                />
                <span className={styles.logoText}>Menu</span>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>Dashboard</li>
                <hr className={styles.hr} />
                <li className={styles.item}>Sell</li>
                <hr className={styles.hr} />
                <li className={styles.item}>Stock</li>
                <hr className={styles.hr} />
                <li className={styles.item}>Category</li>
                <hr className={styles.hr} />
                <li className={styles.item}>Logout</li>
                <hr className={styles.hr} />
            </ul>
        </div>
    );
};
