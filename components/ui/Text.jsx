"use client";

import React from "react";
import clsx from "clsx";

/* 
  ------------------------------------------------------------------
  Componente para los titulos y etiquetas <h> -> jerarquías de texto // para esto se usa el Heading, este para bloques de texto
  ------------------------------------------------------------------
*/

const Text = ({ type = "p", children, className }) => {
  // Determinar el componente HTML según el nivel
  let Component;
  switch (type) {
    case "p":
      Component = "p";
      break;
    case "small":
      Component = "small";
      break;
      case "short-p":
        Component = "p";
        break;
    default:
      Component = "p"; // Por defecto, usar h1 si no se especifica nivel válido
      break;
  }

  // clsx, aplica clases según el valor del atributo level de manera dinámica
  const classes = clsx([
    "font-body",
    {/*"text-balance"*/},
    {
      "text-base max-w-[75ch] xl:max-w-[83ch] 2xl:max-w-[90ch] text-pretty": type === "p",
      "text-sm": type === "small",
      "text-base max-w-[66ch] xl:max-w-[71ch] 2xl:max-w-[83ch]": type === "short-p",
    },
    className
  ])

  return <Component className={classes}>{children}</Component>;
};

export default Text;
