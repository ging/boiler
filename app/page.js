"use client";
import * as React from "react";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Divider from "@/components/ui/divider";
import Text from "@/components/ui/Text";
import { ArrowRightIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Image from "@/components/ui/image";

// componentDidMount() {
//   document.title = "Amazing Page";
// }

//Card
import {
  Card, CardVariants
} from "@/components/core/Cards";

//Card
import {
  customCard,
} from "@/components/ui/customCard";

//Banner
import {
  Banner,
  BannerTitle,
  BannerDescription,
  BannerButton,
  BannerContent,
  BannerImg,
} from "@/components/core/Banner";
import BannerPum from "@/components/bannerPum";

// UI
export default function Page() {
  //const [projects, setProjects] = useState(myprojectCards);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // <p className="basis-3/4">{t("project.Intro.title")}</p>

  return (
    <main>
    <title>Amazing Page</title>
      {/* <Banner>
        <BannerContent className={"w-full"}>
          <BannerTitle className={"text-white"}>{t("front.title")}</BannerTitle>
          <BannerDescription className="h-full text-balance">
            {t("front.description")}
          </BannerDescription>
          <Divider />
          <Button
            href="#"
            className={ButtonVariants({
              variant: "default",
              size: "lg",
              radius: "rounded_sm",
            })}
          >
            {t("front.action-button")} <ArrowRightIcon className=" h-4 w-4" />
          </Button>
        </BannerContent>
        <Image
          src="placeholder.jpg"
          alt="Descripción de la imagen"
          fit="contain"
          hasBadge={true}
          badgeVariant=""
          badgeSize=""
        />
      </Banner> */}
      
      <BannerPum></BannerPum>

      <section className="standard_padding">
        <Heading level="h3">{t("front.section1Title")}</Heading>
        <Text type="p"> {t("front.section1Description")}</Text>
        <Divider size="lg" />
        <Heading level="h3" className="mb-6">
          {t("front.section1Subtitle")}
        </Heading>
        {/* Cards con iconos */}
        <div className="flex flex-col sm:grid md:grid-cols-3 gap-6">
          <customCard
            title={""}
            className="text-center content-center bg-white p-6"
          >
            <div className="icon pb-8 flex justify-center items-center">
              <svg
                width="108"
                height="154"
                viewBox="0 0 108 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-40 fill-primary"
              >
                <path d="M105.571 89.8613C104.616 87.4691 103.18 85.2988 101.351 83.4852L80.9737 63.0975C78.2961 60.4001 74.8774 58.559 71.1513 57.8077C67.4251 57.0565 63.5599 57.4292 60.046 58.8783C57.6486 59.8681 55.4583 61.2993 53.5895 63.0975L52.2666 64.4357L50.9441 63.0975C48.2665 60.4001 44.8475 58.559 41.1213 57.8077C37.3952 57.0565 33.53 57.4292 30.016 58.8783C27.6205 59.8717 25.4309 61.3025 23.5595 63.0975L6.56827 80.1004C3.28538 83.3506 1.28288 87.6739 0.927204 92.2793C0.571525 96.8847 1.88648 101.464 4.6314 105.18L11.6234 98.1895C11.1452 97.306 10.8202 96.3479 10.6627 95.3557C10.5053 94.3754 10.5053 93.3763 10.6627 92.396C10.8416 91.3891 11.1653 90.4135 11.6234 89.4992C12.0894 88.5687 12.7005 87.7184 13.4342 86.9802L30.4412 69.8514C31.3588 68.9165 32.4717 68.1961 33.7006 67.7418C36.0509 66.8602 38.6414 66.8602 40.9918 67.7418C42.1677 68.1925 43.22 68.9155 44.0624 69.8514L61.3055 87.0905C61.5622 87.2664 61.7556 87.5203 61.8568 87.8146C61.9736 88.1212 62.0325 88.4469 62.0301 88.775C62.0426 89.1036 61.984 89.431 61.8591 89.7352C61.7341 90.0394 61.5453 90.3132 61.3055 90.5382C60.8155 90.9831 60.172 91.2202 59.5104 91.1995C59.1761 91.1976 58.8448 91.1336 58.5339 91.0105C58.2455 90.9064 57.9938 90.7204 57.8096 90.4753L42.0625 74.7319L14.0797 102.582C12.9635 103.695 12.0851 105.024 11.4973 106.486C10.8972 107.961 10.587 109.538 10.5839 111.131C10.5391 114.051 11.5706 116.887 13.4815 119.097C15.376 121.326 18.0526 122.746 20.9614 123.064C21.3166 125.632 22.4802 128.019 24.2838 129.881C26.0883 131.774 28.4914 132.987 31.0867 133.313C31.4207 135.914 32.6084 138.332 34.4634 140.186C36.3184 142.041 38.7361 143.228 41.3382 143.562C41.6983 146.457 43.1449 149.108 45.3853 150.977C47.0782 152.472 49.162 153.455 51.3931 153.809C53.6242 154.163 55.9101 153.874 57.983 152.976C59.4506 152.353 60.7824 151.449 61.904 150.316L101.461 110.957C105.078 107.346 107.116 102.45 107.13 97.3394C107.101 94.7692 106.571 92.2292 105.571 89.8613ZM96.7051 100.724C96.2468 101.946 95.5269 103.053 94.5952 103.967L55.6525 142.979L55.5579 143.074L55.353 143.247L55.18 143.389C54.9125 143.622 54.6223 143.827 54.3138 144.003C54.0162 144.155 53.6876 144.236 53.3534 144.239C53.265 144.255 53.174 144.255 53.0855 144.239C52.2168 144.332 51.3406 144.158 50.5739 143.739C49.8071 143.321 49.1865 142.678 48.7958 141.896C48.405 141.115 48.2629 140.233 48.3879 139.369C48.5129 138.504 48.899 137.699 49.4951 137.06L49.5897 136.95L65.5575 121.49L62.0771 118.042L46.4875 133.423L46.1884 133.754C45.3844 134.558 44.294 135.009 43.157 135.009C42.02 135.009 40.9295 134.558 40.1256 133.754C39.3216 132.95 38.87 131.86 38.87 130.723C38.87 129.587 39.3216 128.496 40.1256 127.693L56.4083 111.477L52.5503 108.218L37.1338 123.536L36.1573 124.497C35.3031 125.084 34.2643 125.34 33.235 125.217C32.2058 125.094 31.2566 124.602 30.5643 123.83C29.8719 123.059 29.4839 122.062 29.4728 121.026C29.4617 119.99 29.8286 118.985 30.5043 118.199L30.5985 118.121L46.5663 102.141L43.1178 99.1026L27.3706 115.098V115.192C26.6638 115.885 25.7387 116.312 24.7529 116.4C23.7671 116.487 22.7812 116.231 21.9629 115.675C21.1446 115.118 20.5446 114.296 20.2644 113.347C19.9842 112.398 20.0411 111.381 20.4259 110.469V110.328C20.4767 110.229 20.5348 110.134 20.5993 110.044C20.8554 109.715 21.1287 109.4 21.4181 109.1L21.6227 108.895L42.094 88.4286L51.1328 97.3551C52.2453 98.4646 53.5822 99.3234 55.0539 99.8741C56.562 100.449 58.1641 100.737 59.778 100.724C61.3532 100.752 62.9177 100.462 64.3784 99.8723C65.8391 99.2824 67.1662 98.4044 68.2802 97.2907C69.3942 96.177 70.2725 94.8504 70.8626 93.3901C71.4526 91.9297 71.7422 90.3655 71.7145 88.7907C71.7192 87.2254 71.4363 85.6726 70.8799 84.2094C70.3006 82.7366 69.3901 81.4168 68.2187 80.3523L59.3055 71.2998L60.6284 69.9774C61.546 69.0424 62.6593 68.322 63.8882 67.8678C66.2385 66.9861 68.8286 66.9861 71.179 67.8678C72.3832 68.3074 73.4636 69.0311 74.3284 69.9774L94.7997 90.4438C95.7462 91.3083 96.4702 92.3885 96.91 93.5925C97.353 94.7699 97.577 96.0184 97.5712 97.2764C97.4794 98.4663 97.1865 99.6321 96.7051 100.724Z" />
                <path d="M62.329 28.9806L77.6194 24.1001L73.8556 14.1188L66.2815 17.4879L60.266 20.117C60.9939 18.9107 61.3753 17.5271 61.3682 16.1182L61.447 0.04422L50.8177 0.579501L51.6523 8.82903L52.4555 16.8739C51.4981 15.3675 50.0353 14.2513 48.3295 13.7252L33.0864 8.65585L30.2991 18.9993L38.3618 20.731L46.0935 22.4313C44.4041 22.8922 42.925 23.9207 41.9049 25.3438L32.4566 38.3164L41.3694 44.1729L45.5265 37.0254L49.5894 30.0983C49.4932 31.8778 50.0161 33.6356 51.0695 35.0732L60.5178 48.1245L68.8481 41.4178L63.3051 35.2464L57.9354 29.201C59.3892 29.5665 60.9191 29.4898 62.329 28.9806Z" />
              </svg>
            </div>
            <Heading level="h5"> {t("front.Goals.Goal1.GoalTitle")}</Heading>
          </customCard>

          <customCard
            cardType="normal"
            className="text-center content-center border border-indigo-500 p-6 flex flex-col h-full justify-between"
          >
            <Image
              isSvg={true}
              svgCode={`              
                <svg
                width="116"
                height="136"
                viewBox="0 0 116 136"
                fill="#fafewf"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-primary"
              >
                <path d="M85.989 65.9632C82.2476 62.227 77.4824 59.6836 72.2955 58.6544C67.1085 57.6252 61.7326 58.1565 56.8476 60.1811C51.9625 62.2057 47.7876 65.6327 44.8503 70.029C41.913 74.4253 40.3455 79.5934 40.3455 84.8803C40.3455 90.1671 41.913 95.3353 44.8503 99.7316C47.7876 104.128 51.9625 107.555 56.8476 109.579C61.7326 111.604 67.1085 112.135 72.2955 111.106C77.4824 110.077 82.2476 107.534 85.989 103.797C91.0009 98.7768 93.816 91.9734 93.816 84.8803C93.816 77.7871 91.0009 70.9837 85.989 65.9632ZM79.9476 97.8264C77.3997 100.376 74.1529 102.112 70.6178 102.816C67.0828 103.52 63.4182 103.16 60.0878 101.782C56.7574 100.403 53.9108 98.0682 51.908 95.072C49.9051 92.0759 48.8362 88.5532 48.8362 84.9496C48.8362 81.3459 49.9051 77.8232 51.908 74.8271C53.9108 71.831 56.7574 69.496 60.0878 68.1175C63.4182 66.7391 67.0828 66.3791 70.6178 67.0831C74.1529 67.7872 77.3997 69.5236 79.9476 72.0727C83.3408 75.4858 85.2451 80.1026 85.2451 84.9149C85.2451 89.7272 83.3408 94.344 79.9476 97.7572V97.8264Z" />
                <path d="M27.6517 86.8821C24.5823 86.4488 21.5454 85.8101 18.5615 84.9703C16.1687 84.3301 13.8473 83.4482 11.6331 82.3381C10.2191 81.7709 9.06088 80.7067 8.37657 79.3457V69.1495C9.12484 69.5513 9.9424 69.9392 10.8015 70.3271C11.6607 70.715 12.9773 71.2691 14.1551 71.7124C14.7648 71.9202 15.402 72.1003 16.0256 72.2943L16.8294 72.5575L18.6864 73.0562L20.4046 73.4718L21.0281 73.6242L21.7764 73.7628L24.1875 74.1922L25.3374 74.3723C26.1411 74.4832 26.9587 74.594 27.7762 74.6771L28.8294 74.8156H29.4529L30.7002 74.9126C32.8619 75.0788 35.0513 75.1758 37.2961 75.1758H37.6564C38.6575 72.1478 40.1203 69.2927 41.9934 66.7113C40.4137 66.836 38.8481 66.8914 37.2961 66.8914C30.9436 66.8532 24.6244 65.968 18.506 64.2592C16.1132 63.619 13.7918 62.7371 11.5776 61.627C10.1591 61.0597 8.99955 59.9894 8.32109 58.6208V48.3969C10.17 49.4232 12.1033 50.2898 14.0996 50.9875C16.367 51.7687 18.681 52.4072 21.0281 52.8993C23.606 53.4293 26.2099 53.8223 28.8294 54.0769C31.6429 54.3566 34.4687 54.4953 37.2961 54.4925C40.0727 54.4955 42.8477 54.3568 45.6102 54.0769C48.1969 53.8173 50.7686 53.4243 53.3147 52.8993C55.6605 52.4018 57.9742 51.7633 60.2432 50.9875C62.2907 50.2839 64.2783 49.4176 66.1875 48.3969V53.9383H66.9636C69.4858 53.9368 71.9989 54.2439 74.4465 54.8527V17.3372C74.4465 12.7932 70.8159 8.90502 63.5548 5.67252C56.2938 2.44002 47.5178 0.819142 37.2267 0.809906C26.9726 0.809906 18.1966 2.43079 10.8986 5.67252C3.60065 8.91425 -0.0346366 12.8025 -0.00692282 17.3372V79.3457C-0.00692282 83.9636 3.59594 87.8703 10.8015 91.0658C18.0071 94.2614 26.7832 95.8638 37.1296 95.873H37.9473C36.938 93.2027 36.3037 90.4053 36.0626 87.5609C33.2476 87.5075 30.4389 87.2808 27.6517 86.8821ZM18.9218 11.7127C30.9947 8.16635 43.8329 8.16635 55.9058 11.7127C62.0721 13.4998 65.5225 15.3977 66.2846 17.3926C65.5271 19.3875 62.049 21.2624 55.8503 23.0172C43.7858 26.49 30.9863 26.49 18.9218 23.0172C12.8941 21.2855 9.38818 19.4014 8.43205 17.3372C9.38818 15.3839 12.8941 13.5413 18.9218 11.7127ZM8.43205 27.7689C10.281 28.7952 12.214 29.6619 14.2103 30.3596C16.4776 31.1407 18.7916 31.7793 21.1387 32.2714C23.7166 32.8013 26.3209 33.1944 28.9403 33.4489C31.7538 33.7286 34.5794 33.8673 37.4067 33.8645C40.1834 33.8675 42.9584 33.7288 45.7208 33.4489C48.3076 33.1893 50.8792 32.7963 53.4254 32.2714C55.7712 31.7738 58.0848 31.1354 60.3538 30.3596C62.4013 29.6559 64.3892 28.7896 66.2985 27.7689V40.2371C64.3888 41.2531 62.4009 42.1147 60.3538 42.8139C58.0888 43.6026 55.7743 44.2412 53.4254 44.7257C50.8795 45.2554 48.3078 45.6531 45.7208 45.9171C42.9584 46.197 40.1834 46.3358 37.4067 46.3327C34.5794 46.3355 31.7538 46.1968 28.9403 45.9171C26.3206 45.6582 23.7163 45.2605 21.1387 44.7257C18.7884 44.247 16.4735 43.6082 14.2103 42.8139C12.2144 42.1207 10.2814 41.2586 8.43205 40.2371V27.7689Z" />
                <path d="M112.456 116.778L94.594 98.9208C93.305 101.439 91.678 103.77 89.7579 105.848L106.567 122.652C107.883 123.968 107.952 125.7 107.259 126.434C106.567 127.168 104.793 127.057 103.476 125.741L86.5711 108.84C84.3513 110.652 81.8885 112.144 79.2546 113.273L97.6012 131.629C99.8216 133.876 102.839 135.155 105.998 135.189C107.319 135.205 108.63 134.958 109.855 134.463C111.08 133.969 112.195 133.236 113.135 132.308C117.222 128.221 116.904 121.253 112.456 116.778Z" />
              </svg>`}
              fit="cover"
              hasBadge={false}
              badgeVariant=""
              badgeSize=""
            />
            <Heading level="h5"> {t("front.Goals.Goal2.GoalTitle")}</Heading>
          </customCard>
          <customCard cardType="normal" className="text-center content-center p-6">
            <div className="icon pb-8 content-center flex justify-center items-center">
              <Image
                src="placeholder.jpg"
                // layout="."
                hasBadge={true}
                // badgeVariant=""
                // badgeSize=""
              />
            </div>
            <Heading level="h5"> {t("front.Goals.Goal3.GoalTitle")}</Heading>
          </customCard>
        </div>
      </section>
    </main>
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
