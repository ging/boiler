"use client";
import * as React from "react";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import { Divider, DividerVariants } from "@/components/ui/divider";
import Text from "@/components/ui/Text";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from "@/components/ui/image";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CategoryIcon from '@mui/icons-material/Category';
import HubIcon from '@mui/icons-material/Hub';

import {
  CustomCard,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/customCard";

//Banner
import {
  Banner,
  BannerTitle,
  BannerDescription,
  BannerButton,
  BannerContent,
  BannerImg,
} from "@/components/core/Banner";

const iconCardClasses = clsx(
  "!h-20 fill-primary"
);

// UI
export default function Page() {
  //const [projects, setProjects] = useState(myprojectCards);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  // <p className="basis-3/4">{t("project.Intro.title")}</p>

  return (
    <main>
      <Banner>
        <BannerContent className={"w-full"}>
          <BannerTitle className={"text-white"}>{t("front.title")}</BannerTitle>
          <BannerDescription className="h-full text-balance flex flex-col gap-2">
            {t("front.description")}
              <Button asChild variant="link" className={"w-fit text-white"}>
                <Link rel="noopener noreferrer" target="_blank" href={"https://ging.github.io/boiler/documentation/"}>
                  {t("front.doc-button")}
                </Link>
            </Button>
          </BannerDescription>
          <Divider />
          <Button
            href="#"
            className={ButtonVariants({
              variant: "default",
              size: "lg",
              radius: "rounded_sm",
            })}
          >
            {t("front.action-button")} <ArrowForwardIcon className=" h-4 w-4" />
          </Button>
        </BannerContent>
        <Image className={"hidden md:flex"}
          src="placeholder.jpg"
          alt="Descripción de la imagen"
          fit="cover"
          hasBadge={false}
        />
      </Banner> 
      {/* <BannerPum></BannerPum> */}

      <section className="standard_padding">
        <Heading level="h3">{t("front.section1Title")}</Heading>
        <Text type="p"> {t("front.section1Description")}</Text>
        <Divider size="lg" />
        <Heading level="h3" className="mb-8">
          {t("front.ResearchLines.sectionTitle")}
        </Heading>
        {/* Cards con iconos */}
        <div className="h-fit flex flex-col sm:grid md:grid-cols-3 gap-6 mb-16">
          <div>
           <RocketLaunchIcon className="text-40 text-primary-500 mb-2" />
            <CardContent>
              <Heading level="h5" className="text-primary-500">
                {t("front.ResearchLines.ResearchLine1.ResearchLineTitle")}
              </Heading>
              <CardDescription>
                {t("front.ResearchLines.ResearchLine1.ResearchLineBody")}
              </CardDescription>
            </CardContent>
          </div>

          <div>
          <CategoryIcon className="text-40 text-primary-500 mb-2" />
          <Heading level="h5" className="text-primary-500">
                {t("front.ResearchLines.ResearchLine2.ResearchLineTitle")}
              </Heading>
              <CardDescription>
              {t("front.ResearchLines.ResearchLine2.ResearchLineBody")}
              </CardDescription>
          </div>

         <div>
         <HubIcon className="text-40 text-primary-500 mb-2" />
         <Heading level="h5" className="text-primary-500">
                {t("front.ResearchLines.ResearchLine3.ResearchLineTitle")}
              </Heading>
              <CardDescription>
              {t("front.ResearchLines.ResearchLine3.ResearchLineBody")}
              </CardDescription>
          </div>
        </div>
      </section>
    </main>
  );
}

const CreateLink = (props) => {
  return props.route.match("http") ? (
    <a target="_blank" href={props.route} rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link href={props.route}>{props.children}</Link>
  );
};
