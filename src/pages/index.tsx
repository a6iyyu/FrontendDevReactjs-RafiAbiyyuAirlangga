import React from "react";
import { Header } from "~/common/header";
import { WebsiteMeta } from "~/common/website-meta";
import { IndexHero } from "~/components/index/hero";
import { DaftarRestoran } from "~/components/index/list";

export const Indeks: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Beranda" description="" />
      <Header />
      <IndexHero />
      <DaftarRestoran />
    </>
  );
};