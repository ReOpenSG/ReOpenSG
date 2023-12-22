import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Community.module.css';

function Notice({ notice, notices }) {
  const updatedAtDate = notice?.data?.updatedAt
    ? new Date(notice.data.updatedAt.seconds * 1000 + notice.data.updatedAt.nanoseconds / 1000000)
    : null;
  const formattedDate = updatedAtDate?.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <NavLink to={`/community/${notice?.id}`} state={{ currentNotice: notice, notices }}>
      <div className={styles.noticeItem}>
        <h3 className={styles.noticeTitle}>{notice?.data?.title}</h3>
        <time className={styles.noticeCreatedAt} dateTime={formattedDate}>
          {formattedDate}
        </time>
      </div>
    </NavLink>
  );
}

export default Notice;
Notice.propTypes = {
  notices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.objectOf({
        index: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        imageUrl: PropTypes.string,
        updatedAt: PropTypes.arrayOf({
          seconds: PropTypes.number,
          nanoseconds: PropTypes.number,
        }),
      }).isRequired,
    }),
  ).isRequired,
  notice: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.shape({
        index: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        imageUrl: PropTypes.string,
        updatedAt: PropTypes.shape({
          seconds: PropTypes.number,
          nanoseconds: PropTypes.number,
        }),
      }).isRequired,
    }),
  ).isRequired,
};

Notice.propTypes = {
  notices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.shape({
        index: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        imageUrl: PropTypes.string,
        updatedAt: PropTypes.shape({
          seconds: PropTypes.number,
          nanoseconds: PropTypes.number,
        }),
      }).isRequired,
    }),
  ).isRequired,
  notice: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      index: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      imageUrl: PropTypes.string,
      updatedAt: PropTypes.shape({
        seconds: PropTypes.number,
        nanoseconds: PropTypes.number,
      }),
    }).isRequired,
  }).isRequired,
};
