import Link from "next/link";
import Image from "next/image"; 
export default function Blogs() {
  return (
    <section className="mx-auto px-5 md:px-20 py-10 bg-[#E8D4E8]">
      {/* grid columns */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* grid 1 */}
        <div className="bg-slate-300 box  p-7 rounded-3xl">
          <div className="flex justify-center">
            <Image
              className="rounded-md"
              src="/cake.jpg"
              alt="cake"
              width={400}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center py-4">
            <h1 className="text-2xl md:text-4xl font-bold text-black pt-3">
              PINK CAKE
            </h1>
            <p className="py-3 text-sm md:text-lg font-bold">
            &quot;Slice of Heaven! Our moist and decadent cakes are crafted with
              love, featuring rich flavors and velvety textures that will make
              every occasion special.&quot;
            </p>
            <Link href={"/pink-cake.blog"}>
              <button className="bg-pink-500 hover:bg-pink-600 text-sm md:text-lg font-bold p-3 rounded-md">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* grid 2 */}
        <div className="bg-slate-300 box p-7 rounded-3xl">
          <div className="flex justify-center">
            <Image
              className="rounded-md"
              src="/donuts.jpg"
              alt="donuts"
              width={400}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center py-4">
            <h1 className="text-2xl md:text-4xl font-bold text-black pt-3">
              DONUTS
            </h1>
            <p className="py-3 text-sm md:text-lg font-bold">
            &quot;Rise & Indulge! Our handcrafted donuts are soft, fluffy, and
              bursting with flavor. From classic glazed to creative twists,
              every bite is a sweet delight.&quot;
            </p>
            <Link href={"/donuts.blog"}>
              <button className="bg-pink-500 hover:bg-pink-600 text-sm md:text-lg font-bold p-3 rounded-md">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* grid 3 */}
        <div className="bg-slate-300 box  p-7 rounded-3xl">
          <div className="flex justify-center">
            <Image
              className="rounded-md"
              src="/macron.jpg"
              alt="cake"
              width={400}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center py-4">
            <h1 className="text-2xl md:text-4xl font-bold text-black pt-3">
              MACRONS
            </h1>
            <p className="py-3 text-sm md:text-lg font-bold">
            &quot;Delicate Delights! Our handcrafted macarons are a symphony of
              flavors and textures, with crisp shells and creamy fillings that
              will transport you to a world of sweet bliss.&quot;
            </p>
            <Link href={"/macrons.blog"}>
              <button className="bg-pink-500 hover:bg-pink-600 text-sm md:text-lg font-bold p-3 rounded-md">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* grid 4 */}
        <div className="bg-slate-300 box p-7 rounded-3xl">
          <div className="flex justify-center">
            <Image
              className="rounded-md"
              src="/cupcake.jpg"
              alt="cake"
              width={400}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center py-4">
            <h1 className="text-2xl md:text-4xl font-bold text-black pt-3">
              CUP CAKE
            </h1>
            <p className="py-3 text-sm md:text-lg font-bold">
            &quot;Sweet Delight in Every Bite! Our moist and decadent cupcakes are
              crafted with love, featuring rich flavors and velvety frostings
              that will satisfy your sweet tooth.&quot;
            </p>
            <Link href={"/cupcakes.blog"}>
              <button className="bg-pink-500 hover:bg-pink-600 text-sm md:text-lg font-bold p-3 rounded-md">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* grid 5 */}
        <div className="bg-slate-300 box  p-7 rounded-3xl">
          <div className="flex justify-center">
            <Image
              className="rounded-md"
              src="/cookies.jpg"
              alt="cake"
              width={400}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center py-4">
            <h1 className="text-2xl md:text-4xl font-bold text-black pt-3">
              COOKIES
            </h1>
            <p className="py-3 font-bold text-xl">
            &quot;Savor the crunch! Our artisanal cookies are baked with love,
              using only the finest ingredients. Indulge in warm, chewy goodness
              that will satisfy your sweet tooth.&quot;
            </p>
            <Link href={"/cookies.blog"}>
              <button className="bg-pink-500 hover:bg-pink-600 text-sm md:text-lg font-bold p-3 rounded-md">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* grid 6*/}
        <div className="bg-slate-300 box p-7 rounded-3xl">
          <div className="flex justify-center">
            <Image
              className="rounded-md"
              src="/icecream.jpg"
              alt="cake"
              width={400}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center py-4">
            <h1 className="text-2xl md:text-4xl font-bold text-black pt-3">
              ICE CREAM
            </h1>
            <p className="py-3 text-sm md:text-lg font-bold">
            &quot;Savor the sweetness! Our artisanal ice creams are handcrafted
              with love, using only the finest ingredients. Indulge in unique
              flavors and creamy textures  that will transport you to a world of
              bliss.&quot;
            </p>
            <Link href={"/icecream.blog"}>
              <button className="bg-pink-500 hover:bg-pink-600 text-sm md:text-lg font-bold p-3 rounded-md">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
