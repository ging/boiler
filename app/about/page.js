"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "@/constants/projects.js";
import { useTranslation } from "react-i18next";
import {
  FaceIcon,
  FigmaLogoIcon,
  HeartIcon,
  Pencil2Icon,
  ScissorsIcon,
} from "@radix-ui/react-icons";
import Heading from "@/components/ui/Heading";
import { Button, ButtonVariants } from "@/components/ui/button";
import {
  CustomCard,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/customCard";

export default function About() {
  // const [projects, setProjects] = useState(myprojectCards);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"projects page_" + currentLang}>
      {/* INTRO */}
      <section className="parallax__layer standard_margin">
        <div className="flex flex-col">
          <Heading level="h3" className="text-left">
            {t("about.Intro.sectionTitle")}
          </Heading>
          <div className="flex flex-col md:flex-row gap-4 lg:gap-12 items-start">
            <p className="basis-3/4">{t("about.Intro.sectionBody")}</p>
            <Heading
              level="highlight"
              className="basis-1/4 font-semibold mt-4 md:mt-0 text-primary"
            >
              {t("about.Intro.sectionHighlight")}
            </Heading>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="standard_margin">
        <Heading level="h3" className="text-left ">
          {t("about.Goals.sectionTitle")}
        </Heading>

        <div className="grid grid-cols-3 gap-8">
          <CustomCard className="shadow-md shadow-primary/15 rounded text-center padding_card_highlight">
              <FigmaLogoIcon className="mx-auto p-3 h-12 w-12 rounded-full bg-primary-300 text-primary" />
            <CardTitle level="h4">{t("about.Goals.Goal1.GoalTitle")}</CardTitle>
            <CardDescription>{t("about.Goals.Goal1.GoalBody")}</CardDescription>
          </CustomCard>

          <CustomCard className="shadow-md shadow-primary/15 rounded text-center padding_card_highlight">
              <ScissorsIcon className="mx-auto p-3 h-12 w-12 rounded-full bg-primary-300 text-primary"/>
            <CardTitle level="h4">{t("about.Goals.Goal2.GoalTitle")}</CardTitle>
            <CardDescription>{t("about.Goals.Goal2.GoalBody")}</CardDescription>
          </CustomCard>

          <CustomCard className="shadow-md shadow-primary/15 rounded text-center padding_card_highlight">
              <HeartIcon className="mx-auto p-3 h-12 w-12 rounded-full bg-primary-300 text-primary" />
            <CardTitle level="h4">{t("about.Goals.Goal3.GoalTitle")}</CardTitle>
            <CardDescription>{t("about.Goals.Goal3.GoalBody")}</CardDescription>
          </CustomCard>

          <CustomCard className="shadow-md shadow-primary/15 rounded text-center padding_card_highlight">
            <FigmaLogoIcon className="mx-auto p-3 h-12 w-12 rounded-full bg-primary-300 text-primary"/>
            <CardTitle level="h4">Título de la card</CardTitle>
            <CardDescription>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto.
            </CardDescription>
          </CustomCard>
        </div>
      </section>

      <section className="subprojects standard_padding-y bg-secondary-300">
        <Heading level="h3" className="text-left standard_margin-x mb-4 ">
          {t("about.Columns.sectionTitle")}
        </Heading>
        <div className="flex flex-col sm:flex-row subprojects_container gap-0 sm:gap-16">
          <div className="standard_margin-l pb-6 sm:pb-0 subproject text-ffdGreen-300 basis-6/12  border-2 sm:border-4 border-solid border-transparent border-t-ffdGreen-400">
            <Heading level="h5" className="mb-1">
              {t("about.Columns.Column1.Title")}
            </Heading>
            <h5> {t("about.Columns.Column1.Subtitle")}</h5>
            <p> {t("about.Columns.Column1.Body")} </p>
            <Button
              variant="outline"
              className="action_button margin_top_button mt-5 "

              // onHoverStart={() => setIsHovered1(true)}
              // onHoverEnd={() => setIsHovered1(false)}
            >
              <Link rel="noopener noreferrer" target="_blank" href="#">
                <span>{t("about.Columns.Column1.Button")}</span>
              </Link>
            </Button>
          </div>

          <div className="standard_margin-r subproject text-ffdBlue-300 basis-6/12  border-2 sm:border-4 border-solid border-transparent border-t-ffdBlue-300">
            <Heading level="h5" className="mb-1">
              {t("about.Columns.Column2.Title")}
            </Heading>
            <h5> {t("about.Columns.Column2.Subtitle")}</h5>
            <p> {t("about.Columns.Column2.Body")} </p>
            <Button
              variant="outline"
              className="action_button margin_top_button mt-5 "
            >
              <Link rel="noopener noreferrer" target="_blank" href="#">
                <span>{t("about.Columns.Column2.Button")}</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="highlight-section">
        <div className="standard_padding">
          <div className="flex flex-col sm:gap-4 md:gap-4">
            <Heading level="h3" className="text-left">
              {t("about.Impact.sectionTitle")}
            </Heading>
            <p className="sm:w-5/6">{t("about.Impact.sectionBody")}</p>
          </div>
        </div>
      </section>
    </div>
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
