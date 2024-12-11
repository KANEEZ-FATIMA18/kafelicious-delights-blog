import Image from "next/image";

export default function IceCreamRecipe() {
  return (
    <div className="bg-[#E8D4E8] min-h-screen px-5 py-10 md:px-20 md:py-16">
      <div className="bg-slate-300 p-10 md:p-16 rounded-xl">
        <h1 className="text-pink-600 text-3xl focus-in-expand md:text-5xl font-extrabold text-center">
          ICE CREAM RECIPE
        </h1>
        {/* Responsive Image */}
        <Image
          className="rounded-full w-[400px] mx-auto md:float-right p-5 object-cover"
          src="/icecream.jpg"
          alt="icecream"
          width={500}
          height={350}
        />
        <h2 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Ingredients
        </h2>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - 2 cups heavy cream <br />
          - 1 cup whole milk <br />
          - 1/2 cup granulated sugar <br />- 1 tsp vanilla extract
        </p>

        <h3 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Equipment
        </h3>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - Ice cream maker (optional) <br />
          - Blender or mixer <br />- Freezer-safe container
        </p>

        <h4 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Instructions
        </h4>

        {/* Method 1 */}
        <h4 className="text-pink-500 text-xl md:text-3xl font-bold py-5">
          Method 1: Using an Ice Cream Maker
        </h4>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          1. Combine cream, milk, and sugar in a blender or mixer. <br />
          2. Add vanilla extract. <br />
          3. Chill mixture in the refrigerator for 2 hours. <br />
          4. Pour mixture into the ice cream maker. <br />
          5. Follow the manufacturer's instructions.
        </p>

        {/* Method 2 */}
        <h4 className="text-pink-500 text-xl md:text-3xl font-bold py-5">
          Method 2: Without an Ice Cream Maker
        </h4>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          1. Combine cream, milk, and sugar in a blender or mixer. <br />
          2. Add vanilla extract. <br />
          3. Pour mixture into a freezer-safe container. <br />
          4. Freeze for 2 hours. <br />
          5. Blend mixture every 30 minutes until the desired consistency.
        </p>

        <h5 className="text-pink-500 text-xl md:text-3xl font-bold py-5">
          Variations
        </h5>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - Chocolate: Add 1 cup cocoa powder or melted chocolate. <br />
          - Strawberry: Add 1 cup pureed strawberries. <br />- Cookie Dough: Add
          1 cup cookie dough chunks.
        </p>

        <h6 className="text-pink-500 text-xl md:text-3xl font-bold py-5">
          Tips
        </h6>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - Use high-quality ingredients. <br />
          - Age the mixture in the refrigerator for better flavor. <br />-
          Experiment with flavors!
        </p>
      </div>
    </div>
  );
}
