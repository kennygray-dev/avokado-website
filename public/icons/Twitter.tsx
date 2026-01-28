import * as React from "react";

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="6" fill="#191919" />
      <path
        d="M6.75 17.25L11.1532 12.8468M11.1532 12.8468L6.75 6.75H9.66667L12.8468 11.1532M11.1532 12.8468L14.3333 17.25H17.25L12.8468 11.1532M17.25 6.75L12.8468 11.1532"
        stroke="#F8FFFD"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TwitterIcon;