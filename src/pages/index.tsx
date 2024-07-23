import React, { useEffect } from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { IndexHeader } from "~/components/index/header";
import { Marquee } from "~/components/index/marquee";
import { DaftarRestoran } from "~/components/index/list";
import { Footer } from "~/common/footer";

export const Indeks: React.FC = () => {
  useEffect(() => {
    document.querySelector("button")!.addEventListener("click", () => {
      document.querySelector(".list")!.scrollIntoView({
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <WebsiteMeta title="Beranda" description="Temukan masakan internasional yang Anda minati!" />
      <IndexHeader />
      <Marquee />
      <DaftarRestoran />
      <Footer />
    </>
  );
};