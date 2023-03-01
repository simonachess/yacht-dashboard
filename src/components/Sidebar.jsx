import React from 'react';
import { NavLink } from 'react-router-dom';

import { links } from '../data/data';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-[50px] text-[#F36D45] m-2 text-medium text-2xl stroke-[#F36D45] fill-[#F36D45] w-full after:absolute after:rounded-full after:-right-[33%] after:-bottom-[65%] after:h-[179px] after:w-[135px] after:bg-[#002149]';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-[50px] hover:bg-light-gray m-2 text-medium text-2xl stroke-[#001249] fill-[#001249]';

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="ml-3 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-[#002149] m-3 mt-4 font-bold text-[30px]">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <div key={link.name} className="flex relative">
                    <NavLink
                      to={`/${link.path}`}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : '',
                      })}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <span
                        className="capitalize"
                      >
                        {link.name}
                      </span>
                    </NavLink>
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
