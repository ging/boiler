"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import RecentPublications from "@/components/RecentPublications";
import Text from "@/components/ui/Text";
import { Card, CardVariants } from "@/components/core/Cards";
import { Label } from "@radix-ui/react-label";
import { Badge, badgeVariants } from "@/components/ui/badge";
import TabsCategoryFilter from "@/components/TabsCategoryFilter";

// Array de datos (cards)
import { projects } from "@/constants/projects";
import { publications } from "@/constants/publications";


export default function Documentation(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <main className={"page_" + currentLang + " standard_margin"}>


      <Heading level="h3">Documentación</Heading>


     
    </main>
  );
}
