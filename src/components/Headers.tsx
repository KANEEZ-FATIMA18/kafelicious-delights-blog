import Link from "next/link";

export default function Headers() {
  return (
    <header className=" mx-auto flex flex-col items-center sm:flex-row sm:justify-around text-center py-5 bg-pink-500 ">
      <div className="text-center">
        <h1 className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl  outline-black ">KAFÉlicious✦DElights</h1>
      </div>

      {/* links */}
      <nav>
        <ul className="flex font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl gap-x-5 lg:gap-x-[100px] md:gap-x-10 ">
         <Link href={'/'}><li className="cursor-pointer hover:text-neutral-50 transition duration-700">HOME</li></Link> 
          <Link href={'/about'}><li className="cursor-pointer hover:text-neutral-50 transition duration-700">ABOUT</li></Link>
          <Link href={'/contact'}><li className="cursor-pointer  hover:text-neutral-50 transition duration-700">CONTACT US</li></Link>
        </ul>
      </nav>
    </header>
  );
}
