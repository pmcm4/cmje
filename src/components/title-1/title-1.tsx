import styles from './title-1.module.scss';
import classNames from 'classnames';

export interface Title1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-title-1s-and-templates
 */
export const Title1 = ({ className }: Title1Props) => {
    return <div className={classNames(styles.root, className)}>Analytics</div>;
};
