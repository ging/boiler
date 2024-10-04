import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex px-3 py-1 items-center h-fit w-fit rounded-md border text-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground",
        outline:
          "border-primary bg-tranparent text-primary",
        secondary:
          "border-transparent bg-secondary-300 text-secondary-foreground",
      },
      size: {
        default:
          "px-3 pt-0 pb-0.5 text-[0.875rem] font-normal" ,
        lg:
          "px-3 pt-0 pb-0.5 border-2 text-base font-semibold",
        sm:
          "py-0.5 px-1.5 text-sm font-normal rounded-sm",
   
        },
      type: {
        success:
          "border-green-100 bg-green-100 text-green-800",
        warn:
          "border-amber-100 bg-amber-100 text-amber-800",
        error:
          "border-red-200 bg-red-200 text-red-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },

  } 
)

function Badge({
  className,
  variant, size, type,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant, size, type }), className)} {...props} />);
}

export { Badge, badgeVariants }
