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
  FaceIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const CardVariants = cva(
  "border border-primary min-w-20 p-4 inline-flex flex-col gap-4 items-center justify-between whitespace-nowrap rounded-md font-body text-sm text-text drop-shadow-md hover:scale-[101%] transition-all overflow-hidden",
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

const cardFooterClasses = cn(
  "pt-4 w-full flex flex-wrap flex-row-reverse gap-2 xs:gap-4 justify-center xs:justify-start"
);
const cardBodyClasses = cn("h-full w-full flex flex-col justify-start");
const tagContainerClasses = cn(
  "mt-6 w-full flex flex-wrap gap-2 justify-start"
);
const classesImg = cn("bg-gray-200 min-h-16 min-w-16 object-cover");

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
    const globalCard = (
      <article className={cn(CardVariants({ direction, className }))}>
        {/* card header */}
        {(date || category) && (
          <header className="w-full flex gap-2 justify-start">
            {date && (<Badge variant="outline" size="lg">
              {date}
            </Badge>)}
            {category && (<Badge variant="outline" size="lg">
              {category}
            </Badge>)}
          </header>
        )}
        {/* card image */}
        {img || svg && (
          // <image
          //   src={/* process.env.PUBLIC_URL */ +img}
          //   alt={img}
          //   className={classesImg}
          // />
          <Image
            isSvg={svg? true : false}
            svgCode={svg}
            src={/* process.env.PUBLIC_URL */ +img}
            alt={img}
            className={classesImg}
            fit="cover"
            hasBadge={false}
            badgeVariant=""
            badgeSize=""
          />
        )}

        {/* card body */}
        {(title || subtitle || description || tags) && (
          <div className={cardBodyClasses}>
            {title && <Heading level="h3">{title}</Heading>}
            {subtitle && <Heading level="h5">{subtitle}</Heading>}
            {description && <Text>{description}</Text>}
            {tags && (
              <div className={tagContainerClasses}>{renderTags(tags)}</div>
            )}
          </div>
        )}
        {/* card footer 
        hay que ver cómo hacer que los botones pueda haber dos botones con textos diferentes 
        */}
        {buttonText && (
          <footer className={cardFooterClasses}>
            <Button variant="" size="" className="">
              <FaceIcon />
              {buttonText}
            </Button>
            <Button variant="secondary" size="" className="">
              {buttonText}
            </Button>
          </footer>
        )}
      </article>
    );

    // PROJECT
    const projectCard = (
      <article className={cn(CardVariants({ direction, className }))}>
        <header className="w-full flex gap-4 justify-start">
          <Badge variant="outline" size="lg">
            {date}
          </Badge>
          <Badge variant="outline" size="lg">
            {category}
          </Badge>
        </header>
        <div className={cardBodyClasses}>
          <Heading level="h3">{title}</Heading>
          <Heading level="h5">{subtitle}</Heading>
          {description && <Text>{description}</Text>}
          <div className={tagContainerClasses}>{renderTags(tags)}</div>
        </div>
        <footer>
          <Button href={route}>Ver proyecto</Button>{" "}
          {/**revisar el href que no funciona el link */}
        </footer>
      </article>
    );

    // COURSE
    const courseCard = (
      <article className={cn(CardVariants({ direction, className }))}>
        <header className="flex w-full gap-4 items-center">
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
        </header>
        <div className={cardBodyClasses}>
          <Heading level="h3">{title}</Heading>
          <Heading level="h5">{subtitle}</Heading>
          <Text>{description}</Text>
          <div className={tagContainerClasses}>{renderTags(tags)}</div>
        </div>
      </article>
    );

    // PUBLICATIONS - ok
    const publicationCard = (
      <article className={cn(CardVariants({ direction, className })+ " bg-background")}>
        <header className="w-full flex gap-3 justify-start">
          <Badge variant="outline" size="lg">
            {date}
          </Badge>
          {translateCategory(category, currentLang)}
          
       
        </header>
        <div className={cardBodyClasses}>
          <Heading level="h4">
            <i>{title}</i>
          </Heading>
          <Text level="p">{author}</Text>
        </div>
        <footer className={cardFooterClasses}>
          {doi ? (
            <Button asChild variant="secondary" radius="rounded_md">
              <Link rel="noopener noreferrer" target="_blank" href={doi}>
                Leer publicación
             
                <ArrowRightIcon />
              </Link>
            </Button>
          ) : null}
        </footer>
      </article>
    );

    // TEAM - ok
    const teamCard = (
      <article
        className={
          cn(CardVariants({direction, className })) + " mx-auto xs:mx-0 w-60 gap-1 bg-white"
        }
      >
        {(img || svg) && (
          <Image
            isSvg={!!svg} // Si svg está definido, será true
            svgCode={svg || ""} // Pasamos el código SVG si existe
            src={img || ""} // La imagen por defecto será una cadena vacía si no hay src
            alt={title || "Image"} // Usa el título como alt si existe
            className={classesImg}
            fit="cover" // Ajustamos el contenido al contenedor
            hasBadge={position? true : false} // Por defecto, no tiene badge
            badgeVariant=""
            badgeSize=""
            badgeContent={position}
          />
        )}
        {(name || position || description || email) && (
          <div className="p-4 h-fit w-full flex flex-col justify-start items-center mb-auto">
            <Heading level="h5" className={"text-inherit text-center"}>
              {name}
            </Heading>
            { role && (<Text type="short-p">{role}</Text>)}
           {email && <Text className={"font-semibold"}>{email}</Text>}
          </div>
        )}
        {/* {( email &&    
        <footer>
          <a href={email}>{email}</a>
        </footer>)} */}
      </article>
    );

    // TOOL - ok
    const toolCard = (
      <article className={cn(CardVariants({ direction, className }))}>
        {img && (
          <image
            src={/* process.env.PUBLIC_URL */ +img}
            alt={img}
            className={classesImg}
          />
        )}
        <div className={cardBodyClasses + " px-4 pt-1"}>
          <Heading level="h3">{title}</Heading>
          <Text>{description}</Text>
        </div>
        <footer className={cardFooterClasses + " p-4"}>
          <Button asChild variant="secondary" radius="rounded_md">
            <Link rel="noopener noreferrer" target="_blank" href={route}>
              Ver herramienta
              <ArrowRightIcon />
            </Link>
          </Button>
          {( github && <Button asChild variant="link">
            <Link rel="noopener noreferrer" target="_blank" href={github}>
              GitHub
            </Link>
          </Button>)}
        </footer>
      </article>
    );

    // Usar el prop cardType para determinar qué tipo de tarjeta renderizar
    switch (cardType) {
      default:
        return globalCard;
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
