import React from "react";
import { SVGIconProps } from "./SVGIconProps";
function Checked(props: SVGIconProps) {
    const { width = 20, height = 20, fillColor = "blue",onClick } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M16.7812 5.21875C17.0625 5.53125 17.0625 6 16.7812 6.28125L8.53125 14.5312C8.21875 14.8438 7.75 14.8438 7.46875 14.5312L3.21875 10.2812C2.90625 10 2.90625 9.53125 3.21875 9.25C3.5 8.9375 3.96875 8.9375 4.25 9.25L7.96875 12.9688L15.7188 5.21875C16 4.9375 16.4688 4.9375 16.75 5.21875H16.7812Z"
        fill={fillColor}
      />
    </svg>
  );
}
export default Checked;
