import React from "react";
import { WebsiteMeta } from "~/components/website-meta";
import { Header } from "~/components/header";
import { DaftarRestoran } from "~/components/list";

export const Indeks: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Beranda" description="Temukan masakan internasional yang Anda minati!" />
      <Header />
      <DaftarRestoran />
    </>
  );
};