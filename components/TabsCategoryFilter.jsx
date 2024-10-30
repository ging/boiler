import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

export default function TabsCategoryFilter({ cards, onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { t } = useTranslation();

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      // Si la categoría es "all", devolvemos todas las tarjetas
      onFilter(cards);
    } else {
      // Filtrar las tarjetas que coincidan con la categoría seleccionada
      const filteredCards = cards.filter((card) => card.category === category);
      onFilter(filteredCards);
    }
  };

  // Extraer categorías únicas de las tarjetas
  const categories = ["all", ...new Set(cards.map((card) => card.category))];

  // Al montar el componente, cargar todas las tarjetas
  useEffect(() => {
    // Cargar todas las tarjetas cuando se monta el componente
    onFilter(cards); 
  }, [cards, onFilter]);

  // Función para aplicar las clases a los botones de las categorías
  const classes = (category) => clsx([
    "font-medium inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-base text-white ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    selectedCategory === category
      ? "bg-primary-700" // Estilos para la categoría seleccionada
      : "bg-primary-400 hover:bg-primary-600/75", // Estilos para las categorías no seleccionadas
  ]);

  return (
    <div className="bg-primary-300/60 inline-flex items-center justify-center rounded-lg p-1 text-muted-foreground gap-1.5">
      {categories.map((category, index) => (
        <button
          key={index}
          className={classes(category)}
          onClick={() => handleCategoryChange(category)}
        >
          {/* Renderizar el nombre de la categoría */}
          {category === "all" ? t("All") : category}
        </button>
      ))}
    </div>
  );
}
