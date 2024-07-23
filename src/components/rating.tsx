import React from "react";

export const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  const full_stars = Math.floor(rating);
  const half_star = rating % 1 >= 0.5;
  const empty_star = 5 - full_stars - (half_star ? 1 : 0);

  return (
    <section>
      {"★".repeat(full_stars)}
      {half_star && "☆"}
      {"☆".repeat(empty_star)}
    </section>
  );
};