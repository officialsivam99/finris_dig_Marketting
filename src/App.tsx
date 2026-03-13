import React, { useContext, useEffect } from 'react';
import CustomCursor from './components/elements/CustomCursor';
import MobileNav from './components/elements/MobileNav';
import FinrisContext from './components/context/FinrisContext';
import { Outlet, useLocation } from 'react-router';
import SideBar from './components/elements/SideBar';
import SearchProp from './components/elements/SearchProp';
import ScrollToTop from './components/elements/ScrollToTop';
import VideoPopup from './components/elements/VideoPopup';
import MobileNavSingle from './components/elements/MobileNavSingle';

const App: React.FC = () => {
  const context = useContext(FinrisContext);
  if (!context) throw new Error("Context is null")
  const { isMobile, isSearch, showVideoPopup } = context;
  const pathName = useLocation().pathname;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathName]);

  return (
    <div className={`custom-cursor ${isMobile ? "locked" : ""} ${isSearch ? 'search-active' : ''}`}>
      <CustomCursor />

      <Outlet />
      {pathName === "/index-one-page" ? <MobileNavSingle /> : <MobileNav />}

      <SideBar />
      <SearchProp />
      <ScrollToTop />
      {showVideoPopup && <VideoPopup />}
    </div>
  );
};

export default App;
