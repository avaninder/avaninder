import Image from "next/image";
import Link from "next/link";
import logoImg from "../public/avaninder_logo_white.png";

const Navbar: React.FC = () => {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link href="/" className="mr-6 w-10 h-10 lg:flex" prefetch={false}>
      <Image
          src={logoImg}
          alt="logo"
        />
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          href="/"
          className="group inline-flex h-9 w-max font-bold items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-md transition-colors hover:bg-slate-900  focus:bg-gray-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          HOME
        </Link>
        <Link
          href="/outreach"
          className="group inline-flex h-9 w-max font-bold items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-md transition-colors hover:bg-gray-900  focus:bg-gray-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          OUTREACH
        </Link>
        <Link
          href="/projects"
          className="group inline-flex h-9 w-max font-bold items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-md transition-colors hover:bg-gray-900  focus:bg-gray-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          PROJECTS
        </Link>
        <Link
          href="/about"
          className="group inline-flex h-9 w-max font-bold items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-md transition-colors hover:bg-gray-900  focus:bg-gray-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          ABOUT ME
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
