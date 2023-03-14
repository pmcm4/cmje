import styles from './item.module.scss';
import classNames from 'classnames';

export interface ItemProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-items-and-templates
 */
export const Item = ({ className }: ItemProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                className={styles.prod_img}
            />
            <div className={styles.text_holder}>
                <span className={styles.item_name}>Item Name</span>
                <span className={styles.brand_name}>Brand</span>
                <span className={styles.stock}>Stock: 12</span>
                <span className={styles.price}>120.00</span>
            </div>
            <div className={styles.teim_btns}>
                <button className={styles.addBtn}>Add</button>
                <div className={styles.qty_slider}>
                    <span className={styles.minus}>-</span>
                    <span className={styles.num}>01</span>
                    <span className={styles.plus}>+</span>
                </div>
            </div>
        </div>
    );
};
