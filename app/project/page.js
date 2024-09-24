"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "@/constants/projects.js";
import { useTranslation } from "react-i18next";
import { FaceIcon } from "@radix-ui/react-icons";

export default function Projects() {
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
          <h2 className="text-left">{t("project.Intro.sectionTitle")}</h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
            <p className="basis-3/4">{t("project.Intro.sectionBody")}</p>
            <h3 className="basis-1/4 font-semibold mt-4 md:mt-0 text-white">
              {t("project.Intro.sectionHighlight")}
            </h3>
          </div>
        </div>
      </section>

      <section className="standard_margin">
        <h2 className="text-left text-white">
          {t("project.Goals.sectionTitle")}
        </h2>
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 md:gap-6">
          <div className="card_goals bg-black text-center padding_card_highlight">
            <FaceIcon />
            <div>
              <h3> {t("project.Goals.Goal1.GoalTitle")}</h3>
              <p className=""> {t("project.Goals.Goal1.GoalBody")}</p>
            </div>
          </div>
          <div className="card_goals bg-black text-center padding_card_highlight">
            <FaceIcon />
            <div>
              <h3> {t("project.Goals.Goal2.GoalTitle")}</h3>
              <p className=""> {t("project.Goals.Goal2.GoalBody")}</p>
            </div>
          </div>
          <div className="card_goals bg-black text-center padding_card_highlight">
            <FaceIcon />

            <div>
              <h3> {t("project.Goals.Goal2.GoalTitle")}</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="subprojects standard_margin-y">
        <h2 className="text-left standard_margin-x mb-4 ">
          {t("project.Subprojects.sectionTitle")}
        </h2>
        <div className="flex flex-col sm:flex-row subprojects_container gap-0 sm:gap-16">
          <div className="standard_margin-l subproject text-ffdGreen-300 basis-6/12 py-3 sm:py-6 border-2 sm:border-4 border-solid border-transparent border-t-ffdGreen-400">
            <h3 className="mb-1">
              {t("project.Subprojects.Subproject1.Title")}
            </h3>
            <h5> {t("project.Subprojects.Subproject1.Subtitle")}</h5>
            <p> {t("project.Subprojects.Subproject1.Body")} </p>
            <button
              className="action_button margin_top_button text-ffdGreen-300 border-ffdGreen-300"
              onHoverStart={() => setIsHovered1(true)}
              onHoverEnd={() => setIsHovered1(false)}
            >
              <Link rel="noopener noreferrer" target="_blank" href="#">
                <span>{t("project.Subprojects.Subproject1.Button")}</span>
                <div
                  animate={{ x: isHovered1 ? 10 : 0 }} // Adjust '10' to the desired amount of movement
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ display: "inline-block", marginLeft: "8px" }} // Adjust 'marginLeft' for spacing
                >
                  <FaceIcon />
                </div>
              </Link>
            </button>
          </div>
          {/* <div className="divisor-container basis-2/12">
            {/* <img
              className=" divisor-partial"
              src="assets/img/divisor-partial.png"
            ></img> 
          </div> */}
          <div className="standard_margin-r subproject text-ffdBlue-300 basis-6/12 py-3 sm:py-6 border-2 sm:border-4 border-solid border-transparent border-t-ffdBlue-300">
            <h3 className="mb-1">
              {t("project.Subprojects.Subproject2.Title")}
            </h3>
            <h5> {t("project.Subprojects.Subproject2.Subtitle")}</h5>
            <p> {t("project.Subprojects.Subproject2.Body")} </p>
            <button
              className="action_button margin_top_button text-ffdBlue-300 border-ffdBlue-300"
              onHoverStart={() => setIsHovered2(true)}
              onHoverEnd={() => setIsHovered2(false)}
            >
              <Link rel="noopener noreferrer" target="_blank" href="#">
                <span>{t("project.Subprojects.Subproject2.Button")}</span>
                <div
                  animate={{ x: isHovered2 ? 10 : 0 }} // Adjust '10' to the desired amount of movement
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ display: "inline-block", marginLeft: "8px" }} // Adjust 'marginLeft' for spacing
                >
                  <FaceIcon />
                </div>
              </Link>
            </button>
          </div>
        </div>
      </section>
      
      <section className="highlight-section">
        <div className="standard_padding">
          <div className="flex flex-col sm:gap-4 md:gap-4">
            <h2 className="text-left">{t("project.Impact.sectionTitle")}</h2>
            <p className="sm:w-5/6">{t("project.Impact.sectionBody")}</p>
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
