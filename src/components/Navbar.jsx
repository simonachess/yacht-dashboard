import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import avatar from '../data/avatar.jpg';
import logo from '../data/logo.png';
import { useStateContext } from '../contexts/ContextProvider';
import { CalendarIcon, MenuIcon, NotificationIcon } from '../icons/Icons';

const Navbar = () => {
  const { activeMenu, setActiveMenu, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="flex justify-between py-6 relative">
      <div className="flex justify-between items-center w-[310px] px-8">
        <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900">
          <img src={logo} alt="logo" />
        </Link>
        <div onClick={handleActiveMenu} className="cursor-pointer"><MenuIcon /></div>
      </div>
      <div className="flex px-8 gap-[38px] items-center">
        <div className="cursor-pointer">
          <CalendarIcon />
        </div>
        <div className="cursor-pointer">
          <NotificationIcon />
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
        >
          <div className="flex flex-col items-end">
            <span className="text-[#001249] font-medium text-xl ml-1">
              Vardenis Pavardenis
            </span>
            <span className="font-normal text-base">
              Admin
            </span>
          </div>
          <img
            className="rounded-full w-14 h-14"
            src={avatar}
            alt="user-profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
