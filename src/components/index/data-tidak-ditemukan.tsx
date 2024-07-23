import React from "react";

export const DataTidakDitemukan: React.FC = () => {
  return (
    <main className="flex h-fit w-full flex-col items-center justify-center text-slate-50">
      <img src="/data-empty.png?url" alt="Data Tidak Ada!" />
      <h4 className="mt-7 text-3xl font-bold">Oops, Data Tidak Ada!</h4>
    </main>
  );
};