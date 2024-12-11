import Image from "next/image";
export default function Macrons() {
  return (
    <div className="bg-[#E8D4E8] min-h-screen px-5 py-10 md:px-20 md:py-16">
      <div className="bg-slate-300 p-10 md:p-16 rounded-xl">
        <h1 className="text-pink-600 text-3xl focus-in-expand md:text-5xl font-extrabold text-center">
          MACRONS RECIPE
        </h1>
        <Image
          className="rounded-full w-[400px] mx-auto md:float-right p-5 object-cover"
          src="/MACRON.jpg"
          alt="macrons"
          width={500}
          height={350}
        />
        <h2 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Ingredients
        </h2>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          <strong>For Shells:</strong> <br />
          - 1 1/2 cups almond flour <br />
          - 1 1/2 cups powdered sugar <br />
          - 3 large egg whites <br />
          - 1/2 cup granulated sugar <br />
          - Food coloring (optional) <br />
          <br />
          <strong>For Filling:</strong> <br />
          - 1 cup buttercream or ganache <br />- Flavorings (e.g., vanilla,
          chocolate, fruit curd)
        </p>
        <h3 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Cooking Procedure
        </h3>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          <strong>Shell:</strong> <br />
          1. Preheat oven to 300°F (150°C). <br />
          2. Mix almond flour, powdered sugar. <br />
          3. Whip egg whites until stiff peaks. <br />
          4. Add granulated sugar, whip until combined. <br />
          5. Add food coloring (if using). <br />
          6. Fold egg mixture into almond mixture. <br />
          7. Pipe onto parchment-lined baking sheet. <br />
          8. Tap baking sheet to remove air bubbles. <br />
          9. Bake 15-20 minutes. <br />
          <br />
          <strong>Filling:</strong> <br />
          1. Prepare buttercream or ganache. <br />
          2. Sandwich shells together.
        </p>
        <h4 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Flavor Variations
        </h4>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - Chocolate Macarons: Add cocoa powder. <br />
          - Raspberry Macarons: Use raspberry jam. <br />- Lemon Macarons: Add
          lemon zest.
        </p>
        <h5 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Tips
        </h5>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - Use aged egg whites. <br />
          - Maintain oven temperature. <br />
          - Don&apos;t overmix. <br />- Experiment with flavors.
        </p>
      </div>
    </div>
  );
}
