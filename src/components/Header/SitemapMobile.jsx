import React, { useState } from 'react';
import styles from '@/components/Header/Sitemap.module.css';
import AboutUsList from '@/components/Header/AboutUsList';
import ServiceAndSolution from '@/components/Header/ServiceAndSolution';
import SupportList from '@/components/Header/SupportList';

function SitemapMobile() {
  const [expanded, setExpanded] = useState('none');
  return (
    <div className="tablet:hidden desktop:hidden block absolute left-0 top-0 pt-[40px] w-full h-full overflow-auto">
      <ul className={styles.sitemapListMobile}>
        <AboutUsList accName="aboutus" expanded={expanded} setExpanded={setExpanded} />
        <ServiceAndSolution accName="service" expanded={expanded} setExpanded={setExpanded} />
        <SupportList accName="support" expanded={expanded} setExpanded={setExpanded} />
      </ul>
    </div>
  );
}

export default SitemapMobile;
