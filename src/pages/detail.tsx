import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MemuatHalaman } from "~/common/memuat-halaman";
import { NotFoundPage } from "./404";
import { Restaurant } from "~/types/restaurant";
import data_restaurant from "~/data/restaurant.json";
import { WebsiteMeta } from "~/common/website-meta";
import { Header } from "~/common/header";
import { Information } from "~/components/detail/information";
import { Rating } from "~/components/detail/rating";
import { Footer } from "~/common/footer";

export const RestoranDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [detailRestaurant, setDetailRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    const FindRestaurant = data_restaurant.find((resto: Restaurant) => resto.name.replace(/ /g, "-").toLowerCase() === name!.replace(/ /g, "-").toLowerCase());
    if (FindRestaurant) setDetailRestaurant(FindRestaurant);
    setLoading(false);
  }, [name]);

  if (loading) return <MemuatHalaman />;
  if (!detailRestaurant) return <NotFoundPage />;

  return (
    <>
      <WebsiteMeta title={detailRestaurant.name} description={detailRestaurant.name} />
      <Header />
      <Information detail={detailRestaurant} />
      <Rating rating={detailRestaurant} />
      <Footer />
    </>
  );
};