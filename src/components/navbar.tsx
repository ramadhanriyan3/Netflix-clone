"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = ({ atHomepage }: { atHomepage: boolean }) => {
  const navigate = useRouter();
  return (
    <nav className="md:px-20 px-5  py-5 flex justify-between items-center w-full">
      <Image
        alt="Logo"
        src={"/logo.png"}
        width={148}
        height={40}
        className=" md:w-[148px] md:h-[40px] w-[80px] h-[30px]"
        onClick={() => navigate.push("/")}
      />
      {atHomepage ? (
        <Link href={"/sign-in"}>
          <button
            type="button"
            className="text-white font-semibold text-sm md:text-normal bg-[#db0000] hover:bg-[#db0000c5]  py-1 md:py-2 px-3 md:px-3 rounded-sm "
          >
            Sign in
          </button>
        </Link>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
