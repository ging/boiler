"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { routes } from "@/constants/routes";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Image from "../ui/image-old";

export default function Footer(props) {
  const { t } = useTranslation();

  const projectLogoContainerClasses = clsx(
    "flex flex-col gap-4 items-start justify-start sm:justify-center"
  );

  const partnerLogoClasses = clsx(
    "flex justify-start items-center h-20 w-40 overflow-hidden"
  );

  const imgClasses = clsx(
    "max-w-[200px] md:max-w-[140px] lg:max-w-[180px] img-contain"
  );

  const sectionTitleClasses = clsx(
    "text-white smallcaps text-left mb-2 text-[14px] font-bold"
  );

  return (
    <footer className="narrow_padding flex flex-wrap justify-between md:flex-nowrap gap-4 sm:gap-8 lg:gap-12 items-start bg-primary text-white">
      <div className={projectLogoContainerClasses}>
        <img
          className="w-full min-w-64 max-w-[500px]" // Corrige la sintaxis del max-width
          src="logo_boiler_light.svg"
          alt="logo placeholder"
        />
        <div className="text-white flex items-center">
          <EnvelopeClosedIcon className="mr-2 mb-0.5" />
          <p className="text-white text-[14px] flex gap-1">
            <b>{t("footer.email")} </b>responsable@upm.es
          </p>
        </div>
      </div>

      <nav className="w-2/5 sm:w-2/6 md:w-1/3 lg:w-1/4">
        <div className={sectionTitleClasses}>{t("footer.title1")}</div>
        <ul
          className={`columns-1 gap-x-3 inline-block ${
            routes.length <= 3 ? "sm:columns-1" : "sm:columns-2"
          }`}
        >
          {routes.map((route, index) => (
            <li
              key={index}
              className={
                route.route === props.route
                  ? "li-selected text-left mb-1 lg:mb-1.5 font-normal text-sm"
                  : "text-left mb-1 lg:mb-1.5 font-normal text-[14px]"
              }
            >
              <Link className="font-normal" href={route.route}>
                {t(route.key)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <div className={sectionTitleClasses}>{t("footer.title3")}</div>
        <div className="w-fit flex gap-4 justify-center items-center flex-wrap xs:flex-nowrap">
          {/* <div className={partnerLogoClasses}>
            <img className={imgClasses} src="placeholder.jpg" alt="logo UPM" />
          </div> */}
          <div className={partnerLogoClasses}>
            <Image
              fit="contain" // Ajuste de la imagen
              src="/placeholder.jpg" // Usa una ruta válida
              alt="Descripción de la imagen"
              className="max-h-full w-auto " // Asegura que la imagen no exceda la altura máxima
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
