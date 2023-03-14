import styles from './container.module.scss';
import classNames from 'classnames';
import { Analystics } from '../analystics/analystics';
import { Hist } from '../hist/hist';
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-containers-and-templates
 */
export const Container = ({ className }) => {
    return (<div className={classNames(styles.root, className)}>
            <Analystics />
            <Hist />
        </div>);
};
