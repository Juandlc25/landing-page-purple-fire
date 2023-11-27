import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const ScrollRight = (props: Props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="1"
      y="39"
      width="38"
      height="38"
      rx="19"
      transform="rotate(-90 1 39)"
      stroke="#A06056"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.2071 27.7071C16.8166 28.0976 16.1834 28.0976 15.7929 27.7071C15.4024 27.3166 15.4024 26.6834 15.7929 26.2929L22.0858 20L15.7929 13.7071C15.4024 13.3166 15.4024 12.6834 15.7929 12.2929C16.1834 11.9024 16.8166 11.9024 17.2071 12.2929L24.2071 19.2929C24.5976 19.6834 24.5976 20.3166 24.2071 20.7071L17.2071 27.7071Z"
      fill="#A06056"
    />
  </svg>
);
export default ScrollRight;