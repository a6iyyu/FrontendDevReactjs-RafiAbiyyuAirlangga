import React, { ChangeEvent, useState } from "react";

export const FilterByOpenNow: React.FC<{ SetOpenNow: (restaurant: boolean) => void }> = ({ SetOpenNow }) => {
  const [showOpenNow, setShowOpenNow] = useState<boolean>(false);
  
  const HandleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setShowOpenNow(e.target.checked);
    SetOpenNow(e.target.checked);
  };

  return (
    <div className="ml-0 flex lg:ml-10">
      <input type="checkbox" name="open_now" id="open_now" className="rounded-full outline-none" checked={showOpenNow} onChange={HandleCheckbox} />
      <label htmlFor="open_now" className="ml-2">
        Open Now
      </label>
    </div>
  );
};