import React, { useRef } from "react";
import restaurant from "~/data/restaurant.json";

export const DaftarRestoran: React.FC = () => {
  const data = useRef(restaurant);

  return (
    <main className="mx-auto h-fit w-4/5 text-3xl text-slate-50">
      <section></section>
    </main>
  );
};