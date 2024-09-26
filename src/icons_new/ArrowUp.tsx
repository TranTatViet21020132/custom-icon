import React from "react";
import { SVGIconProps } from "./SVGIconProps";
function ArrowUp(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path d="M12 5L12 20" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 9L11.2929 4.70711C11.6262 4.37377 11.7929 4.20711 12 4.20711C12.2071 4.20711 12.3738 4.37377 12.7071 4.70711L17 9" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
export default ArrowUp;
