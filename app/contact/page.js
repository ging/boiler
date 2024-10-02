"use client";

import { useTranslation } from "react-i18next";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { MobileIcon } from "@radix-ui/react-icons";
import { SewingPinIcon } from "@radix-ui/react-icons";
import { FaceIcon } from "@radix-ui/react-icons";

export default function Contact(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <div className={"about page_" + currentLang}>
      {/* <Header route={"/about"} /> */}

      <main className="standard_padding ">
        <div className="banner py-8">
          <Heading level="h2">
            {t("contact.title")}
          </Heading> 

          <Text type="p">
          {t("contact.body")}
          </Text>
        </div>
        <section>
          <div>
            <ul className="contact_info grid grid-cols-1 gap-8 pb-8 lg:grid-cols-3 lg:pb-0">
              <li className="text-center min-h-40 shadow-md py-6 border rounded border-secondary">
                <div className="flex flex-col gap-2 ">
                  <span className="content-center flex justify-center items-center">
                  <EnvelopeClosedIcon className=" h-7 w-7 text-primary" />
                  </span>
                  <div>
                  <Heading level="h5">
                  {t("contact.email")}
                  </Heading>
                  <Text type="p">correo@grupo.es</Text>
                  </div>
                </div>
              </li>
              <li className="text-center min-h-40 shadow-md py-6 border rounded border-secondary">
                <div className="flex flex-col gap-2 ">
                  <span className="content-center flex justify-center items-center">
                  <MobileIcon className=" h-7 w-7 text-primary" />
                  </span>
                  <div>
                  <Heading level="h5">
                  {t("contact.phone")}
                  </Heading>
                  <Text type="p"> +34 XX XXX XX XX</Text> 
                  </div>
                </div>
              </li>
              <li className="text-center min-h-40 shadow-md py-6 border rounded border-secondary">
                <div className="flex flex-col gap-2 ">
                  <span className="content-center flex justify-center items-center">
                  <SewingPinIcon className=" h-7 w-7 text-primary" />
                  </span>
                  <div>
                  <Heading level="h5">
                  {t("contact.location")}
                  </Heading>
                  <Text type="p" className={"pb-1"} > {t("contact.direction1")} <br /> </Text>
                  <Text type="small" className={"block leading-5"}>  {t("contact.direction2")} <br />
                    {t("contact.direction3")} <br /></Text> 
                  </div>
                </div>
              </li>                
            </ul>
          </div>
      
        </section>
      </main>
    </div>
  );
}