"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { routes } from "@/constants/routes";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Image from "../ui/image";
import Text from "../ui/Text";

export default function Footer(props) {
  const { t } = useTranslation();

  const projectLogoContainerClasses = clsx(
    "flex flex-col gap-4 items-start justify-start sm:justify-center"
  );

  const partnerLogoClasses = clsx(
    "flex justify-start items-center h-20 w-40 overflow-hidden"
  );

  // const imgClasses = clsx(
  //   "max-w-[200px] md:max-w-[140px] lg:max-w-[180px] img-contain"
  // );

  const sectionTitleClasses = clsx(
    "smallcaps text-left-2 text-[14px] font-bold"
  );

  return (
    <footer className="narrow_padding flex flex-wrap justify-between md:flex-nowrap gap-4 sm:gap-8 lg:gap-12 items-start bg-gray-300 text-gray-800">
      <div className={projectLogoContainerClasses + " w-full border-b pb-4 border-gray-400 md:border-0"}>
        <img
          className="w-full min-w-40 max-w-[200px]" // Corrige la sintaxis del max-width
          src="logo_boiler.svg"
          alt="logo placeholder"
        />
        <div className=" flex justify-center flex-col gap-0 xs:flex-row xs:gap-2 md:flex-col md:gap-0">
          <div className="flex flex-row">
          <EnvelopeClosedIcon className="mr-2 mt-1" />
          <Text className=" text-[14px] flex gap-1">
            <b>{t("footer.email")} </b>
          </Text>
          </div>
          <Text className=""> responsable@upm.es</Text>
        </div>
      </div>

      <nav className="w-fit border-b border-gray-400 xs:border-0">
        <div className={sectionTitleClasses}>{t("footer.title1")}</div>
        <ul
          className={`columns-1 gap-x-8 inline-block ${
            routes.length <= 3 ? "sm:columns-1" : "sm:columns-2 md:columns-1"
          }`}
        >
          {routes.map((route, index) => (
            <li
              key={index}
              className={
                route.route === props.route
                  ? "li-selected text-left mb-1 lg:mb-1.5"
                  : "text-left mb-1 lg:mb-1.5"
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
        <div className="w-fit flex gap-4 justify-start items-center flex-wrap xs:flex-col sm:flex-row  sm:flex-wrap lg:flex-nowrap">
          {/* <div className={partnerLogoClasses}>
            <img className={imgClasses} src="placeholder.jpg" alt="logo UPM" />
          </div> */}
          <div className={partnerLogoClasses}>
            <Image
              fit="contain" // Ajuste de la imagen
              src="/placeholder.jpg" // Usa una ruta válida
              alt="Descripción de la imagen"
              className="max-h-full w-auto justify-start" // Asegura que la imagen no exceda la altura máxima
            />
          </div>
          <div className={partnerLogoClasses}>
            <Image
              fit="contain" // Ajuste de la imagen
              src="/placeholder.jpg" // Usa una ruta válida
              alt="Descripción de la imagen"
              className="max-h-full w-auto " // Asegura que la imagen no exceda la altura máxima
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
