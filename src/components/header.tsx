import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "./hero";

export const Header: React.FC = () => {
  return (
    <main className="mx-auto flex h-full w-full flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/hero.jpg?url)" }}>
      <header className="mx-auto flex h-fit w-4/5 py-10 text-2xl font-black text-slate-50 lg:py-14 lg:text-4xl">
        <Link to={"/"} className="group text-justify text-slate-50 transition-all duration-300 ease-in-out">
          <h2 className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
            <span className="text-[#ffd700]">Dov</span>eri
          </h2>
        </Link>
      </header>
      <Hero />
    </main>
  );
};