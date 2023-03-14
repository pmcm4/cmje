import styles from './new-component.module.scss';
import classNames from 'classnames';
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-new-components-and-templates
 */
export const NewComponent = ({ className }) => {
    return <div className={classNames(styles.root, className)}>NewComponent</div>;
};
