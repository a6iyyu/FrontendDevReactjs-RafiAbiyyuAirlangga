import React, { useState } from "react";
import { Link } from "react-router-dom";
import restaurant from "~/data/restaurant.json";
import { Filter } from "./filter";
import { Rating } from "./rating";

export const DaftarRestoran: React.FC = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurant);

  return (
    <main className="list mx-auto mb-20 mt-14 h-fit w-4/5 text-slate-50">
      <Filter SetFilteredRestaurants={setFilteredRestaurants} />
      <h3 className="mb-8 cursor-default rounded-xl text-4xl font-bold underline decoration-1">Daftar Restoran</h3>
      <section className="grid h-full w-full cursor-default grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRestaurants.map(resto =>
          <article key={resto.id} className="flex h-full w-full flex-col py-5">
            <img src={resto.photos} alt={resto.name} className="h-full w-full rounded-md text-center transition-all duration-300 ease-in-out lg:hover:scale-105" loading="lazy" />
            <div className="group mt-4 h-fit w-fit text-2xl font-bold text-slate-50 transition-all duration-300 ease-in-out">
              <h3 className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                {resto.name}
              </h3>
            </div>
            <span className="flex text-lg">
              <Rating rating={resto.rating} />
              <h5 className="ml-3">{resto.rating}</h5>
            </span>
            <div className="mt-3 flex justify-between text-base">
              <span className="flex">
                <h6>{resto.categories[0]}</h6>
                &ensp;•&ensp;
                <h6>{resto.price_range}</h6>
              </span>
              <h6 className="flex">
                {resto.is_open ? "🔵\u2002OPEN NOW" : "🔴\u2002CLOSED"}
              </h6>
            </div>
            <Link to={`/${resto.name.replace(/ /g, "-").toLowerCase()}`} className="mt-10 h-fit w-full rounded-md bg-blue-800 py-4 text-center transition-all duration-300 ease-in-out hover:bg-blue-700">
              LEARN MORE
            </Link>
          </article>
        )}
      </section>
    </main>
  );
};