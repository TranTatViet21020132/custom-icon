import React from "react";
import { SVGIconProps } from "./SVGIconProps";
function Close(props: SVGIconProps) {
  const { width = 16, height = 16, fillColor = "#7A869A", onClick } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M12.0002 1.63623L1.00024 12.6362M1.00024 1.63623L12.0002 12.6362"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default Close;
