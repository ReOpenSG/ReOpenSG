import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/styles.module.css';

function NoticeContent({
  mainTopText, mainBottomText, subTopText, subBottomText,
}) {
  return (
    <div className={styles.noticeWrapper}>
      <p className={styles.mainText}>
        <span>{mainTopText}</span>
        <span>{mainBottomText}</span>
      </p>
      <p className={styles.subText}>
        <span>{subTopText}</span>
        <span>{subBottomText}</span>
      </p>
    </div>
  );
}

NoticeContent.defaultProps = {
  mainBottomText: '',
  subBottomText: '',
};

NoticeContent.propTypes = {
  mainTopText: PropTypes.string.isRequired,
  mainBottomText: PropTypes.string,
  subTopText: PropTypes.string.isRequired,
  subBottomText: PropTypes.string,
};

export default NoticeContent;
