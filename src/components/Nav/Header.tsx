import Link from "next/link";
import TextLogo from "../Logo/TextLogo";
import { ButtonGradient } from "../Widget";

const Header = () => {
  return (
    <header className="absolute left-0 top-0 w-full px-4 lg:px-6">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto my-[18px] border-b border-[#312D700D] pb-4 lg:pb-5">
        <TextLogo />
        <div className="flex items-center gap-[60px]">
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {links.map((link, key) => (
                <li key={key}>
                  <Link
                    href={link.url}
                    className="font-graphik text-md xl:text-l leading-md xl:leading-l text-secondary-300 px-2"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-3 md:gap-[22px] items-center">
            <Link href={"/register"}>
              <div className="font-graphik rounded-lg text-secondary-300 border-secondary-300 border py-2 xl:py-3 leading-6 text-sm md:text-md xl:text-l px-5 sm:px-8 md:px-10 xl:px-[54px]">
                Sign up
              </div>
            </Link>
            <Link href={"/login"}>
              <div className="rounded-lg text-secondary-300 border-transparent border py-2 xl:py-3 leading-6 text-sm md:text-md xl:text-l px-5 sm:px-8 md:px-10 xl:px-[54px] relative overflow-hidden">
                <span className="font-graphik relative z-10 text-white">
                  Login
                </span>
                <ButtonGradient />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const links = [
  {
    title: "Home",
    url: "/",
    alt: "",
  },
  // {
  //   title: "Pricing",
  //   url: "/pricing",
  //   alt: "",
  // },
  {
    title: "Contact",
    url: "/contact",
    alt: "",
  },
  {
    title: "About",
    url: "/about",
    alt: "",
  },
];
