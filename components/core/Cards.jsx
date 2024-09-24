"use client";

import clsx from "clsx";
import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

import Heading from "../ui/Heading";
import { Badge } from "../ui/badge";
import Text from "../ui/Text";
import { Button } from "../ui/button";
import {
  FaceIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const CardVariants = cva(
  "h-full min-w-20 p-4 inline-flex flex-col gap-4 items-center justify-between whitespace-nowrap rounded-md font-body text-sm text-primary drop-shadow-md hover:scale-[101%] transition-all overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white shadow hover:bg-primary/40",
        project:
          "bg-green-50 border border-input shadow-sm hover:bg-accent hover:text-white",
        course: "bg-purple-50",
        publication: "bg-blue-50 shadow-sm hover:bg-destructive/90",
        team: "p-0 bg-snow border border-input shadow-sm hover:scale-[101%]",
        tool: "p-0 bg-yellow-50 shadow-sm hover:bg-secondary/10",
      },
      direction: {
        default: "flex flex-col", // horizontal
        vertical: "flex",
      },
    },
    defaultVariants: {
      variant: "default",
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
    <Badge key={index}>{tag}</Badge> // Añade una key a cada Label
  ));
};

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
    },
    ref
  ) => {
    const globalCard = (
      <article className={cn(CardVariants({ variant, direction, className }))}>
        {/* card header */}
        {(date || category) && (
          <header className="w-full flex gap-4 justify-start">
            <Badge variant="outline" size="lg">
              {date}
            </Badge>
            <Badge variant="outline" size="lg">
              {category}
            </Badge>
          </header>
        )}
        {/* card image */}
        {img && (
          <img
            src={/* process.env.PUBLIC_URL */ +img}
            alt={img}
            className={classesImg}
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
      <article className={cn(CardVariants({ variant, direction, className }))}>
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
      <article className={cn(CardVariants({ variant, direction, className }))}>
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
      <article className={cn(CardVariants({ variant, direction, className }))}>
        <header className="w-full flex gap-4 justify-start">
          <Badge variant="outline" size="lg">
            {date}
          </Badge>
          <Badge variant="outline" size="lg">
            {category}
          </Badge>
        </header>
        <div className={cardBodyClasses}>
          <Heading level="h3">
            <i>{title}</i>
          </Heading>
          <Heading level="h5">{author}</Heading>
        </div>
        <footer className={cardFooterClasses}>
          {doi ? (
            <Button asChild variant="secondary" radius="rounded_md">
              <Link rel="noopener noreferrer" target="_blank" href={doi}>
                Leer publicación
                {/* {t("publications.button")} */}
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
          cn(CardVariants({ variant, direction, className })) + " mx-auto w-60"
        }
      >
        {img && (
          <img
            src={/* process.env.PUBLIC_URL */ +img}
            alt={img}
            className={classesImg + " w-full min-h-40"}
          />
        )}
        {(name || position || description || email) && (
          <div className="p-4 h-full w-full flex flex-col justify-between items-center">
            <Heading level="h3" className={"text-inherit text-center"}>
              {name}
            </Heading>
            <Heading level="h5">{position}</Heading>
            {email && <Text>{email}</Text>}
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
      <article className={cn(CardVariants({ variant, direction, className }))}>
        {img && (
          <img
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
