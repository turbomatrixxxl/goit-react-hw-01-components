import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <div
      style={{
        padding: '70px',
        background: 'lightgray',
      }}
    >
      <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.statList}>
          {stats.map(stat => {
            // console.log(stat.id);

            return (
              <Item
                key={stat.id}
                id={stat.id}
                label={stat.label}
                percentage={stat.percentage}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
  stat: PropTypes.object,
};

export default Statistics;
