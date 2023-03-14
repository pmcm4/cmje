import styles from './checkout-items.module.scss';
import classNames from 'classnames';

export interface Checkout_itemsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-checkout-itemss-and-templates
 */
export const Checkout_items = ({ className }: Checkout_itemsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                className={styles.prod_img}
            />
            <div className={styles.text_holder}>
                <span className={styles.item_name}>Item Name</span>
                <span className={styles.brand_name}>Brand</span>
                <span className={styles.qty}>qty: 2</span>
                <span className={styles.price_ckout}>text</span>
            </div>
            <div className={styles.teim_btns}>
                <button className={styles.addBtn}>Remove</button>
            </div>
        </div>
    );
};
