// import Link from "next/link";
// export default function Hero() {
//     return (
//       <div className="bg-[#E8D4E8] min-h-screen min-w-full">
//         {/* main left logo */}
//         <section className="flex pt-10 gap-x-5  ">
//           <div className="text-center  px-5  ">
//             <h1 className="font-extrabold text-2xl md:text-5xl mt-5 ">
//               WELCOME TO <br />
//               <span className="text-teal-700 ">KAFÉlicious✦DElights</span>
//             </h1>
//             <p className="font-bold text-lg md:text-xl text-wrap pt-5 mx-auto px-[70px]">
//               Indulge in the sweetest treats, freshly baked with love. Where
//               passion meets pastry, discover the art of baking redefined. Sweeten
//               up your life with our handcrafted baked goods, fresh, delicious, and
//               made with love. Explore our menu and order now to taste perfection
//               in every bite!"
//             </p>
//             <Link href={"/contact"}>
//               <button className="font-bold text-sm md:text-lg bg-pink-400 hover:bg-pink-600 duration-700 border-[3px] border-white mt-5 p-3 rounded-md ">
//                 ORDER NOW
//               </button>
//             </Link>
//           </div>
//         </section>
        
//       </div>
//     );
//   }


import Link from "next/link";
export default function Hero() {
  return (
    <div className="bg-[#E8D4E8] max-h-screen min-w-full">
      {/* main left logo */}
      <section className="flex flex-col items-center pt-10 gap-y-5 px-5 md:flex-col md:gap-x-5  md:px-10">
        <div className="text-center  md:px-5">
          <h1 className="font-extrabold text-2xl focus-in-expand md:text-5xl mt-5">
            WELCOME TO <br />
            <span className="text-teal-700">KAFÉlicious✦DElights</span>
          </h1>
          <p className="font-bold text-sm md:text-lg leading-relaxed md:leading-loose pt-5 max-w-[700px] mx-auto md:mx-0">
            Indulge in the sweetest treats, freshly baked with love. Where passion
            meets pastry, discover the art of baking redefined. Sweeten up your life
            with our handcrafted baked goods, fresh, delicious, and made with love.
            Explore our menu and order now to taste perfection in every bite!
          </p>
          <Link href={"/contact"}>
            <button className="font-bold text-sm md:text-lg bg-pink-400 hover:bg-pink-600 duration-700 border-[3px] border-white mt-5 px-6 py-3 rounded-md">
              ORDER NOW
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
