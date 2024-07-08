import React from 'react';
import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem';

import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <div
      style={{
        padding: '70px',
        background: 'lightgray',
      }}
    >
      <ul className={styles.friendList}>
        {friends.map(friend => {
          return (
            <FriendsItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              id={friend.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
  friend: PropTypes.object,
};

export default FriendList;
