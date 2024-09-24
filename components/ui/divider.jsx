"use client";

import React from "react";
import clsx from "clsx";

/* 
  ------------------------------------------------------------------
  Componente para meter espaciados en el contenido en bloque 
  ------------------------------------------------------------------
*/

const Divider = ({ size = "md", className }) => {
  // Determinar el componente HTML según el nivel
  let Component;
  switch (size) {
    case "sm":
      Component = "sm";
      break;
    case "md":
      Component = "md";
      break;
    case "lg":
      Component = "lg";
      break;
    default:
      Component = "md"; // Por defecto, usar h1 si no se especifica nivel válido
      break;
  }

  // clsx, aplica clases según el valor del atributo size de manera dinámica
  const classes = clsx([
    "flex w-full",
    {
      "h-6": size === "sm", // Aplicar "adasd" si el nivel es h1
      "h-10": size === "md",
      "h-12": size === "lg",
    },
    className
  ])

  return <Component className={classes}></Component>;
};

export default Divider;
