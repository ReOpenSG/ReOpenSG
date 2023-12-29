import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from '@/styles/styles.module.css';

function CradsWrapper({ data, currentLocation }) {
  const [cardLength, setCardLength] = useState(0);

  useEffect(() => {
    const firstDataItem = Object.values(data)[0];
    if (firstDataItem) {
      setCardLength(Object.keys(firstDataItem).length);
    }
  }, [data]);

  const renderCards = () =>
    Object.entries(data).flatMap(([title, types]) =>
      Object.keys(types).map((subTitle) => (
        <Card
          key={uuidv4()}
          title={title}
          subTitle={subTitle}
          currentLocation={currentLocation}
          data={data}
        />
      )),
    );

  return cardLength > 1 ? (
    <section className={styles.cardWrapper}>
      <h3 className={styles.title}>Machines Devices 버튼</h3>
      <nav className={styles.cardList}>{renderCards()}</nav>
    </section>
  ) : null;
}

CradsWrapper.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.objectOf(
        PropTypes.shape({
          char: PropTypes.arrayOf(
            PropTypes.shape({
              icon: PropTypes.string,
              text: PropTypes.string,
            }),
          ),
          desc: PropTypes.arrayOf(PropTypes.string),
        }),
      ),
    ),
  ).isRequired,
  currentLocation: PropTypes.string.isRequired,
};

export default CradsWrapper;
