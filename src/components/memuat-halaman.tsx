import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WebsiteMeta } from "~/components/website-meta";

const BounceLoading = styled.div`
  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
      transform: translate3d(0, -1rem, 0);
    }
  }
  & > span {
    animation: bouncing-loader 0.6s infinite alternate;
  }
`;

export const MemuatHalaman: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Sedang Memuat Halaman . . ." description="Kami sedang menyajikan konten yang terbaik untuk Anda . . ." />
      <header className="mx-auto flex h-fit w-4/5 py-10 text-2xl font-black text-slate-50 lg:py-14 lg:text-4xl">
        <Link to={"/"} className="group text-justify text-slate-50 transition-all duration-300 ease-in-out">
          <h2 className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
            <span className="text-[#ffd700]">Dov</span>eri
          </h2>
        </Link>
      </header>
      <main className="mx-auto mb-40 mt-16 flex h-96 w-4/5 cursor-default flex-col items-center justify-center text-slate-50">
        <BounceLoading className="flex justify-center">
          <span className="mx-1 my-12 h-4 w-4 animate-bounce rounded-full bg-slate-50" style={{ animationDelay: "0s" }}></span>
          <span className="mx-1 my-12 h-4 w-4 animate-bounce rounded-full bg-slate-50" style={{ animationDelay: "0.2s" }}></span>
          <span className="mx-1 my-12 h-4 w-4 animate-bounce rounded-full bg-slate-50" style={{ animationDelay: "0.4s" }}></span>
        </BounceLoading>
        <h2 className="text-3xl font-extrabold">Memuat Halaman</h2>
        <h4 className="mt-1.5">Konten Sedang Dimuat, Mohon Ditunggu</h4>
      </main>
    </>
  );
};