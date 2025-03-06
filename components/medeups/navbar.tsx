import React from "react";
import { Button } from "../ui/button";
import Logo from "@/public/assets/svgs/logo";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between p-10">
      {/* <Image
				src="/svgs/logo.svg"
				alt="rednerds Logo"
				width={100}
				height={24}
				priority
			/> */}
      <Logo />
      <Button
        variant={"outline"}
        className="hidden sm:flex rounded-none px-10 py-6"
      >
        GOTTA PROJECT?
      </Button>
    </div>
  );
};

export default Navbar;
