import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" flex justify-center bg-pink-500 text-center p-5 text-black font-bold  text-lg md:text-2xl">
      <div>
        {/* <link> */}
        <ul className="flex gap-x-6 m-5 text-sm md:text-lg hover:text-pink-900">
          <Link href="/">
            <li>HOME </li>
          </Link>
          <Link href={"/about"}>
            <li>ABOUT</li>
          </Link>

          <Link href={"contact"}>
            <li>CONTACT US</li>
          </Link>
        </ul>

        {/* text */}

        <p className="  text-sm  gap-y-10">
          &copy; 2024 WELCOME TO MY FIRST WEBSITE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
