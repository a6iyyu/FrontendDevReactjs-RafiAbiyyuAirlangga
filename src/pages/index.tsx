import React, { useEffect } from "react";
import { WebsiteMeta } from "~/components/website-meta";
import { Header } from "~/components/header";
import { Marquee } from "~/components/marquee";
import { DaftarRestoran } from "~/components/list";

export const Indeks: React.FC = () => {
  useEffect(() => {
    document.querySelector("button")?.addEventListener("click", () => {
      document.querySelector(".list")?.scrollIntoView({
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <WebsiteMeta title="Beranda" description="Temukan masakan internasional yang Anda minati!" />
      <Header />
      <Marquee />
      <DaftarRestoran />
    </>
  );
};