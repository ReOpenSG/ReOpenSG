import React from 'react';
import MenuLink from '@/components/Header/MenuLink';
import styles from '@/styles/styles.module.css';

function SitemapDesktop() {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="10"
      data-aos-delay="100"
      data-aos-duration="1200"
      className={styles.sitemapDesktop}
    >
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.menu}>About Us</div>
            <ul className={styles.aboutUs}>
              <MenuLink linkName="회사개요" linkAddress="/about" />
              <MenuLink linkName="연혁" linkAddress="/history" />
              <MenuLink linkName="직무소개" linkAddress="/team" />
              <MenuLink linkName="오시는길" linkAddress="/location" />
            </ul>
          </li>
          <li className={styles.listService}>
            <div className={styles.menu}>Service & Solution</div>
            <ul className={styles.serviceAndSolution}>
              <li>
                <div>Solutions</div>
                <ul className={styles.solutions}>
                  <li className={styles.solutionsBlue}>
                    <div>Equipment Control System</div>
                    <ul className={styles.solutionsSubMenu}>
                      <MenuLink
                        linkName="ACS/FMS"
                        tooltip="AGV Control System / Fleet Management System"
                        linkAddress="solutions/ACS"
                      />
                      <MenuLink
                        linkName="OCS"
                        tooltip="OHT Control System"
                        linkAddress="solutions/OCS"
                      />
                      <MenuLink
                        linkName="SCS"
                        tooltip="Stocker Control System"
                        linkAddress="solutions/SCS"
                      />
                      <MenuLink
                        linkName="CCS"
                        tooltip="Conveyor Control System"
                        linkAddress="solutions/CCS"
                      />
                      <MenuLink
                        linkName="IDX Controller"
                        tooltip="Index Control System"
                        linkAddress="solutions/IDX Controller"
                      />
                    </ul>
                  </li>
                  <li className={styles.solutionsBlue}>
                    <div>Smart Tools</div>
                    <ul className={styles.solutionsSubMenu}>
                      <MenuLink linkName="Map Designer" linkAddress="solutions/Map Designer" />
                      <MenuLink
                        linkName="ACS Simulator"
                        tooltip="AGV Control System Simulator"
                        linkAddress="solutions/ACS Simulator"
                      />
                      <MenuLink
                        linkName="SCS Simulator"
                        tooltip="Stocker Control System Simulator"
                        linkAddress="solutions/SCS Simulator"
                      />
                    </ul>
                  </li>
                  <li className={styles.solutionsBlue}>
                    <div>Monitoring Solution</div>
                    <ul className={styles.solutionsSubMenu}>
                      <MenuLink
                        linkName="AIMS"
                        tooltip="Advanced Integrated Monitoring Solution"
                        linkAddress="solutions/AIMS"
                      />
                    </ul>
                  </li>
                  <li className={styles.solutionsBlue}>
                    <div>Comm Driver</div>
                    <ul className={styles.solutionsSubMenu}>
                      <MenuLink linkName="Open HSMS" linkAddress="solutions/HSMS" />
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <div>Smart Machine</div>
                <ul className={styles.othersSubMenu}>
                  <MenuLink linkName="AGV - Lift Type1" linkAddress="/machines/Lift Type1" />
                  <MenuLink linkName="AGV - Lift Type2" linkAddress="/machines/Lift Type2" />
                  <MenuLink
                    linkName="AGV - Fork-Lift Type"
                    linkAddress="/machines/Fork-Lift Type"
                  />
                  <MenuLink linkName="AGV - Foup Type" linkAddress="/machines/Foup Type" />
                </ul>
              </li>
              <li>
                Smart Device
                <ul className={styles.othersSubMenu}>
                  <MenuLink linkName="Microsoft Hololens 2" linkAddress="/devices/Microsoft" />
                </ul>
              </li>
              <li className="-text--open-accent-accent-1">
                <div>Industries</div>
                <ul className={styles.othersSubMenu}>
                  <MenuLink linkName="반도체" linkAddress="/industries/semiconductor" />
                  <MenuLink linkName="디스플레이" linkAddress="/industries/display" />
                  <MenuLink linkName="2차전지" linkAddress="/industries/battery" />
                  <MenuLink linkName="항만" linkAddress="/industries/port" />
                </ul>
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <div className={styles.menu}>Support</div>
            <ul className={styles.support}>
              <MenuLink linkName="커뮤니티" linkAddress="/community" />
              <MenuLink linkName="라이브러리" linkAddress="/library" />
              <MenuLink linkName="고객문의" linkAddress="/contact" />
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SitemapDesktop;
