import React from "react";

// Define props
interface CustomSVGProps {
  strokeColor?: string;
  fillColor?: string;
  width?: number;
  height?: number;
}

// Extend CSSProperties
declare module "react" {
  interface CSSProperties {
    "--outline-color"?: string;
    "--main-color"?: string;
    "--width"?: number;
    "--height"?: number;
  }
}

const BuildIcon: React.FC<CustomSVGProps> = ({
  strokeColor = "#FFFBB4",
  fillColor = "#2C2C2C",
  width = 61,
  height = 60,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 ${width} ${height}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={
        {
          "--stroke-color": strokeColor,
          "--fill-color": fillColor,
        } as React.CSSProperties
      }
    >
      <path
        d="M5.75 18.75C5.75 16.7851 6.16215 14.9164 6.90472 13.2258L13.276 19.5971C15.2287 21.5497 18.3945 21.5497 20.3471 19.5971C22.2997 17.6445 22.2997 14.4787 20.3471 12.526L13.9758 6.15472C15.6664 5.41215 17.5351 5 19.5 5C27.094 5 33.25 11.1561 33.25 18.75C33.25 20.7149 32.8378 22.5835 32.0953 24.2742L54.3375 46.5165C56.2902 48.4692 56.2902 51.635 54.3375 53.5875C52.385 55.5402 49.2192 55.5402 47.2665 53.5875L25.0242 31.3453C23.3335 32.0878 21.4649 32.5 19.5 32.5C11.9061 32.5 5.75 26.344 5.75 18.75Z"
        fill="var(--fill-color)"
        stroke="var(--stroke-color)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default BuildIcon;
