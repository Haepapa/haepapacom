// src/components/Spacer.tsx

import React from "react";
import { useWindowSize } from "react-use";

const Spacer: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <div
      style={{
        height: `${height - window.innerHeight}px`,
        overflow: "hidden",
      }}
    />
  );
};

export default Spacer;
