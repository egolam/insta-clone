import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="shadow-sm border-b sticky top-0 z-30 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/">
          <Image
            src="/logo-yazi.webp"
            alt="instagram logo"
            width={96}
            height={96}
            className="hidden lg:inline-flex"
          />
          <Image
            src="/logo.webp"
            alt="instagram logo"
            width={40}
            height={40}
            className="lg:hidden"
          />
        </Link>
        <input
          type="text"
          className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[13.125rem]"
        />
        <button className="text-sm font-semibold text-blue-500">Log In</button>
      </div>
    </header>
  );
};

export default Header;
