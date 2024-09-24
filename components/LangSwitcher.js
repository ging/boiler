"use client";

import { useTranslation } from "react-i18next";
import { GlobeIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

const lngs = {
  en: {
    nativeName: "English",
    abbreviation: "EN",
  },
  es: {
    nativeName: "Spanish",
    abbreviation: "ES",
  },
};

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="flex flex-nowrap justify-center md:justify-end items-center gap-2 py-2 px-4 md:px-0 md:py-0">
      <GlobeIcon className="icon" />
      {Object.keys(lngs).map((lng) => (
        <a
          key={lng}
          className={clsx("lang-link", "cursor-pointer", {
            
            "font-bold": i18n.language === lng,
            "font-light": i18n.language !== lng,
          })}
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].abbreviation}
          {lng === "en" && <span> / </span>}
        </a>
      ))}
    </div>
  );
}

/**
 *  OLD VERSION se puede borrar
 */

// "use client";

// import { useTranslation } from "react-i18next";
// import { GlobeIcon } from "@radix-ui/react-icons";

// const lngs = {
//   en: {
//     nativeName: "English",
//     abbreviation: "EN",
//   },
//   es: {
//     nativeName: "Spanish",
//     abbreviation: "ES",
//   },
// };

// export default function LangSwitcher() {
//   const { i18n } = useTranslation();
//   return (
//     <div className="lang_switcher">
//       <div>
//         <GlobeIcon className="" />
//         {Object.keys(lngs).map((lng) => (
//           <a
//             key={lng}
//             style={{
//               fontWeight: i18n.language === lng ? "800" : "200",
//             }}
//             type="submit"
//             onClick={() => i18n.changeLanguage(lng)}
//           >
//             {lngs[lng].abbreviation}{" "}
//             <span
//               style={{
//                 display: lng === "en" ? "inline" : "none",
//                 fontWeight: "normal",
//               }}
//             >
//               {" "}
//               /{" "}
//             </span>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }
