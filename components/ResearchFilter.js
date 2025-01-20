"use client";

import React from "react";

import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";

import FilterText from "./FilterText";
import FilterDate from "./FilterDate";
import FilterCategory from "./FilterCategory";

export default function Filters({ search, changeSearch, year, changeYear, items, category, changeCategory, results, categories }) {
  const { t } = useTranslation();

  return (
    <div className="filters standard_margin ">
      <div className="filter-block flex flex-col md:flex-row gap_filter">
        <FilterText search={search} changeSearch={changeSearch} ></FilterText>
        {/* <div className="container_selects gap_div flex flex-row"> */}
       <div className="w-full md:w-1/2 flex gap_grid">
          <FilterCategory category={category} changeCategory={changeCategory} categories={categories} />
    
          <FilterDate items={items} year={year} changeYear={changeYear} />
          </div>
      </div>
      {results === undefined ? null : (
        <Badge className="research_results">
          <p className="">
            {" "}
            {t("research.filter.text")}
            <b> {results} </b>{" "}
          </p>
        </Badge>
      )}
    </div>
  );
}
