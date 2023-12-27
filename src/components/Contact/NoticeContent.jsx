import React from 'react';
import PropTypes from 'prop-types';

function NoticeContent({ mainTopText, mainBottomText, subTopText, subBottomText }) {
  return (
    <div className="flex flex-col gap-open-xl items-center -text--openfoundation-primary">
      <p className=" font-open-label text-open-font-xxxl flex flex-col items-center">
        <span>{mainTopText}</span>
        <span>{mainBottomText}</span>
      </p>
      <p className="font-open-paragraphs text-open-font-xl flex flex-col items-center">
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
