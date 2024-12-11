import Image from "next/image";
export default function Pinkcake() {
  return (
    <div className="bg-[#E8D4E8] min-h-screen px-5 py-10 md:px-20 md:py-16">
      <div className="bg-slate-300 p-10 md:p-16 rounded-xl">
        <h1 className="text-pink-600 text-3xl focus-in-expand md:text-5xl font-extrabold text-center">
          PINK CAKE RECIPE
        </h1>
        <Image
          className="rounded-full w-[400px] mx-auto md:float-right p-5 object-cover"
          src="/cake.jpg"
          alt="cake"
          width={500}
          height={350}
        />

        <h2 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Ingredients
        </h2>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          <strong>For Cake:</strong> <br />
          - 1 1/2 cups all-purpose flour <br />
          - 1 cup granulated sugar <br />
          - 2 teaspoons baking powder <br />
          - 1 teaspoon salt <br />
          - 1/2 cup unsalted butter, softened <br />
          - 2 large eggs <br />
          - 2 teaspoons vanilla extract <br />
          - 1 cup whole milk <br />
          - Few drops pink food coloring <br />
          <br />
          <strong>For Buttercream Frosting:</strong> <br />
          - 1 cup unsalted butter, softened <br />
          - 2 cups powdered sugar <br />
          - 1 teaspoon vanilla extract <br />- Few drops pink food coloring
        </p>

        <h3 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Cooking Procedure
        </h3>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          <strong>For Cake:</strong> <br />
          1. Preheat oven to 350°F (180°C). Grease two 8-inch round cake pans.{" "}
          <br />
          2. Mix flour, sugar, baking powder, and salt. <br />
          3. Add softened butter, eggs, vanilla extract, and milk. Mix well.{" "}
          <br />
          4. Add a few drops of pink food coloring to tint the cake. <br />
          5. Divide batter evenly between prepared pans. <br />
          6. Bake for 25-30 minutes or until a toothpick comes out clean. <br />
          7. Let cool completely.
        </p>

        <h4 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Buttercream Frosting
        </h4>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          1. Beat softened butter until creamy. <br />
          2. Gradually add powdered sugar, beating until smooth. <br />
          3. Add vanilla extract and pink food coloring. <br />
          4. Beat until fully combined and fluffy.
        </p>

        <h5 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Assembly
        </h5>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          1. Place one cake layer on a serving plate. <br />
          2. Spread buttercream frosting on top. <br />
          3. Place the second cake layer on top. <br />
          4. Frost the entire cake with the remaining buttercream.
        </p>

        <h6 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Tips
        </h6>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - Adjust pink food coloring to achieve the desired shade. <br />
          - Use high-quality ingredients for the best flavor. <br />-
          Refrigerate the cake for 30 minutes before serving to set the
          frosting.
        </p>
      </div>
    </div>
  );
}
