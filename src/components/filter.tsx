import React, { useRef, useState } from "react";
import data_restaurant from "~/data/restaurant.json";
import { FilterByPriceRange } from "./filter-by-price-range";
import { FilterByCategories } from "./filter-by-categories";

export const Filter: React.FC = () => {
  const data = useRef(data_restaurant);
  const [showOpenNow, setShowOpenNow] = useState<{}[]>([]);
  const [showPriceRange, setShowPriceRange] = useState<{}[]>([]);
  const [showCategories, setShowCategories] = useState<{}[]>([]);

  const ShowFilterOpenNow = () => setShowOpenNow(data.current.filter(resto => resto.is_open));
  const ShowFilterByPriceRange = () => setShowPriceRange(data.current.filter(resto => resto.price_range));
  const ShowFilterByCategories = () => setShowCategories(data.current.filter(resto => resto.categories))

  return (
    <section className="flex">
      <h5 className="w-2/5 cursor-default lg:w-1/6">Filter By:</h5>
      <div className="mb-8 flex h-fit w-full text-lg text-slate-50 whitespace-nowrap overflow-y-scroll">
        <span className="ml-0 flex lg:ml-10" onClick={ShowFilterOpenNow}>
          <input type="checkbox" name="open_now" id="open_now" className="rounded-full outline-none" />
          <label htmlFor="open_now" className="ml-2">
            Open Now
          </label>
        </span>
        <FilterByPriceRange SetShowPriceRange={ShowFilterByPriceRange} />
        <FilterByCategories SetShowCategories={ShowFilterByCategories} />
      </div>
    </section>
  );
};