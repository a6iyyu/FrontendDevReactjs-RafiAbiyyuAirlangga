import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export const Hero: React.FC = () => {
  const kalimat = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (kalimat.current) {
      const typing_effect = new Typed(kalimat.current, {
        backSpeed: 50,
        loop: true,
        strings: ["Kamu lapar ya?", "Mau nyari makan?", "Gabut nih?"],
        typeSpeed: 50,
      });
      return () => typing_effect.destroy();
    }
  }, []);

  return (
    <section className="mx-auto flex h-fit w-4/5 cursor-default flex-col items-center pb-40 pt-24 text-slate-50 lg:items-start">
      <div className="mb-4 inline text-center text-4xl font-bold lg:text-left lg:text-5xl">
        <span ref={kalimat} />
      </div>
      <h4 className="text-center text-xl font-medium lg:mt-1 lg:text-left lg:text-2xl lg:[text-align-last:left]">
        Jangan khawatir, kami punya rekomendasi&nbsp;
        <br className="hidden lg:inline" />
        tempat makan terbaik untukmu!
      </h4>
      <button className="mt-8 h-fit w-fit rounded-md bg-slate-50 px-7 py-4 text-base font-semibold text-slate-950 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc] hover:bg-slate-200 lg:text-lg">
        Jelajahi Sekarang&ensp;<i className="fa fa-arrow-right" />
      </button>
    </section>
  );
};