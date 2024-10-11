"use client";

import { useEffect, useState } from "react";
import { myteam } from "@/constants/team";
import { useTranslation } from "react-i18next";

// Components
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { Card, CardVariants } from "@/components/core/Cards";
import { CardStackIcon } from "@radix-ui/react-icons";


export default function Team(props) {
  const [team, setTeam] = useState(myteam);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderMembers = (members) => {
    return members.map(
      ({
        name,
        description,
        position,
        img,
        github,
        email,
        center,
        roleTranslationKey,
      }, key) => {
        const emailAddress = email ? email.split("@") : null;
        const translatedRole = t(`${roleTranslationKey}`);
        const translatedPosition = t(position);
        return (
          <Card
            key={key}
            cardType={"team"}
            className={CardVariants({
              variant: "team",
            })}
            img={img}
            name={name}
            position={position}
            role={translatedRole}
            center={center}
            email={email}
          ></Card>
        );
      }
    );
  };

  return (
    <main className={"team page_" + currentLang }>
      {/* <Header route={"/team"} />   */}
      <main className="standard_margin">
        <Heading level="h2">{t("team.title")}</Heading>
        {/* <section className="mx-auto grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> */}
        <section className="mx-auto flex flex-wrap gap-8 justify-center">
          {team["UPM Team"]?.members ? renderMembers(team["UPM Team"].members) : <p>No members found.</p>}
        </section>
      </main>
    </main>
  );
}
