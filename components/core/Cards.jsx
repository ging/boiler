"use client";

import clsx from "clsx";
import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

import Heading from "../ui/Heading";
import { Badge, badgeVariants } from "../ui/badge";
import Text from "../ui/Text";
import { Button } from "../ui/button";
import Image from "../ui/image";
import {
  CustomCard,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardDescription,
  CardFooter,
  CardHeader
} from "@/components/ui/customCard";

import { useTranslation } from "react-i18next";

import {
  FaceIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const CardVariants = cva(
  "border border-primary min-w-20 p-4 inline-flex flex-col gap-4 items-center whitespace-nowrap rounded-md font-body text-sm text-text drop-shadow-md hover:scale-[101%] transition-all overflow-hidden",
  {
    variants: {
      direction: {
        default: "flex flex-col", // horizontal
        vertical: "flex",
      },
    },
    defaultVariants: {
      direction: "default",
    },
  }
);

const tagContainerClasses = cn(
  "mt-6 w-full flex flex-wrap gap-2 justify-start"
);


/**
 * Se puede integrar si cambiamos el modelo de datos del json por array
 * @param {String} tags
 * @returns string array
 */
const renderTags = (tags) => {
  if (!tags) return null;
  const tagsArray = tags.split(",").map((tag) => tag.trim()); // Convierte el string en array y elimina espacios
  return tagsArray.map((tag, index) => (
    <Badge key={index} variant="default">{tag}</Badge> // Añade una key a cada Label
  ));
};

// quitarle guión, añadir espaciado, mayúscula (Formateo)
const renderCategory = (category) => {
  if (!category) return null;
  const categoryFormat = category.split('-') // cadena en un array de palabras
  .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // la primera letra en mayúscula
  .join(' '); // unir las palabras con espacio
  return (
    <Badge variant="outline" size="lg">{categoryFormat}</Badge>  
  )
};

const translateCategory = (category, currentLang) => {
  if (currentLang == "es") {
    if (category == "article-journal") {
      category = "artículo-revista";
      console.log(category)
      }
    else if (category == "paper-conference") {
      category = "acta-congreso";
      console.log(category)
      }
    else if (category == "book") {
      category = "libro";
      console.log(category)
      }
    else if (category == "chapter") {
      category = "capítulo";
      console.log(category)
      }
  } else if (currentLang == "en") {
    // transformar "artículo-revista" en article journal
  }
  return renderCategory(category)
}


const Card = React.forwardRef(
  (
    {
      variant,
      direction,
      className,
      title,
      subtitle,
      description,
      img,
      svg,
      tags,
      date,
      category,
      route,
      name,
      position,
      center,
      email,
      author,
      doi,
      github,
      buttonText,
      cardType,
      role,
      currentLang
      
    },
    ref
    
  ) => {
    const { t } = useTranslation();

    // PROJECT
    const projectCard = (
      <CustomCard className={cn(CardVariants({ direction, className }))}>
        <CardHeader>
          <Badge variant="outline" size="lg">
            {date}
          </Badge>
          <Badge variant="outline" size="lg">
            {category}
          </Badge>
        </CardHeader>
        <CardContent className="h-full">
          <CardTitle level="h3">{title}</CardTitle>
          <CardSubtitle level="h6">{subtitle}</CardSubtitle>
          {description && <CardDescription>{description}</CardDescription>}
          <div className={tagContainerClasses}>{renderTags(tags)}</div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button href={route}>Ver proyecto</Button>{" "}
          {/**revisar el href que no funciona el link */}
        </CardFooter>
      </CustomCard>
    );

    // COURSE
    const courseCard = (
      <CustomCard className={cn(CardVariants({ direction, className }))}>
        <CardHeader className="flex w-full gap-2 items-center">
          <Badge variant="outline" size="lg">
            {date}
          </Badge>
          <Badge variant="outline" size="lg">
            {category}
          </Badge>
          <span className="spacer w-full" />
          <Button href={route} variant="ghost" size="lg">
            Ir al curso <ExternalLinkIcon className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle level="h6">{subtitle}</CardSubtitle>
          <CardDescription>{description}</CardDescription>
          <div className={tagContainerClasses}>{renderTags(tags)}</div>
        </CardContent>
      </CustomCard>
    );

    // PUBLICATIONS - ok
    const publicationCard = (
      <CustomCard className={cn(CardVariants({ direction, className })+ " bg-background")}>
        <CardHeader>
          <Badge variant="outline" size="lg">
            {date}
          </Badge>
          {translateCategory(category, currentLang)}
        </CardHeader>
        <CardContent className="gap-1">
          <CardTitle level="h3">
            <i>{title}</i>
          </CardTitle>
          <Text level="p">{author}</Text>
        </CardContent>
        <CardFooter>
          {doi ? (
            <Button asChild variant="" radius="rounded_md">
              <Link rel="noopener noreferrer" target="_blank" href={doi}>
              {t("publications.action-button")}
             
                <ArrowRightIcon />
              </Link>
            </Button>
          ) : null}
        </CardFooter>
      </CustomCard>
    );

    // TEAM - ok
    const teamCard = (
      <CustomCard
        // className={
        //   cn(CardVariants({direction, className }))
        // }
        className="w-64 bg-primary-300/60 h-86 p-4"
      >
        {(img || svg) && (
          <Image
            className={"h-[220px] rounded-md"}
            src={img || "placeholder.jpg"} // La imagen por defecto será una cadena vacía si no hay src
            alt={title || "Image"} // Usa el título como alt si existe
            fit="cover" // Ajustamos el contenido al contenedor
            hasBadge={position? true : false} // Por defecto, no tiene badge
            badgeContent={position}
          />
        )}
        {(name || description || email) && (
          <CardContent className="w-full justify-start items-center mb-auto">
            <CardTitle level="h5" className={"text-inherit text-center"}>
              {name}
            </CardTitle>
            { role && (<CardDescription type="short-p">{role}</CardDescription>)}
           {email && <CardDescription className={"font-semibold break-words text-wrap"}>{email}</CardDescription>}
          </CardContent>
        )}
        {/* {( email &&    
        <CardFooter>
          <a href={email}>{email}</a>
        </CardFooter>)} */}
      </CustomCard>
    );

    // TOOL - ok
    const toolCard = (
      <CustomCard className={cn(CardVariants({ direction, className }))}>
        {img && (
          <Image
          src={"/boiler" +img || "placeholder.jpg"}
          alt={"/boiler"+img || "placeholder.jpg"}
          className={"h-24"}
          fit="contain"
        />
        )}
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter>
        {( github && <Button asChild variant="link">
            <Link rel="noopener noreferrer" target="_blank" href={github}>
              GitHub
            </Link>
          </Button>)}
          <Button asChild variant="secondary" radius="rounded_md">
            <Link rel="noopener noreferrer" target="_blank" href={route}>
              Ver herramienta
              <ArrowRightIcon />
            </Link>
          </Button>
        </CardFooter>
      </CustomCard>
    );

    // Usar el prop cardType para determinar qué tipo de tarjeta renderizar
    switch (cardType) {
      default:
        return projectCard;
      case "project":
        return projectCard;
      case "course":
        return courseCard;
      case "publication":
        return publicationCard;
      case "team":
        return teamCard;
      case "tool":
        return toolCard;
    }
  }
);

Card.displayName = "Card";

export { Card, CardVariants };
