import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MemuatHalaman } from "~/components/memuat-halaman";
import { NotFoundPage } from "./404";
import { Restaurant } from "~/types/restaurant";
import data_restaurant from "~/data/restaurant.json";
import { WebsiteMeta } from "~/components/website-meta";

export const RestoranDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [detailRestaurant, setDetailRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    try {
      const FindRestaurant = data_restaurant.find((resto: Restaurant) => resto.id);
      if (FindRestaurant) setDetailRestaurant(FindRestaurant);
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  }, [name]);

  if (loading) return <MemuatHalaman />;
  if (!detailRestaurant) return <NotFoundPage />;

  return (
    <>
      <WebsiteMeta title={detailRestaurant.name} description={detailRestaurant.name} />
      <header className="mx-auto flex h-fit w-4/5 py-10 text-2xl font-black text-slate-50 lg:py-14 lg:text-4xl">
        <Link to={"/"} className="group text-justify text-slate-50 transition-all duration-300 ease-in-out">
          <h2 className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
            <span className="text-[#ffd700]">Dov</span>eri
          </h2>
        </Link>
      </header>
      <main>
        <section></section>
      </main>
    </>
  );
};