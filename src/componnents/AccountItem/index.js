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
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/70eea656eb6c3e5d65c704055753b559~c5_100x100.jpeg?x-expires=1667721600&x-signature=iM7oYDq4EsHnSY2Oz5iA6qzS9pQ%3D"
                alt="avt"
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>Name</h4>
                    <div className={cx('icon')}>{<FontAwesomeIcon icon={faCircleCheck} />}</div>
                </div>
                <p className={cx('user-name')}>user_name</p>
            </div>
        </div>
    );
}

export default AccountItem;
