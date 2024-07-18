import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Indeks } from "~/pages";
import { RestoranDetail } from "~/pages/detail";
import { NotFoundPage } from "~/pages/404";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={NotFoundPage} />
        <Route path="/" Component={Indeks} />
        <Route path="/:id" Component={RestoranDetail} />
      </Routes>
    </BrowserRouter>
  );
};