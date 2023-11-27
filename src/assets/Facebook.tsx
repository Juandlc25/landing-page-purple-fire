import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Facebook = (props: Props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28.8 0H3.2C1.43269 0 0 1.43269 0 3.2V28.8C0 30.5673 1.43269 32 3.2 32H16V19.9529H11.2V15.4353H16V13.0093C16 8.41638 18.3835 6.4 22.2799 6.4C24.1094 6.4 25.0937 6.53027 25.5719 6.59356L25.6 6.59727V10.9176H22.9424C21.2885 10.9176 20.8 11.773 20.8 13.5048V15.4353H25.5585L24.9006 19.9529H20.8V32H28.8C30.5673 32 32 30.5673 32 28.8V3.2C32 1.43269 30.5673 0 28.8 0Z"
      fill="#706458"
      fill-opacity="0.9"
    />
  </svg>
);
export default Facebook;
