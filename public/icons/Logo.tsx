import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  filled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ filled = true, ...props }) => {
  return (
    <svg
      width="39"
      height="42"
      viewBox="0 0 39 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.0752 0C29.61 7.98639e-05 38.1504 9.70561 38.1504 21.6777C38.1503 30.9919 32.9802 38.9328 25.7241 42C30.0628 39.7389 33.0078 35.3341 33.0078 30.2704C33.0078 22.9002 26.7696 16.9251 19.0746 16.9251C11.3796 16.9251 5.14137 22.9002 5.14137 30.2704C5.14142 35.332 8.08402 39.7351 12.4198 41.997C5.167 38.9278 9.36231e-05 30.9892 0 21.6777C0 9.70556 8.54032 0 19.0752 0Z"
        fill={filled ? "#8FB850" : "currentColor"}
      />
    </svg>
  );
};

export default Logo;