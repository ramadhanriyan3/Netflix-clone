import { signOut } from "next-auth/react";
import Image from "next/image";

const AccountMenu = ({ visible }: { visible: boolean }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black absolute lg:top-12 top-8 right-0 py-2 flex-col border-2 border-gray-800 flex min-w-[150px]">
      <div className="flex flex-col gap-3 w-fit">
        <div className="px-3 gap-2 group/item flex items-center">
          <Image
            className="w-8 rounded-md"
            src={"/Netflix-avatar.png"}
            alt="ava"
            width={30}
            height={30}
          />
          <p className="text-white text-sm group-hover/item:underline">
            Username
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-2 " />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline align-text-top"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
