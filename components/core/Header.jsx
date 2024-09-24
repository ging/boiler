"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import LangSwitcher from "./../LangSwitcher";
import { routes } from "@/constants/routes";

// icons
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function Header(props) {
  const [state, setState] = useState({ open: false });
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

 
  // classes
  const headerClasses = clsx(
    "h-fit",
    "px-8 py-4 sticky -top-[1px] w-full",
    "flex justify-between items-center",
    "bg-primary text-white",
    
    `header_${currentLang} z-50`,
    {
      "font-semibold": true,
      underlined: true,
    }
  );

  //

  const menuClasses = clsx(
    "w-screen px-8 py-4 md:p-0 md:w-fit",
    "absolute top-[48px] -right-8 md:static",
    "flex flex-col lg:flex-row ",
    "gap-4 md:gap-2 lg:gap-8",
    "bg-primary bg-blend-darken md:bg-none",
    "border-t-[1px] border-t-snow md:border-none",
    {
      "block md:flex": state.open,
      "hidden md:flex": !state.open,
    }
  );

  const menuItems = clsx(
    "flex flex-col justify-end items-center md:flex-row",
    "gap-0 md:gap-4"
  );

  const menuItemClasses = clsx(
    "w-full py-4 px-4 text-center md:p-0 md:w-fit",
    "text-lg font-medium md:text-base",
    "hover:underline"
  );

  return (
    <header className={headerClasses + "z-50"} id="header_home"> {/* route={routes.route} ?????*/}
      <a href="/">
        <div className="h-10 flex">
          <img
            className="object-contain"
            src="eunomia_logo_light.svg"
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
            {routes.map((route, index) => (
              <li key={index} className={menuItemClasses}>
                <Link suppressHydrationWarning
                  href={route.route}
                  onClick={() => setState({ open: false })}
                >
                  {t(route.key)}
                </Link>
              </li>
            ))}
          </ul>
          <LangSwitcher />
        </div>
        {/* /menu nav */}
      </div>
      {/* menu container */}
    </header>
  );
}
