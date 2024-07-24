import React, { useEffect, useRef, useState } from "react";
import data_restaurant from "~/data/restaurant.json";
import { FilterByOpenNow } from "./filter-by-open-now";
import { FilterByPriceRange } from "./filter-by-price-range";
import { FilterByCategories } from "./filter-by-categories";

export const Filter: React.FC<{ SetFilteredRestaurants: (restaurant: typeof data_restaurant) => void }> = ({ SetFilteredRestaurants }) => {
  const data = useRef(data_restaurant);
  const [showOpenNow, setShowOpenNow] = useState<boolean>(false);
  const [showPriceRange, setShowPriceRange] = useState<string | null>(null);
  const [showCategories, setShowCategories] = useState<string | null>(null);

  useEffect(() => {
    let FilteredData = data.current;
    if (showOpenNow) FilteredData = FilteredData.filter(resto => resto.is_open);
    if (showPriceRange) FilteredData = FilteredData.filter(resto => resto.price_range === showPriceRange);
    if (showCategories) FilteredData = FilteredData.filter(resto => resto.category === showCategories);
    SetFilteredRestaurants(FilteredData);
  }, [showOpenNow, showPriceRange, showCategories, SetFilteredRestaurants]);

  return (
    <section className="flex">
      <h5 className="w-2/5 cursor-default lg:w-1/6">Filter By:</h5>
      <div className="mb-8 flex h-fit w-full text-lg text-slate-50 whitespace-nowrap overflow-y-scroll">
        <FilterByOpenNow SetOpenNow={setShowOpenNow} />
        <FilterByPriceRange SetShowPriceRange={(value: string) => setShowPriceRange(value)} />
        <FilterByCategories SetShowCategories={(value: string) => setShowCategories(value)} />
      </div>
    </section>
  );
};