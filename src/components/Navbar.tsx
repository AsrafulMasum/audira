import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center h-20 fixed top-0 left-0 z-50">
      <Image src={logo} alt="logo" className="logo" />
      <Link href="#" className="btn">
        Buy Now
      </Link>
    </nav>
  );
};

export default Navbar;
