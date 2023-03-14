import styles from './cards.module.scss';
import classNames from 'classnames';
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className }) => {
    return <div className={classNames(styles.root, className)}>Cards</div>;
};
