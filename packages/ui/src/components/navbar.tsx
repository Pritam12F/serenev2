"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex bg-gray9-400 p-2 justify-between items-center sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-85">
      <div className="w-12 h-12 mx-2">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#CCC9DC"
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
              stroke="#e5e5e5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div>
        <SignInButton>
          <Button variant={"secondary"} className="w-32 mx-3 bg-gray1-400">
            Log in
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button
            variant={"secondary"}
            className="w-32 mx-3 bg-gray6-400 text-white hover:bg-gray8-400 hover:border-2"
          >
            Join now
          </Button>
        </SignUpButton>
      </div>
    </nav>
  );
};
