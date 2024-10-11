"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

import clsx from "clsx";
import LangSwitcher from "./../LangSwitcher";
import { activeRoutes } from "@/constants/routes";

// icons
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function Header(props) {
  const [state, setState] = useState({ open: false });
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
//  console.log(activeRoutes)

  // classes
  const headerClasses = clsx(
    "h-fit",
    "px-8 py-4 sticky -top-[1px] w-full",
    "flex justify-between items-center md:items-start",
    "bg-background text-gray-800 shadow-md",
    
    `header_${currentLang} z-50`,
    {
      "font-semibold": true,
      underlined: true,
    }
  );

  //

  const menuClasses = clsx(
    "w-screen px-8 py-4 md:p-0 md:w-fit",
    "absolute top-[40px] -right-8 md:static",
    "flex flex-col lg:flex-row ",
    "gap-4 md:gap-2 lg:gap-8",
    "bg-background bg-blend-darken md:bg-none",
    "border-t-2 border-t-gray md:border-none",
    "shadow-md md:shadow-none",
    {
      "block md:flex": state.open,
      "hidden md:flex": !state.open,
    }
  );

  const menuItems = clsx(
    "flex flex-col justify-end items-center md:flex-row",
    "gap-1 md:gap-4",
    
  );

  const menuItemClasses = clsx(
    "w-full px-4 text-center md:p-0 md:w-fit",
    "text-lg md:text-base",
    "hover:underline"
  );

  return (
    <header className={headerClasses + "z-50"} id="header_home"> {/* route={routes.route} ?????*/}
      <a href="/">
        <div className="h-6 py-0.5 flex gap-4">
        <img
            className="object-contain"
            src="logo_sm_boiler.svg"
            alt="logo"
          />
          <img
            className="object-contain"
            src="logo_boiler.svg"
            alt="logo"
          />
        </div>
      </a>

      {/* menu container */}
      <div className="relative w-fit flex">
        {/* menu icons */}
        <div className="block md:hidden">
          {!state.open ? (
            <HamburgerMenuIcon
              className="w-6 h-6"
              onClick={() => setState({ open: !state.open })}
            />
          ) : (
            <Cross1Icon
              className="w-6 h-6"
              onClick={() => setState({ open: !state.open })}
            />
          )}
        </div>
        {/* /menu icons */}

        {/* menu nav */} 
        <div className={menuClasses}>
         
          <ul className={menuItems}>
            {activeRoutes.map((route, index, page) => (
              <li key={index} >
                <NavLink suppressHydrationWarning
                  to={route.route}
                  // onClick={() => setState({ open: false })}
                  className={({ isActive }) => isActive ? menuItemClasses + " font-semibold" : menuItemClasses + " font-normal"} 
                  key={route.index}
                >
                  {t(route.key)}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* <Routes>
          {routes.map((route, page, index) => (
            <Route path={route.route} element={route.page} className={console.log(route.page)}/>
          ))}
          </Routes> */}
          <Outlet />
          <LangSwitcher />
        </div>
        {/* /menu nav */}
      </div>
      {/* menu container */}
    </header>
  );
}
