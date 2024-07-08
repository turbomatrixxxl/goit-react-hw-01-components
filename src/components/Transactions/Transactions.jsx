import React from 'react';
import PropTypes from 'prop-types';
import TransactionsItem from './TransactionsItem';

import styles from './Transactions.module.css';

function Transactions({ transactions }) {
  return (
    <div
      style={{
        padding: '70px',
        background: 'lightgray',
      }}
    >
      <table className={styles.transactionHistory}>
        <thead className={styles.thead}>
          <tr className={styles.trh}>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {transactions.map(transaction => {
            return (
              <TransactionsItem
                key={transaction.id}
                id={transaction.id}
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.array,
  transaction: PropTypes.object,
};

export default Transactions;
