import React from "react";
import { SVGIconProps } from "./SVGIconProps";
function ArrowLeft(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path d="M5 12L20 11.9998" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 6.99988L4.70711 11.2928C4.37377 11.6261 4.20711 11.7928 4.20711 11.9999C4.20711 12.207 4.37377 12.3737 4.70711 12.707L9 16.9999" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
export default ArrowLeft;
