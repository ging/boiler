"use client";

import { useTranslation } from "react-i18next";
// import TabsResearchLineFilter from "@/components/filters/TabsResearchLineFilter";
import { projects } from "@/constants/projects";
import { Card } from "@/components/core/Cards";
// import { researchlines } from "@/constants/researchlines";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text"
// import ProjectsFilter from "@/components/filters/ProjectsFilter"
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Suspense } from 'react';


export default function Projects() {
  return (
    <Suspense>
      <ProjectsPage />
    </Suspense>
  );

}



function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const router = useRouter(); // Hook para manipular la URL
  let searchParams = useSearchParams(); 

  const [researchLine, setResearchLine] = useState("all");
  const [projectType, setProjectType] = useState(undefined);
  const [search, setSearch] = useState("");

  const pathname = "/projects";
  
//   // creado array de categorías de publications 
//   const projectTypes = ["all",...new Set(projects.map(project => project.projectType))];

//   // 2. Agregar objeto "all", que sería "todas las líneas de inv."
//   let researchLines = ["all", ...researchlines];

//   //actualizar la URL cuando cambia algo en el estado, usamos router.push
//   useEffect(() => {
//     let query = {};
//     if (search) query.search = search;
//     if (projectType) query.category = projectType;
//     if (researchLine) query.researchline = researchLine;
 
//     router.push(`${pathname}/?${new URLSearchParams(query).toString()}`, undefined);
//   }, [search, projectType, researchLine]);
  

//   // función para obtener todos los parámetros de la URL
//   useEffect(() => {
//     let researchLineURL = searchParams.get('researchline');    
//     console.log("researchLineURL: " + researchLineURL);
//     setResearchLine(researchLineURL);

//     let searchURL = searchParams.get('search');
//     console.log("searchURL: " + searchURL);
//     setSearch(searchURL);

//     let projectTypeURL = searchParams.get('category');
//     console.log("projectType: " + projectTypeURL);
//     setProjectType(projectTypeURL);

//   }, []);

//   // Filtrar los proyectos por línea de investigación
//   const filteredItems = projects.filter(

//     (item) => 
      
//       (!search ||
//         search
//           .toLowerCase()
//           .replace(new RegExp(/\s/g), "")
//           .replace(new RegExp(/[àáâãäå]/g), "a")
//           .replace(new RegExp(/æ/g), "ae")
//           .replace(new RegExp(/ç/g), "c")
//           .replace(new RegExp(/[èéêë]/g), "e")
//           .replace(new RegExp(/[ìíîï]/g), "i")
//           .replace(new RegExp(/ñ/g), "n")
//           .replace(new RegExp(/[òóôõö]/g), "o")
//           .replace(new RegExp(/œ/g), "oe")
//           .replace(new RegExp(/[ùúûü]/g), "u")
//           .replace(new RegExp(/[ýÿ]/g), "y")
//           .replace(new RegExp(/\W/g), "")
//           .split(" ")
//           .every((i) =>
//             item.title
//               .toLowerCase()
//               .replace(new RegExp(/\s/g), "")
//               .replace(new RegExp(/[àáâãäå]/g), "a")
//               .replace(new RegExp(/æ/g), "ae")
//               .replace(new RegExp(/ç/g), "c")
//               .replace(new RegExp(/[èéêë]/g), "e")
//               .replace(new RegExp(/[ìíîï]/g), "i")
//               .replace(new RegExp(/ñ/g), "n")
//               .replace(new RegExp(/[òóôõö]/g), "o")
//               .replace(new RegExp(/œ/g), "oe")
//               .replace(new RegExp(/[ùúûü]/g), "u")
//               .replace(new RegExp(/[ýÿ]/g), "y")
//               .replace(new RegExp(/\W/g), "")
//               .includes(i)
//           )) &&
//       (!researchLine || (researchLine === "all" || item.researchLine.includes(researchLine))) &&
//     (!projectType || (item.projectType && item.projectType === projectType))
//   );
//   console.log(filteredItems.map(filteredItem => filteredItem ));
  return (
      <div>
        <div className="standard_margin" id="banner-publications">
        <Heading level="h2">{t("projects.title")}</Heading>
          <Text type="p">
            {t("projects.description")}
          </Text>
          </div>
      <div>
    
        <div className="flex flex-col justify-center">
        {/* <ProjectsFilter 
          researchLines={researchLines} 
          researchLine={researchLine}
          projectType={projectType} 
          projectTypes={projectTypes}
          search={search}
          changeProjectType={(projectType) => setProjectType(projectType)} 
          changeResearchLine={(researchLine) => setResearchLine(researchLine)}
          changeSearch={(search) => setSearch(search)} 
          pathname={pathname}
        /> */}
        
        </div>
        <div className="project_cards standard_margin my-4 sm:my-6 lg:my-10 sm:gap-4">
          {projects.map(
            (
              {
                year,
                title,
                description,
                description_es,
                researchLine,
                logo,
                route,
                projectType
              },
              index
            ) => (
              <Card
                key={index}
                cardType={"project"}
                year={year}
                researchLine={researchLine}
                title={title}
                logo={logo}
                route={route}
                description_en={description}
                description_es={description_es}
                projectType={projectType}
              ></Card>
            )
          )}
        </div>
      </div>
      </div>
  );
}
