"use client";

import * as React from "react";

import Heading from "../ui/Heading";
import Text from "../ui/Text";
import { Button, ButtonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

// la imagen de fondo del banner está enganchada en tailwind.config

const Banner = React.forwardRef(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "padding_home md:min-h-[90dvh]",
      "text-snow",
      "bg-main bg-cover bg-center",
      "flex gap-8 justify-around items-center",
      className
    )}
    {...props}
  />
));
Banner.displayName = "Banner";

const BannerContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    level="h1"
    className={cn("h-fit my-12", className)}
    {...props}
  />
));
BannerContent.displayName = "BannerContent";

const BannerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading
    ref={ref}
    level="h1"
    className={cn("text-snow", className)}
    {...props}
  />
));
BannerTitle.displayName = "BannerTitle";

const BannerDescription = React.forwardRef(({ className, ...props }, ref) => (
    <Text
    ref={ref}
    level="short-p"
    className= {cn("text-snow mb-4", className)}
    {...props} />
    ))
BannerDescription.displayName = "BannerDescription"

const BannerButton = React.forwardRef(({ className, ...props }, ref) => (
  <Button
    href="#"
    className={`${ButtonVariants({
      variant: "primary",
      size: "default",
      radius: "rounded_sm",
    })}`}
    {...props}
  ></Button>
));
BannerButton.displayName = "BannerButton";

const BannerImg = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("hidden md:block relative w-full h-full overflow-hidden", className)}>
    <img
      className="w-full h-full flex items-center justify-center object-contain"
      src="placeholder.jpg"
      alt="icon"
    />
  </div>
));
BannerImg.displayName = "BannerImg";

export {
  Banner,
  BannerTitle,
  BannerDescription,
  BannerContent,
  BannerImg,
  BannerButton,
};
