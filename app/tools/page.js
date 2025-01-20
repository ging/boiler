"use client";

import Header from "@/components/core/Header";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
import image from "next/image";
import { useState, useEffect } from "react";
import { mytools } from "@/constants/tools";
import { useTranslation } from "react-i18next";
import FaceIcon from "@mui/icons-material/Face";
import { Card, CardVariants } from "@/components/core/Cards";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";


export default function Tools(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [tools, setTools] = useState([]);

  // Update tools when language changes
  useEffect(() => {
    const translatedTools = mytools.map(
      ({
        logo,
        route,
        title,
        translationKey,
        github,
        key,
        description,
      }) => ({
        title,
        logo,
        route,
        github,
        key,
        description: t(translationKey),
      })
    );
    setTools(translatedTools);
  }, [i18n.language, t]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"tools page_" + currentLang}>
      {/* <Header route="/tools" /> */}
      <div className="standard_margin ">
        <Heading level="h2">{t("tools.title")}</Heading>
        <Text type="p" className="pb-8 xs:p-6 md:p-0">{t("tools.description")}</Text>
      </div>
      <main>
        <section className="standard_margin">
          <div className="grid sm:gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 ">
              {tools.map( 
                ({ key, title, description, route, logo, github}) => {
                  return (
                    <Card
                      key={key}
                      title={title}
                      currentLang={currentLang}
                      cardType={"tool"}
                      className={CardVariants({variant: "tool"})}
                      description={description}
                      route={route}
                    ></Card>
                    //   <div className="tool" key={title}>
                    //     <div className={`tool_logo ${gradient}`}>
                    //       <img alt={"Project Logo"} src={logo} />
                    //     </div>

                    //     <div className="tool_content">
                    //       <div className="tool_title">
                    //         <h3>{title}</h3>
                    //       </div>
                    //       <div className="tool_description">
                    //         <p>{description}</p>
                    //       </div>
                    //       <div className="tool_button_container">
                    //         <button className="tool_button">
                    //           <CreateLink route={route}>
                    //             <FaceIcon />
                    //             <span> {t("tools.toolCards.button")}</span>
                    //           </CreateLink>
                    //         </button>
                    //         <button className="tool_github">
                    //           <CreateLink route={github}>
                    //             {/* <FontAwesomeIcon
                    //               className="mr-2 "
                    //               icon={faGithub}
                    //               size="lg"
                    //             /> */}
                    //             <span> Github </span>{" "}
                    //           </CreateLink>
                    //         </button>
                    //       </div>
                    //     </div>
                    //   </div>
                  );
                }
              )}
            </div>
        </section>
      </main>
    </div>
  );
}

const CreateLink = (props) => {
  return props.route.match(/^http/) ? (
    <a target="_blank" href={props.route} rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link to={props.route}>{props.children}</Link>
  );
};

{
  /* <CreateLink route={github}>
  <span> Github </span>{" "}
</CreateLink> */
}
