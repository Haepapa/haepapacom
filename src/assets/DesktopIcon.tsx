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

const DesktopIcon: React.FC<CustomSVGProps> = ({
  strokeColor = "#2C2C2C",
  fillColor = "#FFFBB4",
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
      <g clip-path="url(#clip0_88_78)">
        <path
          d="M19.5098 51.899H42.0217V54.4003H19.5098V51.899Z"
          fill="var(--stroke-color)"
        />
        <path
          d="M25.7631 36.691H35.7684V53.1497H25.7631V36.691Z"
          fill="var(--stroke-color)"
        />
        <path
          d="M34.5177 37.9417V51.874H27.0138V37.9417H34.5177ZM37.019 35.4404H24.5125V54.3753H37.019V35.4404Z"
          fill="var(--stroke-color)"
        />
        <path
          d="M2.00067 6.85034H59.5309V41.8687H2.00067V6.85034Z"
          fill="var(--fill-color)"
        />
        <path
          d="M58.2802 8.10098V40.6181H3.25131V8.10098H58.2802ZM58.2802 5.59967H3.25131C2.58792 5.59967 1.95171 5.8632 1.48262 6.33229C1.01353 6.80138 0.75 7.43759 0.75 8.10098L0.75 40.6181C0.75 41.2815 1.01353 41.9177 1.48262 42.3868C1.95171 42.8559 2.58792 43.1194 3.25131 43.1194H58.2802C58.9436 43.1194 59.5798 42.8559 60.0489 42.3868C60.518 41.9177 60.7815 41.2815 60.7815 40.6181V8.10098C60.7815 7.43759 60.518 6.80138 60.0489 6.33229C59.5798 5.8632 58.9436 5.59967 58.2802 5.59967Z"
          fill="var(--stroke-color)"
        />
        <path
          d="M3.25133 41.9938C3.08709 41.9938 2.92446 41.9615 2.77272 41.8986C2.62099 41.8357 2.48311 41.7436 2.36698 41.6275C2.25085 41.5114 2.15872 41.3735 2.09587 41.2217C2.03302 41.07 2.00067 40.9074 2.00067 40.7431V35.9531H59.5309V40.7306C59.5309 40.8949 59.4985 41.0575 59.4357 41.2092C59.3728 41.361 59.2807 41.4989 59.1646 41.615C59.0485 41.7311 58.9106 41.8232 58.7588 41.8861C58.6071 41.9489 58.4445 41.9813 58.2802 41.9813L3.25133 41.9938Z"
          fill="var(--stroke-color)"
        />
        <path
          d="M58.2802 37.2038V40.7431H3.25131V37.2038H58.2802ZM60.7815 34.7025H0.75V40.7306C0.75 41.394 1.01353 42.0302 1.48262 42.4993C1.95171 42.9684 2.58792 43.2319 3.25131 43.2319H58.2802C58.9436 43.2319 59.5798 42.9684 60.0489 42.4993C60.518 42.0302 60.7815 41.394 60.7815 40.7306V34.7025Z"
          fill="var(--stroke-color)"
        />
      </g>
      <defs>
        <clipPath id="clip0_88_78">
          <rect
            width="60"
            height="60"
            fill="white"
            transform="translate(0.75)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DesktopIcon;
