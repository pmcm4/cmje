import styles from './hist.module.scss';
import classNames from 'classnames';

export interface HistProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-hists-and-templates
 */
export const Hist = ({ className }: HistProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.sell}>
                <span className={styles.sellText}>Recently Sold</span>
            </div>
            <div className={styles.stock}>
                <span className={styles.stockText}>Restock History</span>
            </div>
        </div>
    );
};
