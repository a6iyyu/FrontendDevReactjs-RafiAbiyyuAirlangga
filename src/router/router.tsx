import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "~/pages/404";
import { Indeks } from "~/pages";
import { RestoranDetail } from "~/pages/detail";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={NotFoundPage} />
        <Route path="/" Component={Indeks} />
        <Route path="/:name" Component={RestoranDetail} />
      </Routes>
    </BrowserRouter>
  );
};