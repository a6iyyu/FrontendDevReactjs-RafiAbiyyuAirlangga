import React from "react";
import { Restaurant } from "~/types/restaurant";

export const Rating: React.FC<{ rating: Restaurant }> = ({ rating }) => {
  return (
    <main className="mx-auto mb-40 mt-28 h-fit w-4/5 text-slate-50">
      <h3 className="cursor-default text-2xl font-bold">Komentar</h3>
    </main>
  );
};