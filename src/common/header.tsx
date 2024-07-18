import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="mx-auto flex h-28 w-4/5 items-center text-3xl text-slate-50 lg:h-36">
      <Link to={`/`} className="group text-justify font-bold text-slate-50 transition-all duration-300 ease-in-out">
        <span className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
          Dorevi
        </span>
      </Link>
    </header>
  );
};