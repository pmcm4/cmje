import styles from './checkout.module.scss';
import classNames from 'classnames';
import { Checkout_items } from '../checkout-items/checkout-items';

export interface CheckoutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-checkouts-and-templates
 */
export const Checkout = ({ className }: CheckoutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Checkout_items />
            <Checkout_items />
        </div>
    );
};
