import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export const Marquee: React.FC = () => {
  const karosel = useRef<HTMLDivElement | null>(null);
  const kalimat_karosel: string[] = [
    "Beragam menu makanan",
    "✦",
    "Sajikan bersama keluarga",
    "✦",
    "Pesan dan nikmatilah",
    "✦",
  ];

  useEffect(() => {
    if (karosel.current) {
      new Splide(karosel.current, {
        arrows: false,
        pagination: false,
        type: "loop",
        snap: true,
        autoScroll: {
          pauseOnHover: false,
          speed: 1,
        },
        breakpoints: {
          3120: {
            perPage: 3,
            speed: 0.25,
          },
          1320: {
            perPage: 2,
            speed: 0.125,
          },
          768: {
            perPage: 1,
          },
        },
      }).mount({ AutoScroll });
    }
  }, []);

  return (
    <main ref={karosel} className="splide h-fit w-full overflow-x-hidden bg-[#05243c] py-5 text-2xl">
      <section className="splide__track h-full w-full">
        <ul className="splide__list">
          {kalimat_karosel.map((kalimat, i: number) => (
            <div key={i} className="splide__slide grid cursor-default place-items-center bg-[#d4af37] py-4 font-bold text-slate-50">
              {kalimat}
            </div>
          ))}
        </ul>
      </section>
    </main>
  );
};