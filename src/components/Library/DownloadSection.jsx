import React from 'react';
import styles from '@/styles/styles.module.css';
import DownloadCard from './DownloadCard';
import companyProfileKo from '@/assets/library_companyProfile_ko.pdf';
import companyProfileEn from '@/assets/library_companyProfile_en.pdf';
import companyBrochureKo from '@/assets/library_companyBrochure_ko.pdf';
import companyBrochureEn from '@/assets/library_companyBrochure_en.pdf';

function DownloadSection() {
  return (
    <div className={styles.sectionContainer}>
      <DownloadCard
        mainText="OpenSG"
        subText="회사 소개서"
        category="소개서"
        href={companyProfileKo}
        download="OpenSG_회사_소개서_국문"
        ariaLabel="오픈에스지 회사 소개서"
      />
      <DownloadCard
        mainText="OpenSG"
        subText="Company Overview"
        category="Overview"
        href={companyProfileEn}
        download="OpenSG_Company_Overview_ENG"
        ariaLabel="오픈에스지 회사 소개서"
      />
      <DownloadCard
        mainText="OpenSG"
        subText="회사 브로슈어"
        category="브로슈어"
        href={companyBrochureKo}
        download="OpenSG_회사_브로슈어_국문"
        ariaLabel="오픈에스지 회사 브로슈어"
      />
      <DownloadCard
        mainText="OpenSG"
        subText="Company Brochure"
        category="Brochure"
        href={companyBrochureEn}
        download="OpenSG_Company_Brochure_ENG"
        ariaLabel="오픈에스지 회사 브로슈어"
      />
    </div>
  );
}

export default DownloadSection;
