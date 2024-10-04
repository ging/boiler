"use client";

import React from "react";
import clsx from "clsx";
import { Badge } from "./badge"; // Importamos el Badge y sus variantes

const Image = ({
  fit = "cover",
  src,
  alt = "",
  className,
  layout = "top-right",
  hasBadge = false,
  badgeVariant = "",
  badgeSize = "",      
}) => {
  const imageContainerClasses = clsx(
    "relative flex w-full h-full",
    className 
  );
  const imageClasses = clsx(
    "w-full h-full", // La imagen ocupará todo el contenedor
    {
      "object-cover": fit === "cover", // Uso de object-cover para cubrir el contenedor
      "object-contain justify-start": fit === "contain", // Uso de object-contain para mantener la relación de aspecto
    }
  );

  const badgeLayout = clsx(
    "absolute", 
    {
      "top-2 left-2": layout === "top-left",
      "top-2 right-2": layout === "top-right",
      "bottom-2 left-2": layout === "bottom-left",
      "bottom-2 right-2": layout === "bottom-right",
      "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2": layout === "center",
    }
  );

  return (
    <div className={imageContainerClasses}>
      <img
        src={src}
        alt={alt}
        className={imageClasses} // Limitar el tamaño
      />
      {hasBadge && (
        <Badge className={badgeLayout} variant={badgeVariant} size={badgeSize}>
          Hola
        </Badge>
      )}
    </div>
  );
};


export default Image;
