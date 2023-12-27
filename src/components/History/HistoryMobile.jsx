import React from 'react';
import PropTypes from 'prop-types';
import HistoryMobileSlide from './HistoryMobileSlide';

function HistoryMobile({ historyData }) {
  const historyDataSorted = Object.entries(historyData).toSorted((a, b) => b[0] - a[0]);
  return (
    <div className="hidden mobile:block w-full h-full -text--openfoundation-secondary -bg--openfoundation-primary px-open-margin-mobile py-open-5xl">
      <div className="flex flex-col justify-center items-center gap-open-xl">
        {historyDataSorted.map(([key, value]) => (
          <HistoryMobileSlide
            year={key}
            history={value}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}

HistoryMobile.propTypes = {
  historyData: PropTypes.object.isRequired,
};

export default HistoryMobile;
