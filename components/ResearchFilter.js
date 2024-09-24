"use client";

import React from "react";

import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";

import FilterText from "./FilterText";
import FilterDate from "./FilterDate";
import FilterType from "./FilterCategory";

export default function Filters({search, changeSearch, year, changeYear, items, category, changeCategory, results, categories }) {
  const { t } = useTranslation();

  return (
    <div className="filters standard_margin-xl-x">
      <FilterText search={search} changeSearch={changeSearch} ></FilterText>
      <div className="container_selects gap_div flex flex-row">
        <div className="container_select_label w-1/2">
          <FilterType category={category} changeCategory={changeCategory} categories={categories}/>
        </div>
        <div className="container_select_label w-1/2">
       <FilterDate items={items} year={year} changeYear={changeYear}/>
      </div>
      </div>
      {results === undefined ? null : (
        <Badge className="research_results">
          <p className="">
            {" "}
            {t("publications.filter.text")}
            <b> {results} </b>{" "}
          </p>
        </Badge>
      )} 
    </div>
  );
}
