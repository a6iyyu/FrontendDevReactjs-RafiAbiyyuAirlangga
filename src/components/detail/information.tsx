import React from "react";
import { Restaurant } from "~/types/restaurant";
import { Rating } from "../index/rating";

export const Information: React.FC<{ detail: Restaurant }> = ({ detail }) => {
  return (
    <main className="mx-auto mt-28 h-fit w-4/5 text-slate-50" id={detail.id}>
      <section className="grid grid-cols-1 gap-x-0 lg:grid-cols-2 lg:gap-x-12">
        <img src={detail.photos} alt={detail.name} className="rounded-md transition-all duration-300 ease-in-out lg:hover:scale-105" />
        <div className="mt-6 flex flex-col lg:mt-0">
          <span className="group h-fit w-fit cursor-default text-3xl font-bold text-slate-50 transition-all duration-300 ease-in-out">
            <h3 className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
              {detail.name}
            </h3>
          </span>
          <span className="mt-4 flex cursor-default text-2xl">
            <Rating rating={detail.rating} />
            <h4 className="ml-5">{detail.rating}</h4>
          </span>
          <span className="mt-6 inline-flex cursor-default font-bold">
            {detail.categories.map(category =>
              <h4 key={category} className="mr-4 rounded-full bg-slate-50 px-5 py-2 text-slate-950 transition-all duration-300 ease-in-out lg:hover:bg-slate-200">
                {category}
              </h4>
            )}
          </span>
        </div>
      </section>
    </main>
  );
};