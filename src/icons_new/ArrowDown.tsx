import React from "react";
import { SVGIconProps } from "./SVGIconProps";
function ArrowDown(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path d="M12 18.9999V3.99988" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.99988 14.9999L11.2928 19.2928C11.6261 19.6262 11.7928 19.7928 11.9999 19.7928C12.207 19.7928 12.3737 19.6262 12.707 19.2928L16.9999 14.9999" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
export default ArrowDown;
