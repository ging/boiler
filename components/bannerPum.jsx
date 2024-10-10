import * as React from "react";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Divider from "@/components/ui/divider";
import Text from "@/components/ui/Text";

export default function BannerPum(props) {
    const { t } = useTranslation();
    return (
        <div className="bg-gradient-to-r from-black to-white p-20">
            <div className="flex flex-col justify-end absolute right-10 top-28">
                
                <Heading level="h1" className="text-right" >GING</Heading>
                <Heading level="h4" className="text-right w-60" >Grupo de internet de nueva generación</Heading>
                
            </div>
            <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-500">
                este es un degradado
            </div>
        </div>
    )
}
