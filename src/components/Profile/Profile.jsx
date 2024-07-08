import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div
      style={{
        padding: '70px',
        background: 'lightgray',
      }}
    >
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt="User avatar" className={styles.avatar} />
          <h3 className={styles.name}>{username}</h3>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>
              <b>{stats.followers}</b>
            </span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>
              <b>{stats.views}</b>
            </span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>
              <b>{stats.likes}</b>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
