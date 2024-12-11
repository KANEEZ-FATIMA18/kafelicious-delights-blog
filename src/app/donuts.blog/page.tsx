
import Image from "next/image";
export default function Donuts() {
  return (
    <div className="bg-[#E8D4E8] min-h-screen px-5 py-10 md:px-20 md:py-16">
      <div className="bg-slate-300 p-10 md:p-16 rounded-xl">
        <h1 className="text-pink-600 text-3xl focus-in-expand md:text-5xl font-extrabold text-center">
          CLASSIC DONUTS RECIPE
        </h1>
        <Image
          className="rounded-full w-[400px]  mx-auto md:float-right p-5 object-cover"
          src="/donuts.jpg"
          alt="cake"
          width={500}
          height={350}
        />
        <h2 className="text-left text-pink-500  text-xl md:text-3xl font-bold py-5">
          Ingredients
        </h2>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          2 cups all-purpose flour <br /> 1/2 cup granulated sugar <br />
          1/2 cup whole milk <br /> 2 teaspoons active dry yeast <br />
          1/4 teaspoon salt <br /> 2 large eggs <br /> 4 tablespoons unsalted butter, melted <br />
          1 teaspoon vanilla extract <br />
          Confectioners&apos; sugar for dusting (optional)
        </p>
        <h3 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Cooking Procedure
        </h3>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          1. Activate yeast: Mix warm milk (105°F - 115°F) and yeast. Let sit
          5-7 minutes. <br />
          2. Combine dry ingredients: Flour, sugar, and salt. <br />
          3. Mix wet ingredients: Eggs, melted butter, and vanilla extract.{" "}
          <br />
          4. Combine wet and dry ingredients. <br />
          5. Knead dough 5-7 minutes. <br />
          6. Proof dough 1 hour. <br />
          7. Punch down dough. <br />
          8. Cut into donut shapes. <br />
          9. Fry in hot oil (350°F) 1-2 minutes per side. <br />
          10. Drain excess oil. <br />
          11. Dust with confectioners&apos; sugar (optional).
        </p>
        <h4 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Variations
        </h4>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - Chocolate Donuts: Add 1/2 cup cocoa powder. <br />
          - Strawberry Donuts: Add 1/2 cup strawberry jam. <br />
          - Glazed Donuts: Drizzle with glaze made from powdered sugar and milk.
        </p>
        <h5 className="text-pink-500 text-xl md:text-3xl font-bold py-5">
          Tips
        </h5>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - Use quality ingredients. <br />
          - Maintain oil temperature. <br />
          - Don&apos;t overmix dough. <br /> - Experiment with flavors.
        </p>
      </div>
    </div>
  );
}
