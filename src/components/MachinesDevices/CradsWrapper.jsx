import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './MachinesDevices.module.css';

function CradsWrapper({ data, currentLocation }) {
  const [cardLength, setCardLength] = useState(0);

  useEffect(() => {
    Object.keys(data).length > 0 && setCardLength(Object.keys(Object.values(data)[0]).length);
  }, [data]);

  return (
    cardLength > 1 && (
      <nav className={styles.CardWrapper}>
        {Object.entries(data).map(([title, types]) =>
          Object.entries(types).map(([subTitle]) => (
            <Card
              key={uuidv4()}
              title={title}
              subTitle={subTitle}
              currentLocation={currentLocation}
              data={data}
            />
          )),
        )}
      </nav>
    )
  );
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
