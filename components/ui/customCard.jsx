"use client";

import * as React from "react";
import clsx from "clsx";

import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"
import Heading from "@/components/ui/Heading"

const CustomCard = React.forwardRef(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn("p-2 h-full xs:w-3/4 md:w-full rounded-xl border flex flex-col justify-start gap-4 shadow bg-primary-200/70 text-primary-800", className)}
    {...props} />
))
CustomCard.displayName = "CustomCard"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-2", className)}
    {...props} />

))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading
    ref={ref}
    level="h3" 
    className={cn("font-semibold leading-6 tracking-tight", className)}
    {...props} 
  />
))
CardTitle.displayName = "CardTitle"

const CardSubtitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading 
    ref={ref}
    level="h5" 
    className={cn(className)}
    {...props}/>
))
CardSubtitle.displayName = "CardSubtitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("h-fit", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-2 pt-0 capitalize", className)}
    {...props} />
))
CardFooter.displayName = "CardFooter"

export { CustomCard, CardHeader, CardFooter, CardTitle, CardSubtitle, CardDescription, CardContent }
