"use client";

import clsx from "clsx";
import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";


import Heading from "../ui/Heading";
import { Badge, badgeVariants } from "../ui/badge";
import Text from "../ui/Text";
import { Button, ButtonVariants } from "../ui/button";
import Image from "../ui/image";
import { Divider } from "../ui/divider";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
// } from "@/components/ui/tooltip";
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/customCard";

import { useTranslation } from "react-i18next";
import { useState } from "react";


import {
  FaceIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ArticleIcon from '@mui/icons-material/Article';
import Link from "next/link";

const CardVariants = cva(
  "border border-primary min-w-20 p-4 sm:py-4 inline-flex flex-col gap-4 items-center whitespace-nowrap rounded-md font-body text-sm text-text drop-shadow-md hover:scale-[101%] transition-all overflow-hidden",
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


const returnPwidth = () => {
  const minWidth = 600;      // Ancho mínimo
  const maxWidth = 1600;     // Ancho máximo
  const minValue = 2.1;      // Valor mínimo (para 1600px y más)
  const maxValue = 2.4;      // Valor máximo (para 600px)

  const width = window.innerWidth;

  if (width <= minWidth) {
    return maxValue; // Si el ancho es <= 600, devuelve 2.4
  } else if (width >= maxWidth) {
    return minValue; // Si el ancho es >= 1600, devuelve 1.8
  } else {
    // Cálculo lineal entre 600 y 1600
    const ratio = (width - minWidth) / (maxWidth - minWidth);
    return maxValue - ratio * (maxValue - minValue);
  }
};

// VER MAS
const getIdealLength = () => {
  const isMobile = window.innerWidth <= 600;

  if (isMobile) {
    return (window.innerWidth) * 4;
  } else {
    return ((window.innerWidth / returnPwidth()) - 150) * 4;
  }
};

const calculateTextWidth = (description) => {
  if (typeof document === "undefined") {
    throw new Error("This function needs to run in a browser environment.");
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = "16px sans-serif";

  const characters = [...description];

  let totalWidth = 0;
  for (const letter of characters) {
    const letterWidth = context.measureText(letter).width;
    totalWidth += letterWidth;
  }
  return totalWidth;
};
const isDescriptionLongEnough = (description) => {
  return calculateTextWidth(description) >= getIdealLength();
};

const deleteSpaces = (string) => {
  let cleanStr = ''
  for (const char of [...string]) {
    if (char != ' ') {
      cleanStr += char;
    }
  }
  return cleanStr
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
      description_en,
      description_es,
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
      researchLine,
      logo,
      projectType = "european-project",
      keywords,
      researchgate,
      orcid,
      webOfScience,
      googleScholar,
      linkedin,
      portalUpm
    },
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    // PARA PROJECTCARD / teamcard
    // Manejo de estado para ver si se ha expandido el "ver más" del texto
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleDescription = () => {
      setIsExpanded((prevState) => !prevState); // Alterna entre true y false,
    };

    //elegir description o description_es según el currentLang
    let description_translation = description_en;
    if (currentLang == "es" && description_es) {
      description_translation = description_es;
    }

    // fondo researchline cards - project cards
    let backgroundColor;

    //si tiene más de una researchline le ponemos all al link a las publicaciones
    let pubResearchLine = "all";
    if (researchLine && researchLine.length == 1) {
      pubResearchLine = researchLine[0];
    }

    // PROJECT
    const projectCard = (
      <CustomCard className={cn(CardVariants({ direction, className })) + " hover:scale-[100%] border-transparent shadow-none border-b-gray-400 border-b-1 rounded-none flex-col sm:flex-row gap-3 sm:gap-6 px-0 py-6 items-start"}>
        <div className={`w-full h-fit relative sm:self-stretch sm:w-1/2 flex min-w-[184px] sm:min-h-[200px] sm:h-[237px] sm:max-h-[237px] justify-center items-center ${backgroundColor} rounded-md `}>
          <Image className="brightness-0 invert min-h-[160px]" src={logo} fit="contain"
            layout={"bottom-right"}
            hasBadge={true}
            badgeVariant={"secondary"}
            badgeSize={"md"}
            badgeContent={t(`projects.type.${projectType}`)}
          />

        </div>

        <CardBody className="">
          <CardContent className="gap-5 mt-0.5 lg:mt-0 lg:gap-[22px]">
            {/* lg:gap-[22px] */}
            <div>
              <CardTitle level="h3" className=" w-fit hover:text-blue-400 transition-all mb-0">
                {title && <Link href={route} rel="noopener noreferrer"
                  target="_blank" className={`flex flex-row w-fit gap-2 ${title.length > 18 ? "items-start" : "items-center"}`}>{title} <ExternalLinkIcon className="mt-1 flex-shrink-0" width={24} height={24} /> </Link>
                }
              </CardTitle>

              {description_translation && 
              <div className="flex flex-col gap-1"> 
                <CardDescription className={isExpanded ? "line-clamp-none" : "line-clamp-4"}>{description_translation}

                </CardDescription>
                {isDescriptionLongEnough(description_translation) && <a className="cursor-pointer font-bold underline underline-offset-2" onClick={toggleDescription} > {isExpanded ? t(`projects.card.toggleLess`) : t(`projects.card.toggleMore`)}</a>}
              </div>}
            </div>

          </CardContent>

        </CardBody>

      </CustomCard>
    );

    // COURSE
    const courseCard = (
      <CustomCard
        className={cn(CardVariants({ direction, className }))}
        style={{
          backgroundImage: "url('assets/fondos/background_image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
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
        {/* <Image
            className={"h-40"}
            src={img || "placeholder.jpg"} // La imagen por defecto será una cadena vacía si no hay src
            alt={title || "Image"} // Usa el título como alt si existe
            fit="cover" // Ajustamos el contenido al contenedor
          /> */}
        <CardBody>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle level="h6">{subtitle}</CardSubtitle>
            <CardDescription>{description}</CardDescription>
            {/* <div className={tagContainerClasses}>{renderTags(tags)}</div> */}
          </CardContent>
        </CardBody>
      </CustomCard>
    );

    // PUBLICATIONS - ok
    const publicationCard = (
      <CustomCard
        className={cn(
          CardVariants({ direction, className }) + "  bg-background-300 border-none shadow-md"
        )}
      >
        <CardHeader>
          <Badge variant="outline" size="lg">
            {date && date[0]}
            
          </Badge>
          <Badge variant="outline" size="lg">
            {category}
          </Badge>
        </CardHeader>
        <CardBody>
          <CardContent className="gap-1">
            <CardTitle level="title-sm">
              {title}
            </CardTitle>
            {/* <div className="flex"> <Text type="small" className="font-bold">
            {t(`research.filter.${category}`)}</Text>
              <div className="mx-2 mb-2">·</div> 
                <Text type="small">    {date && date[0]} </Text> 
              </div> */}
            <Text className="text-gray-300/90 mb-4" type="small">{author}</Text>
            <div className="flex flex-wrap gap-1.5">
              {Array.isArray(keywords) ? keywords.map((keyword, index) => {
                return (
                  <Badge key={index} size="default" className="bg-black border-none text-gray-300"> {keyword} </Badge>
                )
              }) : null}
            </div>

          </CardContent>
        </CardBody>
        <CardFooter>
          {doi ? (
            <Button asChild variant="outline" size="sm" radius="rounded_sm">
              <Link rel="noopener noreferrer" target="_blank" href={doi}>
                {t("research.button")}

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
        className="w-80 bg- transparent border-none shadow-none 300/60 h-86  items-start"
      >
        {(img || svg) && (

          <div className="relative h-[160px] w-[160px]">
            <div className="absolute h-[160px] w-[160px]  rounded-full bg-blue-700 opacity-30"></div>
            <img src={img || "placeholder.jpg"}
              className={"absolute h-[160px] w-[160px] rounded-full object-cover saturate-0  mix-blend-lighten"}
            >
            </img>
          </div>
        )}
        {(name || description || email) && (
          <CardContent className="flex justify-center items-start mb-auto">
            <div className="flex flex-row">
              <CardTitle level="title-sm" className={"text-inherit text-center"}>
                <b>{name} </b>
              </CardTitle>
              {/* {position && (<Badge> {position}</Badge>)} */}
            </div>
            {role && <CardDescription type="short-p">{role}</CardDescription>}
            {email && (
              <Badge size="sm" variant="secondary"
                className={"font-semibold break-words text-wrap mt-1 text-gray-300 bg-background-300"}>
                <MailOutlinedIcon className=" text-gray-300 mr-1"  sx={{ fontSize: 16 }}/>
                {email}
              </Badge>
            )}
            <Divider></Divider>
            <Text type="small" className="pb-3">
              <p className={isExpanded ? "line-clamp-none text-white" : "line-clamp-4 text-white"}>{description_translation}</p>
              <a className="cursor-pointer font-bold hover:text-blue-300  text-white underline underline-offset-2" onClick={toggleDescription}>
                {isExpanded ? t(`projects.card.toggleLess`) : t(`projects.card.toggleMore`)}
              </a>
            </Text>
            
            <div className="flex gap-2 mt-3">
              {researchgate && <Link target="_blank" href={researchgate}
                className={" icon_link_publication relative text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-blue-600 hover:bg-blue-700 "}>
                  <img className="h-5 max-w-5 contrast-200 saturate-50"  src="/assets/img/logos/researchgate.png"/>
                  <Badge variant="secondary" size="xs" className="link_publication bg-[#00000097] absolute left-0 bottom-7">   ResearchGate </Badge>   

                </Button>
                
              </Link>}
              {orcid && <Link target="_blank" href={orcid}
                className={" icon_link_publication relative text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-green-600 hover:bg-green-700 "}>
                  <img className="h-7 max-w-7"  src="/assets/img/logos/orcid-1.png"/>
                  <Badge variant="secondary" size="xs" className="link_publication shadow-lg bg-[#00000097] absolute left-0 bottom-7">   Orcid </Badge>   
                </Button>
              </Link>}
              {/* {webOfScience && <Link target="_blank" href={webOfScience}
                className={"text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-green-700 hover:bg-green-800 "}>
                  <img className="h-5 max-w-5"  src="/assets/img/logos/researchgate.png"/>
                </Button>
              </Link>} */}
              {googleScholar && <Link target="_blank" href={googleScholar}
                className={" icon_link_publication relative text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-blue-800 hover:bg-blue-900 "}>
                  <img className="h-7 max-w-7 rounded-full"  src="/assets/img/logos/google-scholar.png"/>
                  <Badge variant="secondary" size="xs" className="link_publication bg-[#00000097] absolute left-0 bottom-7"> Google Scholar </Badge>   
                </Button>
              </Link>}
              {linkedin && <Link target="_blank" href={linkedin}
                className={" icon_link_publication relative text-left h-7 max-w-7 mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-[#006198] hover:bg-[#006198] "}>
                 <img className="h-[28px] rounded-full max-w-[28px] object-scale-down "  src="/assets/img/logos/linkedin.png"/>
                 <Badge variant="secondary" size="xs" className="link_publication bg-[#00000097] absolute left-0 bottom-7"> LinkedIn </Badge>   
                </Button>
              </Link>}
              {portalUpm  && <Link target="_blank" href={portalUpm}
                className={"icon_link_publication relative text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
                <Button href="#" className={ButtonVariants({
                  variant: "default",
                  size: "icon",
                  radius: "rounded_full",
                }) + " bg-blue-600 hover:bg-blue-700 "}>
                  <p className="text-2xs font-bold"> UPM </p>
                  <Badge variant="secondary" size="xs" className="link_publication bg-[#00000097] absolute left-0 bottom-7"> Portal Científico UPM </Badge>   
                </Button>
              </Link>}
            </div>
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
            src={/* process.env.PUBLIC_URL */ +img || "placeholder.jpg"}
            alt={/* process.env.PUBLIC_URL */ +img || "placeholder.jpg"}
            className={"h-24"}
            fit="contain"
          />
        )}
        <CardBody>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </CardBody>
        <CardFooter>
          {github && (
            <Button asChild variant="link">
              <Link rel="noopener noreferrer" target="_blank" href={github}>
                GitHub
              </Link>
            </Button>
          )}
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
      case "researchline":
        return researchLineCard;
    }
  }
);

Card.displayName = "Card";

export { Card, CardVariants };
