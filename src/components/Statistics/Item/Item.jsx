import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Statistics.module.css';

function Item({ item }) {
  return (
    <li key={item.id} className={styles.item}>
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
