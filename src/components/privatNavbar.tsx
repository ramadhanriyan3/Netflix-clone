"use client";

import NavbarItem from "./navItems";
import MobileMenu from "./mobileMenu";
import AccountMenu from "./AccountMenu";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";

const TOP_OFFSET = 66;

const PrivateNavbar = () => {
  const navigate = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  //   make navbar being black when scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleMobileMenu = useCallback(() => {
    setShowAccountMenu(false);
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowMobileMenu(false);
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <>
      <nav className="w-full fixed z-40">
        <div
          className={`last:px-4 lg:px-16 lg:py-6 py-3 flex items-center transition duration-500  ${
            showBackground ? "bg-zinc-900 bg-opacity-90" : ""
          }`}
        >
          <Image
            alt="Logo"
            src={"/logo.png"}
            width={74}
            height={20}
            className=" lg:w-[148px] lg:h-[40px] w-[74px] h-[20px]  "
            onClick={() => navigate.push("/home")}
          />
          <div className="lg:flex ml-16 gap-7 hidden lg:visible">
            <NavbarItem label={"Home"} href={"/home"} />
            <NavbarItem label={"Series"} href={"#"} />
            <NavbarItem label={"Films"} href={"#"} />
            <NavbarItem label={"New & Popular"} href={"#"} />
            <NavbarItem label={"My List"} href={"#"} />
          </div>
          <div
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative"
          >
            <p className="text-white text-sm">Browse</p>
            <BsChevronDown
              className={`text-white transition ${
                showMobileMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <MobileMenu visible={showMobileMenu} />
          </div>
          <div className="flex flex-row ml-auto lg:gap-7 gap-4 items-center">
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
              <BsSearch />
            </div>
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
              <BsBell />
            </div>
            <div
              onClick={toggleAccountMenu}
              className="flex items-center gap-2 cursor-pointer relative"
            >
              <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                <Image
                  alt="ava"
                  src={"/Netflix-avatar.png"}
                  width={50}
                  height={50}
                />
              </div>
              <BsChevronDown
                className={`text-white transition ${
                  showAccountMenu ? "rotate-180" : "rotate-0"
                }`}
              />
              <AccountMenu visible={showAccountMenu} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PrivateNavbar;
