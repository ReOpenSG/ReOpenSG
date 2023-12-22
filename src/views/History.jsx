import React from 'react';
import HistorySwiper from '@/components/History/HistorySwiper';
import HistoryMobile from '@/components/History/HistoryMobile';
import historyData from '../../historyData.json';
import TitleSection from '@/components/Common/TitleSection';

function History() {
  return (
    <div className="w-full">
      <TitleSection
        category="연혁"
        title="OpenSG가 걸어온 길"
        background="bg-[url('@/assets/aboutUs_background.png')]"
        textAlign="text-center"
      />
      <div>
        <HistorySwiper historyData={historyData} />
        <HistoryMobile historyData={historyData} />
      </div>
    </div>
  );
}
export default History;
