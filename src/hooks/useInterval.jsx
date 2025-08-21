"use client";

import { useEffect, useState, useCallback } from "react";

function useInterval(initialState = 0, length = 0, timer = 3000) {
  const [active, setActive] = useState(initialState);

  const nextIndex = useCallback(() => {
    setActive((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  useEffect(() => {
    if (length <= 1) return;
    
    const id = setInterval(nextIndex, timer);

    return () => {
      clearInterval(id);
    };
  }, [nextIndex, timer, length]);

  return [active, setActive];
}

export default useInterval;
