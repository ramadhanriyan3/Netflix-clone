import Link from "next/link";

interface NavbarItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavbarItemProps) => {
  return (
    <Link
      className="text-white cursor-pointer hover:text-gray-300 transition"
      href={href}
    >
      {label}
    </Link>
  );
};

export default NavItem;
