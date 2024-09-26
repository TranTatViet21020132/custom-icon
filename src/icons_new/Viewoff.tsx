import React from "react";
import { SVGIconProps } from "./SVGIconProps";
function Viewoff(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8" stroke={fillColor} stroke-width="1.5" stroke-linecap="round"/>
    <path d="M15 13.5L16.5 16" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 11L22 13" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 13L4 11" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 13.5L7.5 16" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
export default Viewoff;
