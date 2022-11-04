import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6ae2b0d5129c22fc8d7799d6951bbf29~c5_100x100.jpeg?x-expires=1667653200&x-signature=C%2BFgFNTCWnodOjWIXYp8s97jFvo%3D"
                alt="avt"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <h4>Name</h4>
                    <div className={cx('icon')}>{<FontAwesomeIcon icon={faCircleCheck} />}</div>
                </p>
                <p className={cx('user-name')}>user_name</p>
            </div>
        </div>
    );
}

export default AccountItem;
