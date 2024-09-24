import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";


export default function TabsCategoryFilter({ categories, cards, onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { t } = useTranslation();


  // Función para manejar el cambio de categoría
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      onFilter(cards); // Filtrar todas las tarjetas
    } else {
      const filteredCards = cards.filter((card) => card.category === category);
      onFilter(filteredCards); // Enviar las tarjetas filtradas
    }
  };


  // Al montar el componente, cargar todas las tarjetas
  useEffect(() => {
    onFilter(cards); 
  }, [cards, onFilter]);

  const classes = (category) => clsx([
    "font-bold inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    selectedCategory === category
      ? "bg-primary-300 text-background" // active classes
      : "bg-primary-200 text-background/[0.6] hover:bg-primary-300 hover:bg-opacity-50",
  ]);


  return (
    <div className="bg-primary-200 inline-flex items-center justify-center rounded-lg  p-1 text-muted-foreground gap-1.5">
      {categories.map((category, index) => (
        <button
          key={index}
          className={classes(category)}
          onClick={() => handleCategoryChange(category)}
        >
          {t(`projects.filterTitle${index + 1}`)}
        </button>
      ))}
    </div>
  );
}
