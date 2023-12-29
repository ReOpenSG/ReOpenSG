import React from 'react';
import DownloadSection from '@/components/Library/DownloadSection';
import BannerSection from '@/components/Common/BannerSection';
import styles from '@/styles/styles.module.css';

function Library() {
  return (
    <div className={styles.library}>
      <div className={styles.sectionWrapper}>
        <BannerSection category="Support" title="라이브러리" />
        <h3 className="sr-only">다운로드</h3>
        <DownloadSection />
      </div>
    </div>
  );
}

export default Library;
