import styles from './items.module.scss';
import classNames from 'classnames';
import { Item } from '../item/item';

export interface ItemsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-itemss-and-templates
 */
export const Items = ({ className }: ItemsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
};
