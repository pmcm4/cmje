import styles from './sell.module.scss';
import classNames from 'classnames';
import { Items } from '../items/items';
import { Search } from '../search/search';
import { InvoiceCard } from '../invoice-card/invoice-card';

export interface SellProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-sells-and-templates
 */
export const Sell = ({ className }: SellProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.select_items}>
                <Search />
                <Items />
                <div className={styles.add_misc}>
                    <span className={styles.misciTitle}>Misc</span>
                    <input
                        type="number"
                        className={styles.misc_num}
                        placeholder={'Leave blank if '}
                    />
                    <button className={styles.miscBtn}>Add</button>
                </div>
            </div>
            <div className={styles.invoice}>
                <InvoiceCard />
            </div>
        </div>
    );
};
