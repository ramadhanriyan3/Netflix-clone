import Link from "next/link";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu = ({ visible }: MobileMenuProps) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black top-8 absolute -left-2 py-5 flex-col border-2 border-gray-800 flex w-fit">
      <div className="flex flex-col gap-4">
        <Link
          className="px-3 text-center text-white hover:underline"
          href={"/home"}
        >
          Home
        </Link>
        <Link
          className="px-3 text-center text-white hover:underline"
          href={"#"}
        >
          Series
        </Link>
        <Link
          className="px-3 text-center text-white hover:underline"
          href={"#"}
        >
          Films
        </Link>
        <Link
          className="px-3 text-center text-white hover:underline"
          href={"#"}
        >
          New & Popular
        </Link>
        <Link
          className="px-3 text-center text-white hover:underline"
          href={"#"}
        >
          My List
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
