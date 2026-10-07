import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="py-5">
      <div className="max-w-7xl mx-auto px-4 relative flex items-center justify-end">
        {/* Logo + Title - Center */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Image
            className="w-10 h-10"
            height={50}
            width={50}
            src="/logo.webp"
            alt="Bangla News 24"
          />

          <div>
            <h2 className="text-2xl font-bold text-red-600">Bangla News 24</h2>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>

        <UserInfo />
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
 