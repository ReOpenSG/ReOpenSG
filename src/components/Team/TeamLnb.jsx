import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';
import PropTypes, { array } from 'prop-types';
import styles from '@/styles/styles.module.css';

function TeamLnb({ data, state, setState }) {
  const id = useParams();

  useEffect(() => {
    AOS.init();
  });

  return (
    <ul className={styles.lnbUl} data-aos="fade-in" data-aos-duration="1200">
      <li>
        <button
          type="button"
          id={id}
          value="전체"
          onClick={(e) => setState(e.target.value)}
          className={state === '전체' ? styles.isClicked : ''}
        >
          전체
        </button>
      </li>
      {data.map((list) => (
        <li key={list[0]}>
          <button
            type="button"
            id={id}
            value={list[0]}
            onClick={(e) => setState(e.target.value)}
            className={list[0] === state ? styles.isClicked : ''}
          >
            {list[0]}
          </button>
        </li>
      ))}
    </ul>
  );
}

TeamLnb.propTypes = {
  data: PropTypes.arrayOf(array).isRequired,
  state: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
};

export default TeamLnb;
