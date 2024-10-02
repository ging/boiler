"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "@/constants/projects.js";
import { useTranslation } from "react-i18next";
import { FaceIcon, FigmaLogoIcon, HeartIcon, Pencil2Icon, ScissorsIcon } from "@radix-ui/react-icons";
import Heading from "@/components/ui/Heading";
import { Button, ButtonVariants } from "@/components/ui/button";


export default function About() {
  // const [projects, setProjects] = useState(myprojectCards);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"projects page_" + currentLang}>
      <section className="parallax__layer standard_margin">
        <div className="flex flex-col sm:gap-4 md:gap-4">
          <Heading level="h3" className="text-left">{t("about.Intro.sectionTitle")}</Heading>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
            <p className="basis-3/4">{t("about.Intro.sectionBody")}</p>
            <Heading level="h5" className="basis-1/4 font-semibold mt-4 md:mt-0 ">
              {t("about.Intro.sectionHighlight")}
            </Heading>
          </div>
        </div>
      </section>

  
      <section className="standard_margin">
        <h2 className="text-left text-white">
          {t("about.Goals.sectionTitle")}
        </h2>
        <div className=" flex items-center sm:items-strech sm:justify-stretch flex-col sm:grid sm:grid-cols-3 gap-4 md:gap-6 mb-20">
          <div className="h-full  w-full xs:w-3/4 sm:w-full bg-secondary/40 shadow-md shadow-primary/15 rounded text-center padding_card_highlight">
      
            <span className="mx-auto w-12 bg-primary-300/80 rounded-full content-center flex justify-center items-center mb-3">
            <FigmaLogoIcon className="text-center p-3 justify-center h-12 w-12  text-primary" />
            </span>
            <div>
              <Heading level="h4"> {t("about.Goals.Goal1.GoalTitle")}</Heading>
              <p className=""> {t("about.Goals.Goal1.GoalBody")}</p>
            </div>
          </div>
          <div className="h-full w-full xs:w-3/4 sm:w-full bg-secondary/40 shadow-md shadow-primary/15 rounded text-center padding_card_highlight">
          
            <span className=" mx-auto w-12 bg-primary-300/80 rounded-full content-center flex justify-center items-center mb-3">
            <ScissorsIcon className="text-center p-3 justify-center h-12 w-12 text-primary" />
            </span>
            <div>
              <Heading level="h4"> {t("about.Goals.Goal2.GoalTitle")}</Heading>
              <p className=""> {t("about.Goals.Goal2.GoalBody")}</p>
            </div>
          </div>
          <div className="h-full w-full xs:w-3/4 sm:w-full bg-secondary/40 shadow-md shadow-primary/15 rounded text-center padding_card_highlight">
           
            <span className="mx-auto w-12 bg-primary-300/80 rounded-full content-center flex justify-center items-center mb-3">
            <HeartIcon className="text-center p-3 justify-center h-12 w-12 text-primary" />
            </span>
            <div>
              <Heading level="h4"> {t("about.Goals.Goal3.GoalTitle")}</Heading>
              <p className=""> {t("about.Goals.Goal3.GoalBody")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="subprojects standard_padding-y bg-secondary">
        <Heading level="h3" className="text-left standard_margin-x mb-4 ">
          {t("about.Columns.sectionTitle")}
        </Heading>
        <div className="flex flex-col sm:flex-row subprojects_container gap-0 sm:gap-16">
          <div className="standard_margin-l subproject text-ffdGreen-300 basis-6/12  border-2 sm:border-4 border-solid border-transparent border-t-ffdGreen-400">
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
            <Heading level="h3" className="text-left">{t("about.Impact.sectionTitle")}</Heading>
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
