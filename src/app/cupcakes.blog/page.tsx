import Image from "next/image";
export default function Cupcake() {
  return (
    <div className="bg-[#E8D4E8] min-h-screen px-5 py-10 md:px-20 md:py-16">
      <div className="bg-slate-300 p-10 md:p-16 rounded-xl">
        <h1 className="text-pink-600 text-3xl focus-in-expand md:text-5xl font-extrabold text-center">
          CUPCAKE RECIPE
        </h1>
        <Image
          className="rounded-full w-[400px]  mx-auto md:float-right p-5 object-cover"
          src="/cupcake.jpg"
          alt="cake"
          width={500}
          height={350}
        />
        <h2 className="text-left text-pink-500  text-xl md:text-3xl font-bold py-5">
          Ingredients
        </h2>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - 1 1/2 cups all-purpose flour <br />
          - 1 cup granulated sugar <br />
          - 2 teaspoons baking powder <br />
          - 1/2 teaspoon salt <br />
          - 1/2 cup unsalted butter, softened <br />
          - 2 large eggs <br />
          - 2 teaspoons vanilla extract <br />
          - 1 cup whole milk <br />
        </p>
        <h3 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Cooking Procedure
        </h3>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          1. Preheat oven to 350°F (180°C). Line muffin tin with cupcake liners.
          <br />
          2. Mix flour, sugar, baking powder, and salt. <br />
          3. Add softened butter, eggs, vanilla extract, and milk. Mix well.
          <br />
          4. Divide batter evenly among cupcake liners. <br />
          5. Bake 18-20 minutes or until a toothpick comes out clean. <br />
          6. Let cool completely.
        </p>
        <h4 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Butter Creame Frosting
        </h4>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - 1 cup unsalted butter, softened <br />
          - 2 cups powdered sugar <br />
          - 1 teaspoon vanilla extract <br />- 2-4 tablespoons whole milk
        </p>
        <h5 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Assembly
        </h5>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          1. Beat softened butter until creamy. <br />
          2. Gradually add powdered sugar, beating until smooth. <br />
          3. Add vanilla extract and milk. <br />
          4. Frost cooled cupcakes.
        </p>

        <h6 className="text-pink-500 text-xl md:text-3xl font-bold py-5">
          Tips
        </h6>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - Use quality ingredients. <br />
          - Don&apos;t overmix batter. <br />
          - Adjust frosting consistency. <br />- Experiment with flavors.
        </p>
        <h6 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Flavour Variations
        </h6>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - Chocolate Cupcakes: Add cocoa powder. <br />
          - Strawberry Cupcakes: Use strawberry jam. <br />- Lemon Cupcakes: Add
          lemon zest.
        </p>
      </div>
    </div>
  );
}
