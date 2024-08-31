import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex justify-between bg-neutral-100 dark:bg-gray9-400">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mx-4 my-3"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M7 12H17M8 8.5C8 8.5 9 9 10 9C11.5 9 12.5 8 14 8C15 8 16 8.5 16 8.5M8 15.5C8 15.5 9 16 10 16C11.5 16 12.5 15 14 15C15 15 16 15.5 16 15.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
      <div className="flex space-x-10 mx-8 md:mx-48 md:space-x-10 lg:mx-48 lg:space-x-24">
        <div className="p-4 space-y-2">
          <h3 className="font-semibold">Useful links</h3>
          <div>Github</div>
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-semibold">Follow us</h3>
          <div className="flex justify-between space-x-4">
            <FaDiscord className="w-5 h-5" />
            <FaGithub className="w-5 h-5" />
            <FaTwitter className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
