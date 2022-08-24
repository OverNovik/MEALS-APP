import React, { useContext } from "react";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";

const FavoritesScreen = () => {
  // const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;
