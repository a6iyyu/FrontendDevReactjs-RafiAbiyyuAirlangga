import React from "react";
import { Header } from "~/common/header";
import { Hero } from "./hero";

export const IndexHeader: React.FC = () => {
  return (
    <main className="mx-auto flex h-full w-full flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/hero.jpg?url)" }}>
      <Header />
      <Hero />
    </main>
  );
};