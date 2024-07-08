import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from '../FriendList.module.css';

function FriendsItem({ avatar, name, isOnline, id }) {
  const status = clsx(
    isOnline ? clsx(styles.span, styles.isOnline) : styles.span
  );

  return (
    <li key={id} className={styles.item}>
      <span className={status}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendsItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendsItem;
