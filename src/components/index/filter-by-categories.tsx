import React, { useEffect, useRef, useState } from "react";
import data_restaurant from "~/data/restaurant.json";

export const FilterByCategories: React.FC<{ SetShowCategories: (value: string) => void }> = ({ SetShowCategories }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string>("Categories");
  const data = useRef(data_restaurant);
  const dropdown = useRef<HTMLDivElement | null>(null);

  const PreventingDuplicate = Array.from(new Set(data.current.map(item => item.categories[0]))).sort((item, index) => item.localeCompare(index)).map((price_range) => ({ value: price_range }));

  const HandleOptionClick = (value: string) => {
    setSelectedCategories(value);
    setOpen(false);
    SetShowCategories(value);
  };

  useEffect(() => {
    const HandleDropdown = (e: MouseEvent) => {
      if (dropdown.current && !dropdown.current.contains(e.target as Node)) dropdown.current.addEventListener("click", () => setOpen(false));
    }

    open ? document.addEventListener("click", HandleDropdown) : document.removeEventListener("click", HandleDropdown);
    return () => document.removeEventListener("click", HandleDropdown);
  }, [open, selectedCategories]);

  return (
    <section ref={dropdown} onClick={() => setOpen(!open)} className="ml-12 cursor-pointer border-b-2 border-b-slate-50">
      {selectedCategories}&emsp;&emsp;
      <i className="fa-sharp-duotone fa-solid fa-angle-down" />
      {open &&
        <div className="absolute mt-2 rounded-lg bg-slate-800 text-slate-50 shadow-lg">
          {PreventingDuplicate.map(resto =>
            <h4 key={resto.value} onClick={() => HandleOptionClick(resto.value)} className="py-3 pl-4 pr-10 transition-all duration-300 ease-in-out first:mt-0 first:rounded-t-lg last:mb-0 last:rounded-b-lg lg:hover:bg-slate-700">
              {resto.value}
            </h4>
          )}
        </div>
      }
    </section>
  );
};