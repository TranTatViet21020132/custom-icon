import React from "react";
import { SVGIconProps } from "./SVGIconProps";
function ArrowUpAlt(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path d="M6 15L11.2929 9.70711C11.6262 9.37377 11.7929 9.20711 12 9.20711C12.2071 9.20711 12.3738 9.37377 12.7071 9.70711L18 15" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
export default ArrowUpAlt;
