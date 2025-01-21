"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import RecentPublications from "@/components/RecentPublications";
import Text from "@/components/ui/Text";
import { Card, CardVariants } from "@/components/core/Cards";
// import { Label } from "@radix-ui/react-label";
import { Badge, badgeVariants } from "@/components/ui/badge";
import TabsCategoryFilter from "@/components/TabsCategoryFilter";
import { FaceIcon } from "@radix-ui/react-icons";

//Array de datos (cards)
import { publications } from "@/constants/publications";
import { projects } from "@/constants/projects";

export default function DesignSystem (props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  //  Funcion y array de categorias de Tabs
  const [filteredCards, setFilteredCards] = useState(publications);

  return (
    <main className={"page_" + currentLang + " standard_margin"}>
      <Heading level="h2">Sistema de diseño</Heading>

      <Heading level="h3">Botones</Heading>
      {/* Variant */}
      <Heading level="h5">Variante</Heading>
      <div className="flex flex-wrap gap-4 pb-8">
        <Button href="#" variant="default" size="default" radius="rounded_sm">
          Botón Default
        </Button>
        <Button href="#" variant="secondary" size="default" radius="rounded_sm">
          Botón Secondary
        </Button>
        <Button href="#" variant="outline" size="default" radius="rounded_sm">
          Botón Outline
        </Button>
        <Button href="#" variant="ghost" size="default" radius="rounded_sm">
          Botón Ghost
        </Button>
        <Button href="#" variant="link" size="default" radius="rounded_sm">
          Botón Link
        </Button>
      </div>

      {/* Size */}
      <Heading level="h5">Tamaño</Heading>
      <div className="flex flex-wrap gap-4 pb-8">
        <Button href="#" variant="default" size="lg" radius="rounded_sm">
          Botón lg <FaceIcon />
        </Button>
        <Button href="#" variant="default" size="default" radius="rounded_sm">
          Botón Default <FaceIcon />
        </Button>
        <Button href="#" variant="default" size="sm" radius="rounded_sm">
          Botón sm <FaceIcon />
        </Button>
      </div>

      {/* RADIUS */}
      <Heading level="h5">Radius</Heading>
      <div className="flex flex-wrap gap-4 pb-8">
        <Button href="#" variant="default" size="default" radius="rounded_sm">
          Radius sm
        </Button>
        <Button href="#" variant="default" size="default" radius="rounded_md">
          Radius md
        </Button>
        <Button href="#" variant="default" size="default" radius="rounded_lg">
          Radius lg
        </Button>
        <Button href="#" variant="default" size="default" radius="rounded_full">
          Radius full
        </Button>
      </div>
      <Heading level="h3">Badges</Heading>
      <Heading level="h5">Variant</Heading>
      <div className="flex flex-wrap gap-4 pb-8">
        <Badge href="#" variant="default">
          badge default
        </Badge>
        <Badge href="#" variant="secondary">
          badge secondary
        </Badge>
        <Badge href="#" variant="outline">
          badge outline
        </Badge>
      </div>

      {/* badge sizes */}
      <Heading level="h5">Size</Heading>
      <div className="flex flex-wrap gap-4 pb-8">
        <Badge href="#" size="lg">
          badge lg
        </Badge>
        <Badge href="#" size="default">
          badge default
        </Badge>
        <Badge href="#" size="sm">
          badge sm
        </Badge>
      </div>

      {/* cards */}
      <Heading level="h3">Cards</Heading>
      <section className="cards grid md:grid-cols-2 gap-4">
        Wip...
        {/* {projects.map(
          ({
            id,
            date,
            route,
            title,
            tags,
            // category,
            // name,
            // position,
            researchLine,
          }, i) => {
            return (
              <Card
                key={i}
                className={CardVariants({})}
                // date={date}
                title={title}
                subtitle={description}
                // tags={tags}
                // category={category}
                buttonText={"texto del botón"}
              ></Card>
            );
          }
        )} */}
      </section>

      <Heading level="h3" className={"mt-8"}>
        Cards predefinidas
      </Heading>
      <section className="cards grid md:grid-cols-2 gap-4 mt-4">
        <Card
          cardType={"project"}
          date={"fecha"}
          title={
            "Project. Utilización de escape rooms y videojuegos educativos en la Educación Universitaria"
          }
          subtitle={"E.T.S DE ING. DE SISTEMAS INFORMÁTICOS"}
          tags={
            "Aprendizaje Activo, Aprendizaje Autónomo, Investigación educativa, Aula Invertida, Gamificación"
          }
          description={
            "Las tecnologías de React y React Native son una manera novedosa y muy potente de desarrollar aplicaciones de cliente, tanto aplicaciones web como aplicaciones nativas Android e iOS. Son una de las tecnologías más demandadas en el mercado laboral hoy en día, y este curso te permitirá dominarlas y hacer tus propias aplicaciones de forma autónoma."
          }
          route={
            "https:innovacioneducativa.upm.es/mooc/informacion-mooc?idmooc=356"
          }
          category={"categoría"}
          buttonText={""}
        ></Card>

        <Card
          cardType={"course"}
          date={"2023"}
          title={"Course. Desarrollo de aplicaciones con React y React Native"}
          subtitle={"2nd Edition"}
          description={
            "Las tecnologías de React y React Native son una manera novedosa y muy potente de desarrollar aplicaciones de cliente, tanto aplicaciones web como aplicaciones nativas Android e iOS. Son una de las tecnologías más demandadas en el mercado laboral hoy en día, y este curso te permitirá dominarlas y hacer tus propias aplicaciones de forma autónoma."
          }
          tags={"React, Desarrollo web, Front-End"}
          category={"MOOC"}
          buttonText={"curso"}
        ></Card>

        <Card
          cardType={"publication"}
          date={"2024"}
          title={
            "Pub. Empowering Database Learning through Remote Educational Escape Rooms"
          }
          author={
            "Enrique Barra, Sonsoles López-Pernas, Aldo Gordillo, Alejandro Pozo Huertas, Jose Muñoz, and Javier Conde"
          }
          tags={"tag, tag, tag, tag"}
          category={"article-journal"}
          doi={"https:doi.org/10.1016/j.entcom.2023.100588"}
          buttonText={"leer publicación"}
        ></Card>

        <Card
          cardType={"tool"}
          img={"assets/img/courses/fondo-cursos.png"}
          title={"Tool. Card de herramienta"}
          description={"descripción de la herramienta"}
          route={"https:github.com/agordillo/RESCORM"}
          github={"https:github.com/agordillo/RESCORM"}
        ></Card>

        <Card
          cardType={"team"}
          date={"2024"}
          name={"Team. Nombre Apellidos"}
          position={"Eadasdasde"}
          tags={"Database, Learning, Remote, Education"} //Tags separados por comas
          category={"article-journal"} //Categoría, será traducida a "artículo de revista"
          img="placeholder.jpg"
          URL
          de
          la
          imagen
          svg={`<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="blue" /></svg>`} //Código SVG
        />
      </section>
      <section>
        <Heading level="h3" className={"mt-12"}>
          Tabs{" "}
        </Heading>

        {/* Pasa las categorías y las tarjetas al componente Tabs */}
        <TabsCategoryFilter cards={publications} onFilter={setFilteredCards} />

        <div className="project_cards my-4 sm:my-6 lg:my-10 sm:grid sm:grid-cols-2 sm:gap-4">
          Wip...
          {/* {filteredCards.map(
            (
              { date, title, author, doi, description, category },
              index
            ) => (
              <Card
                key={index}
                cardType={"publication"}
                date={date}
                author={author}
                category={category}
                title={title}
                description={description}
                //  tags={tags}
                doi={doi}
              ></Card>
            )
          )} */}
        </div>
      </section>

      <Heading level="h3">Recent publications</Heading>
      <RecentPublications />

      <Heading level="h3" className={"border-t-2 border-t-primary pt-2 mt-4"}>
        Jerarquías de textos
      </Heading>

      <Heading level="h2">Títulos de 1er nivel</Heading>
      <Text type="p"></Text>

      <Heading level="h2">Títulos de 2o nivel</Heading>
      <Text type="p"></Text>

      <Heading level="h3">Títulos de 3er nivel</Heading>
      <Text type="p"></Text>

      <Heading level="h4">Títulos de 4o nivel</Heading>
      <Text type="p"></Text>

      <Heading level="h5">Títulos de 5o nivel</Heading>
      <Text type="p"></Text>

      <Heading level="h6">Títulos de 6º nivel</Heading>
      <Text type="p"></Text>

      <Text type="p">jerarquías de textos</Text>
      <Text type="small">jerarquías de textos</Text>
    </main>
  );
}
