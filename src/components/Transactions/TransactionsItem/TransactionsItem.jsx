import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Transactions.module.css';

function TransactionsItem({ id, type, amount, currency }) {
  return (
    <tr key={id} className={styles.tr}>
      <td className={styles.td}>{type}</td>
      <td className={styles.td}>{amount}</td>
      <td className={styles.td}>{currency}</td>
    </tr>
  );
}

TransactionsItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionsItem;
