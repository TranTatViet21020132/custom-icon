import React from "react";
import { SVGIconProps } from "./SVGIconProps";
function Sort(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path d="M3 9L14 9.00008" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 15H10" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 3H19" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.5 21V9M18.5 21C17.7998 21 16.4915 19.0057 16 18.5M18.5 21C19.2002 21 20.5085 19.0057 21 18.5" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
export default Sort;
