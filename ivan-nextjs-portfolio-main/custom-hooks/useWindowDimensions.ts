import React, { useEffect, useState } from "react";

type Dimensions = null | { width: number; height: number };
const useWindowDimensions = (props: null) => {
  const [dimensions, setDimensions] = useState<null | Dimensions>(null);
  useEffect(() => {
    if (typeof window !== undefined) {
      const getWindowDimensions = () => {
        return {
          width: window.innerWidth,
          height: window.innerHeight,
        };
      };
      const handleResize = () => {
        setDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [dimensions?.width, dimensions?.height]);

  return { width: dimensions?.width, height: dimensions?.height };
};

export default useWindowDimensions;
