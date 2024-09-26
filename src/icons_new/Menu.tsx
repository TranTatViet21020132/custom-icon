import { SVGIconProps } from "./SVGIconProps";
function Menu(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path d="M4 5L20 5" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 12L20 12" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 19L20 19" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
export default Menu;
