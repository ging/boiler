"use client";

import React from "react";
import clsx from "clsx";

/* 
  ------------------------------------------------------------------
  Componente para los titulos y etiquetas <h> -> jerarquías de texto 
  ------------------------------------------------------------------
*/

const Heading = ({ level = "h1", children, className }) => {
  // Determinar el componente HTML según el nivel
  let Component;
  switch (level) {
    case "h1":
      Component = "h1";
      break;
    case "h2":
      Component = "h2";
      break;
    case "h3":
      Component = "h3";
      break;
    case "h4":
      Component = "h4";
      break;
    case "h5":
      Component = "h5";
      break;
    case "h6":
      Component = "h6";
      break;
      case "highlight":
        Component = "h5";
        break;
    default:
      Component = "h1"; // Por defecto, usar h1 si no se especifica nivel válido
      break;
  }

  // clsx, aplica clases según el valor del atributo level de manera dinámica
  const classes = clsx([
    "font-primary font-semibold text-pretty",
    {
      "text-h1 2xl:text-5xl !font-bold mb-6 text-title": level === "h1", // Aplicar "adasd" si el nivel es h1
      "text-h2 2xl:text-3xl mb-4 text-title": level === "h2",
      "text-h3 2xl:text-2xl mb-4 text-title": level === "h3",
      "text-h4 2xl:text-xl mb-2 text-title": level === "h4",
      "text-h5 2xl:text-lg mb-2 text-title": level === "h5",
      "text-h6 uppercase mb-2 text-title": level === "h6",
      "text-h4 2xl:text-lg mb-2 text-primary max-w-[45ch]": level === "highlight"
    },
    className
  ])

  return <Component className={classes}>{children}</Component>;
};

export default Heading;
