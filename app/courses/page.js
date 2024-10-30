"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mycourses } from "@/constants/courses.js";
import { useTranslation } from 'react-i18next';
import { Card, CardVariants } from "@/components/core/Cards";


export default function Courses() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [courses, setCourses] = useState(mycourses);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className={"courses page_"+ currentLang}>
      {/* <Header route={"/courses"} /> */}
      <div className="banner px-4 sm:px-8 md:px-14 md:py-2 lg:px-24 lg:py-4 xl:px-28 xl:py-4 2xl:px-32 2xl:py-6">
        <h1>{t('courses.title')}</h1>
      </div>
      <main>
        <section className="lg:mx-36 md:mx-14 sm:mx-8 mx-4 my-4 sm:my-4 md:my-8 lg:my-12 xl:my-16 2xl:my-20 xl:mx-44 2xl:mx-60">
          <div className="courses_description text-slate-700 pb-8">
            <p>{t('courses.desc')}</p>
          </div>
          <div className=" grid gap-4 md:grid-cols-2 sm:grid-cols-1">
            {courses.map(({ date, edition, title, description, route }, key) => {
              return (
                <Card
                  key={key}
                  cardType={"course"}
                  date={date}
                  title={title}
                  subtitle={"edition " + edition}
                  description={description}
                  category={"MOOC"}
                  buttonText={"curso"}
                  href={route}
                />
              );
            })}
          </div>
        </section>
      </main>
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
