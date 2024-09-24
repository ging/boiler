"use client";

import * as React from "react";
import clsx from "clsx";


import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"
import Heading from "@/components/ui/Heading"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
    {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-2 ", className)}
    {...props} />

))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading
    ref={ref}
    level="h5" 
    className={cn("font-semibold leading-5 tracking-tight", className)}
    {...props} 
  />
))
CardTitle.displayName = "CardTitle"

const CardSubtitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading 
    ref={ref}
    level="h2" 
    className={cn(className)}
    {...props}/>
))
CardSubtitle.displayName = "CardSubtitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-2 pt-2 h-full bg-secondary text-black", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-2 pt-0 capitalize", className)}
    {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardSubtitle, CardDescription, CardContent }
