import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Instagram = (props: Props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.6 0H22.4C27.7019 0 32 4.29807 32 9.6V22.4C32 27.7019 27.7019 32 22.4 32H9.6C4.29807 32 0 27.7019 0 22.4V9.6C0 4.29807 4.29807 0 9.6 0ZM25.6 4.8C26.4 4.8 27.2 5.6 27.2 6.4C27.2 7.2 26.4 8 25.6 8C24.8 8 24 7.2 24 6.4C24 5.6 24.8 4.8 25.6 4.8ZM24 16C24 11.588 20.412 8 16 8C11.588 8 8 11.588 8 16C8 20.412 11.588 24 16 24C20.412 24 24 20.412 24 16ZM16 11.2C13.349 11.2 11.2 13.349 11.2 16C11.2 18.651 13.349 20.8 16 20.8C18.651 20.8 20.8 18.651 20.8 16C20.8 13.349 18.651 11.2 16 11.2Z"
      fill="#706458"
      fill-opacity="0.9"
    />
  </svg>
);
export default Instagram;
