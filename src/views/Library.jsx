import React from 'react';
import DownloadSection from '@/components/Library/DownloadSection';
import BannerSection from '@/components/Common/BannerSection';

function Library() {
  return (
    <div className="w-full px-open-margin-mobile tablet:px-open-margin-desktop desktop:px-open-margin-desktop">
      <div className="max-w-[1320px] m-auto w-full">
        <BannerSection category="Support" title="라이브러리" />
        <h3 className="sr-only">다운로드</h3>
        <DownloadSection />
      </div>
    </div>
  );
}

export default Library;
