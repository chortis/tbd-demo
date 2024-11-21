import type { SVGProps } from "react";

const SvgLoss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.343 13.657A8 8 0 1 0 13.657 2.343 8 8 0 0 0 2.343 13.657Zm2.571-2.571a.727.727 0 0 1 0-1.029L6.971 8 4.914 5.943a.727.727 0 0 1 1.029-1.029L8 6.971l2.057-2.057a.727.727 0 0 1 1.029 1.029L9.029 8l2.057 2.057a.727.727 0 0 1-1.029 1.029L8 9.029l-2.057 2.057a.727.727 0 0 1-1.029 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLoss;
