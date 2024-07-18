import React from "react";
import { Header } from "~/common/header";
import { WebsiteMeta } from "~/common/website-meta";
import { Redirect } from "~/components/404/redirect";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="404: Halaman Tidak Ditemukan!" description="" />
      <Header />
      <Redirect />
    </>
  );
};