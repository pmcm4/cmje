import styles from './invoice-card.module.scss';
import classNames from 'classnames';
import { Checkout } from '../checkout/checkout';

export interface InvoiceCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-invoice-cards-and-templates
 */
export const InvoiceCard = ({ className }: InvoiceCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.Card}>
                <span className={styles.summary_title}>ORDER SUMMARY</span>
                <Checkout />
                <div className={styles.card2}>
                    <span className={styles.subtotal}>Subtotal</span>
                    <span>P120.00</span>
                </div>
                <div className={styles.card3}>
                    <span className={styles.misc}>Misc</span>
                    <span className={styles.miscprice}>P300.00</span>
                </div>
                <div className={styles.card4}>
                    <span className={styles.Total}>Total</span>
                    <span className={styles.total_price}>P420.00</span>
                </div>
                <div className={styles.chk_btns}>
                    <button className={styles.clear}>Clear</button>
                    <button className={styles.release}>Release</button>
                </div>
            </div>
        </div>
    );
};
