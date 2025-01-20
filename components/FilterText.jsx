"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useTranslation } from "react-i18next";


export default function FilterText( {search, changeSearch} ) {
  const { t } = useTranslation();
  return (
    <div className="filter flex flex-wrap md:w-1/2">
    <Label htmlFor="search">{t("research.filter.fieldTitle1")}</Label>
    <Input
      className="w-full"
      key={" "}
      type={"text"}
      value={search || ""}
      onChange={(e) =>
        changeSearch(
          e.target.value === "" ? undefined : e.target.value
        )
      }
    />
  </div>
  )
}
