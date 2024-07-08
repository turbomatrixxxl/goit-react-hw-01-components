import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Statistics.module.css';

function Item({ id, label, percentage }) {
  return (
    <li key={id} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Item;
