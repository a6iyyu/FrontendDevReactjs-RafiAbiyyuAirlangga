import React, { useEffect, useState } from "react";
import { Restaurant } from "~/types/restaurant";
import { Rating } from "../index/rating";

export const Comments: React.FC<{ comments: Restaurant }> = ({ comments }) => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  
  useEffect(() => {
    fullScreenImage ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  }, [fullScreenImage]);

  return (
    <main className="mx-auto mb-20 mt-28 h-fit w-4/5 text-slate-50">
      <h3 className="cursor-default text-3xl font-bold">Komentar</h3>
      <hr className="h-1 w-full text-slate-50 rounded-full" />
      {comments.reviews.map(review =>
        <section key={review.name.replace(/ /g, "-").toLowerCase()} className="mt-10 flex flex-col first-of-type:mt-3">
          <div className="mt-1 flex cursor-default items-center justify-between">
            <h4 className="cursor-default text-lg font-semibold italic">
              {review.name}
            </h4>
            <span className="flex">
              <Rating rating={review.rating} />
              <h5 className="ml-3">{review.rating}</h5>
            </span>
          </div>
          <h4 className="mt-2 cursor-default text-justify">
            {review.comment}
          </h4>
          <img src={review.image} alt={review.name} onClick={() => setFullScreenImage(review.image)} loading="lazy" className="mt-4 h-fit w-1/2 cursor-zoom-in rounded-lg lg:w-1/4" />
        </section>
      )}
      {fullScreenImage && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-75" onClick={() => setFullScreenImage(null)}>
          <img src={fullScreenImage} alt="Fullscreen Image." className="h-fit max-h-full w-4/5 max-w-full lg:h-4/5 lg:w-fit" loading="lazy" />
        </div>
      )}
    </main>
  );
};