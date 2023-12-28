/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuLink from '@/components/Header/MenuLink';
import Sitemap from '@/components/Header/Sitemap';
import opensgLogo from '@/assets/header_opensg.png';
import styles from '@/styles/styles.module.css';

function Header() {
  const [whitePage, setWhitePage] = useState(null);
  const [isHeaderBlack, setIsHeaderBlack] = useState(false); //
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState(null);
  const [activeBurger, setActiveBurger] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLanguageActive = (lang) => {
    setActiveLanguage(lang);
  };

  const handleMenuActive = (menu) => {
    setActiveMenu(menu);
    setIsHeaderBlack(true);
    if (menu === null) {
      setIsHeaderBlack(false);
    }
  };

  const handleBurgerActive = (active) => {
    setActiveBurger(active);
    if (active) {
      setIsSitemapOpen(true);
    } else {
      setIsSitemapOpen(false);
    }
  };

  useEffect(() => {
    handleMenuActive(null);
    setIsHeaderBlack(false);
    setIsSitemapOpen(false);
    setActiveBurger(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname.includes('/community') || location.pathname === '/library' || location.pathname.includes('/contact')) {
      setWhitePage(true);
    } else {
      setWhitePage(false);
    }
  }, [location]);

  useEffect(() => {
    if (isSitemapOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSitemapOpen]);

  return (
    <header
      role="banner"
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${whitePage ? styles.black : ''} ${isHeaderBlack ? styles.black : ''}`}
    >
      <h1 className={styles.headerTitle}>
        오픈에스지
      </h1>
      <nav className={styles.headerNavigation}>
        <ul className={styles.headerList}>
          <li>
            <Link className={styles.logoLink} to="/"><img className={styles.logoImage} src={opensgLogo} alt="오픈에스지" /></Link>
          </li>
          {!isSitemapOpen && (
            <li className={styles.menu} onMouseEnter={() => handleMenuActive('AboutUs')}>
              <button className={styles.menuLink} type="button" onClick={() => handleMenuActive('AboutUs')}>About Us</button>
              {activeMenu === 'AboutUs' && (
              <div
                className={styles.subMenuWrapper}
                ref={menuRef}
                onMouseLeave={() => handleMenuActive(null)}
              >
                <ul className={`${styles.subMenu} ${styles.subMenuAbout}`}>
                  <MenuLink linkName="회사개요" linkAddress="/about" />
                  <MenuLink linkName="연혁" linkAddress="/history" />
                  <MenuLink linkName="직무소개" linkAddress="/team" />
                  <MenuLink linkName="오시는길" linkAddress="/location" />
                </ul>
              </div>
              )}
            </li>
          )}
          {!isSitemapOpen && (
          <li className={styles.menu} onMouseEnter={() => handleMenuActive('Products')}>
            <button className={styles.menuLink} type="button" onClick={() => handleMenuActive('Products')}>Service & Solution</button>
            {activeMenu === 'Products' && (
            <div
              className={styles.subMenuWrapper}
              ref={menuRef}
              onMouseLeave={() => handleMenuActive(null)}
            >
              <ul className={`${styles.subMenu} ${styles.subMenuServiceAndSolution}`}>
                <li>
                  Solutions
                  <ul className={styles.solutionsList}>
                    <li className={styles.solutionsListItem}>
                      <div className={styles.solutionsBlueItem}>
                        Equipment Control System
                      </div>
                      <span className={styles.solutionsGrayItem}>스마트팩토리 장비 제어 시스템</span>
                      <ul className={styles.solutionsWhiteList}>
                        <MenuLink linkName="ACS/FMS" tooltip="AGV Control System / Fleet Management System" linkAddress="solutions/ACS" />
                        <MenuLink linkName="OCS" tooltip="OHT Control System" linkAddress="solutions/OCS" />
                        <MenuLink linkName="SCS" tooltip="Stocker Control System" linkAddress="solutions/SCS" />
                        <MenuLink linkName="CCS" tooltip="Conveyor Control System" linkAddress="solutions/CCS" />
                        <MenuLink linkName="IDX Controller" tooltip="Index Control System" linkAddress="solutions/IDX Controller" />
                      </ul>
                    </li>
                    <li className={styles.solutionsListItem}>
                      <div className={styles.solutionsBlueItem}>
                        Smart Tools
                      </div>
                      <span className={styles.solutionsGrayItem}>스마트팩토리 시뮬레이터</span>
                      <ul className={styles.solutionsWhiteList}>
                        <MenuLink linkName="Map Designer" linkAddress="solutions/Map Designer" />
                        <MenuLink linkName="ACS Simulator" tooltip="AGV Control System Simulator" linkAddress="solutions/ACS Simulator" />
                        <MenuLink linkName="SCS Simulator" tooltip="Stocker Control System Simulator" linkAddress="solutions/SCS Simulator" />
                      </ul>
                    </li>
                    <li className={styles.solutionsListItem}>
                      <div className="text-open-font-medium -text--open-accent-accent-1 -text-">
                        Monitoring Solution
                      </div>
                      <span className={styles.solutionsGrayItem}>스마트팩토리 모니터링 솔루션</span>
                      <ul className={styles.solutionsWhiteList}>
                        <MenuLink linkName="AIMS" tooltip="Advanced Integrated Monitoring Solution" linkAddress="solutions/AIMS" />
                      </ul>
                    </li>
                    <li className={styles.solutionsListItem}>
                      <div className={styles.solutionsBlueItem}>
                        Comm Driver
                      </div>
                      <span className={styles.solutionsGrayItem}>스마트팩토리 통신 시스템</span>
                      <ul className={styles.solutionsWhiteList}>
                        <MenuLink linkName="Open HSMS" linkAddress="solutions/HSMS" />
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Smart Machine
                  <ul className={styles.solutionsWhiteList}>
                    <MenuLink linkName="AGV - Lift Type1" linkAddress="/machines/Lift Type1" />
                    <MenuLink linkName="AGV - Lift Type2" linkAddress="/machines/Lift Type2" />
                    <MenuLink linkName="AGV - Fork-Lift Type" linkAddress="/machines/Fork-Lift Type" />
                    <MenuLink linkName="AGV - Foup Type" linkAddress="/machines/Foup Type" />
                  </ul>
                </li>
                <li>
                  Smart Device
                  <ul className={styles.solutionsWhiteList}>
                    <MenuLink linkName="Microsoft Hololens 2" linkAddress="/devices/Microsoft" />
                  </ul>
                </li>
                <div className={styles.solutionsSeperator} />
                <li>
                  <div className={styles.solutionsBlueItem}>
                    Industries
                  </div>
                  <ul className={styles.solutionsWhiteList}>
                    <MenuLink linkName="반도체" linkAddress="/industries/semiconductor" />
                    <MenuLink linkName="디스플레이" linkAddress="/industries/display" />
                    <MenuLink linkName="2차전지" linkAddress="/industries/battery" />
                    <MenuLink linkName="항만" linkAddress="/industries/port" />
                  </ul>
                </li>
              </ul>
            </div>
            )}
          </li>
          )}
          {!isSitemapOpen && (
          <li className={styles.menu} onMouseEnter={() => handleMenuActive('Support')}>
            <button className={styles.menuLink} type="button" onClick={() => handleMenuActive('Support')}>Support</button>
            {activeMenu === 'Support' && (
            <div
              className={styles.subMenuWrapper}
              ref={menuRef}
              onMouseLeave={() => handleMenuActive(null)}
            >
              <ul className={`${styles.subMenu} ${styles.subMenuSupport}`}>
                <MenuLink linkName="커뮤니티" linkAddress="/community" />
                <MenuLink linkName="라이브러리" linkAddress="/library" />
                <MenuLink linkName="고객문의" linkAddress="/contact" />
              </ul>
            </div>
            )}
          </li>
          )}
        </ul>
      </nav>
      <ul className={styles.headerButtonList}>
        <li className={styles.languageButton}>
          <div className={styles.languageButtonBox}>
            <button className={activeLanguage !== 'ENG' ? '' : styles.languageInactive} type="button" onClick={() => handleLanguageActive('KOR')}>KOR</button>
            <div className={styles.languageSeperator} />
            <button className={activeLanguage === 'ENG' ? '' : styles.languageInactive} type="button" onClick={() => handleLanguageActive('ENG')}>ENG</button>
          </div>
        </li>
        <li className={styles.hamburgerButtn}>
          <button
            type="button"
            onClick={() => handleBurgerActive(!activeBurger)}
            className={`${styles.hamburger} ${activeBurger ? styles.hamburgerOn : ''}`}
          >
            <span />
          </button>
          <Sitemap isOpen={isSitemapOpen} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
