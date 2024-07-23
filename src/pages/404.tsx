import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { Header } from "~/common/header";
import { NotFound } from "~/components/404/not-found";
import { Footer } from "~/common/footer";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="404: Halaman Tidak Ditemukan!" description="" />
      <Header />
      <NotFound />
      <Footer />
    </>
  );
};