"use client";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const ButtonVariants = cva(
  "min-w-20 h-fit min-w-fit inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-body transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary-800",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input border-secondary text-secondary-foreground bg-transparent shadow-sm hover:bg-secondary-100 hover:text-accent-foreground",
        outlineForeground: //for outline buttons over dark backgrounds
          "border border-input border-secondary text-secondary-100 shadow-sm hover:bg-primary/30 hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary-200",
        ghost: "!px-0.5 text-secondary-foreground bg-transparent hover:bg-accent/10 hover:underline shadow-none",
        ghostForeground: "text-primary-foreground bg-transparent hover:bg-accent/10 hover:text-accent-foreground shadow-none",
        link: "bg-transparent text-primary hover:underline-offset-4 hover:underline hover:bg-secondary-100/60 shadow-none",
        linkForeground: "bg-transparent text-primary-foreground underline-offset-4 underline hover:bg-secondary-100/60 shadow-none", 
      },
      size: {
        default: "h-8 px-4 py-2 text-sm",
        sm: "h-6 rounded-md px-4 text-sm",
        lg: "rounded-md px-4 text-base",
        icon: "h-8 w-8 text-sm",
      },
      radius: {
        rounded_sm: "rounded-sm",
        rounded_md: "rounded-md",
        rounded_lg: "rounded-lg",
        rounded_full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, radius, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(ButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, ButtonVariants }
