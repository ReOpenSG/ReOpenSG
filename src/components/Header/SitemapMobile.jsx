import React from 'react';
import MenuLink from '@/components/Header/MenuLink';
import AccordionItem from '@/components/Header/AccordionItem';
import styles from '@/components/Header/Sitemap.module.css';

function SitemapMobile() {
  return (
    <div className="tablet:hidden desktop:hidden block absolute left-0 top-0 pt-[40px] w-full h-full overflow-auto">
      <ul className={styles.sitemapListMobile}>
        <AccordionItem title="About Us">
          <ul className={styles.aboutUsListMobile}>
            <MenuLink linkName="회사개요" linkAddress="/about" />
            <MenuLink linkName="연혁" linkAddress="/history" />
            <MenuLink linkName="직무소개" linkAddress="/team" />
            <MenuLink linkName="오시는길" linkAddress="/location" />
          </ul>
        </AccordionItem>
        <AccordionItem title="Service & Solution">
          <ul className={styles.productListMobile}>
            <AccordionItem title="Solutions" small>
              <ul className="font-open-paragraph flex flex-col pt-open-lg gap-open-lg text-[#3FA9F5] text-open-font-medium">
                <AccordionItem title="Equipment Control System">
                  <ul className={styles.subListMobile}>
                    <MenuLink linkName="ACS/FMS" tooltip="AGV Control System / Fleet Management System" linkAddress="solutions/ACS" />
                    <MenuLink linkName="OCS" tooltip="OHT Control System" linkAddress="solutions/OCS" />
                    <MenuLink linkName="SCS" tooltip="Stocker Control System" linkAddress="solutions/SCS" />
                    <MenuLink linkName="CCS" tooltip="Conveyor Control System" linkAddress="solutions/CCS" />
                    <MenuLink linkName="IDX Controller" tooltip="Index Control System" linkAddress="solutions/IDX Controller" />
                  </ul>
                </AccordionItem>
                <AccordionItem title="Smart Tools">
                  <ul className={styles.subListMobile}>
                    <MenuLink linkName="Map Designer" linkAddress="solutions/Map Designer" />
                    <MenuLink linkName="ACS Simulator" tooltip="AGV Control System Simulator" linkAddress="solutions/ACS Simulator" />
                    <MenuLink linkName="SCS Simulator" tooltip="Stocker Control System Simulator" linkAddress="solutions/SCS Simulator" />
                  </ul>
                </AccordionItem>
                <AccordionItem title="Monitoring Solution">
                  <ul className={styles.subListMobile}>
                    <MenuLink linkName="AIMS" tooltip="Advanced Integrated Monitoring Solution" linkAddress="solutions/AIMS" />
                  </ul>
                </AccordionItem>
                <AccordionItem title="Comm Driver">
                  <ul className={styles.subListMobile}>
                    <MenuLink linkName="Open HSMS" linkAddress="solutions/HSMS" />
                  </ul>
                </AccordionItem>
              </ul>
            </AccordionItem>
            <AccordionItem title="Smart Machine" small>
              <ul className={styles.subListMobile}>
                <MenuLink linkName="AGV - Lift Type1" linkAddress="/machines/Lift Type1" />
                <MenuLink linkName="AGV - Lift Type2" linkAddress="/machines/Lift Type2" />
                <MenuLink linkName="AGV - Fork-Lift Type" linkAddress="/machines/Fork-Lift Type" />
                <MenuLink linkName="AGV - Foup Type" linkAddress="/machines/Foup Type" />
              </ul>
            </AccordionItem>
            <AccordionItem title="Smart Device" small>
              <ul className={styles.subListMobile}>
                <MenuLink linkName="Microsoft Hololens 2" linkAddress="/devices/Microsoft" />
              </ul>
            </AccordionItem>
            <AccordionItem title="Industries" small>
              <ul className={styles.subListMobile}>
                <MenuLink linkName="반도체" linkAddress="/industries/semiconductor" />
                <MenuLink linkName="디스플레이" linkAddress="/industries/display" />
                <MenuLink linkName="2차전지" linkAddress="/industries/battery" />
                <MenuLink linkName="항만" linkAddress="/industries/port" />
              </ul>
            </AccordionItem>
          </ul>
        </AccordionItem>
        <AccordionItem title="Support">
          <ul className="flex flex-col gap-open-md py-open-xl text-open-font-large font-open-paragraph">
            <MenuLink linkName="커뮤니티" linkAddress="/community" />
            <MenuLink linkName="라이브러리" linkAddress="/library" />
            <MenuLink linkName="고객문의" linkAddress="/contact" />
          </ul>
        </AccordionItem>
      </ul>
    </div>
  );
}

export default SitemapMobile;
