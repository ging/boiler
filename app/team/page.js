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
      }) => {
        const emailAddress = email ? email.split("@") : null;
        const translatedRole = t(`${roleTranslationKey}`);
        const translatedPosition = t(position);
        return (
          <Card
            cardType={"team"}
            className={CardVariants({
              variant: "team",
            })}
            img={img}
            name={name}
            position={position}
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
        <Heading level="h1">{t("team.title")}</Heading>
        <section className="w-fit mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {team["UPM Team"]?.members ? renderMembers(team["UPM Team"].members) : <p>No members found.</p>}
        </section>
      </main>
    </main>
  );
}
