"use client";

import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { activeRoutes } from "@/constants/routes";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Image from "../ui/image";
import Text from "../ui/Text";
import Link from 'next/link';

export default function Footer(props) {
  const { t } = useTranslation();

  const projectLogoContainerClasses = clsx(
    "flex flex-col gap-4 items-start justify-start sm:justify-center"
  );

  const partnerLogoClasses = clsx(
    "flex justify-start items-start h-20 w-40 overflow-hidden"
  );

  const sectionTitleClasses = clsx(
    "smallcaps text-left-2 text-[14px] font-bold"
  );

  return (
    <footer className="narrow_padding flex flex-col flex-wrap justify-start gap-8 xs:flex-row justify-between items-start bg-gray-300 text-gray-800">
      <div className={projectLogoContainerClasses}>
        <img
          className="min-w-40 max-w-[200px]" // Corrige la sintaxis del max-width
          src="logo_boiler.svg"
          alt="logo placeholder"
        />
        <div className=" flex justify-center flex-col gap-0 xs:gap-2 md:flex-col md:gap-0">
          <div className="flex flex-row">
          <EmailOutlinedIcon className="mr-2 mt-1" />
          <Text className=" text-[14px] flex gap-1">
            <b>{t("footer.email")} </b>
          </Text>
          </div>
          <Text className=""> responsable@upm.es</Text>
        </div>
      </div>

      <nav className="">
        <div className={sectionTitleClasses}>{t("footer.title1")}</div>
        <ul
          className={`columns-1 gap-x-8 inline-block ${
            activeRoutes.length <= 3 ? "xs:columns-1" : "xs:columns-2"
          }`}
        >
          {activeRoutes.map((route, index) => (
            <li
              key={index}
              className={
                route.route === props.route
                  ? "li-selected text-left mb-1 lg:mb-1.5 hover:underline"
                  : "text-left mb-1 lg:mb-1.5 hover:underline"
              }
            >
              <Link className="text-base" href={route.route}>
                {t(route.key)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <div className={sectionTitleClasses + " pb-2"} >{t("footer.title3")}</div>
        <div className="w-fit flex gap-4 justify-start items-center flex-wrap flex-col xs:flex-row sm:flex-wrap lg:flex-nowrap">

          <div className={partnerLogoClasses}>
            <Image
              fit="contain" // Ajuste de la imagen
              src="placeholder.jpg" // Usa una ruta válida
              alt="Descripción de la imagen"
              className="max-h-full w-auto" // Asegura que la imagen no exceda la altura máxima
            />
          </div>
          <div className={partnerLogoClasses}>
            <Image
              fit="contain" // Ajuste de la imagen
              src="placeholder.jpg" // Usa una ruta válida
              alt="Descripción de la imagen"
              className="max-h-full w-auto" // Asegura que la imagen no exceda la altura máxima
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
