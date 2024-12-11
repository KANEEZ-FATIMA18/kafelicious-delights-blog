import Image from "next/image";
export default function Cookies() {
  return (
    <div className="bg-[#E8D4E8] min-h-screen px-5 py-10 md:px-20 md:py-16">
      <div className="bg-slate-300 p-10 md:p-16 rounded-xl">
        <h1 className="text-pink-600 text-3xl focus-in-expand md:text-5xl font-extrabold text-center">
          COOKIES RECEPIE
        </h1>
        <Image
          className="rounded-full w-[400px]  mx-auto md:float-right p-5 object-cover"
          src="/cookies.jpg"
          alt="cake"
          width={500}
          height={350}
        />
        <h2 className="text-left text-pink-500  text-xl md:text-3xl font-bold py-5">
          Ingredients
        </h2>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          - 2 1/4 cups all-purpose flour <br />
          - 1 tsp baking soda <br />
          - 1 tsp salt <br />
          - 1 cup unsalted butter (softened) <br />
          - 3/4 cup white granulated sugar <br />
          - 3/4 cup brown sugar <br />
          - 2 large eggs <br />
          - 2 tsp vanilla extract <br />
          - 2 cups semi-sweet chocolate chips <br />
        </p>
        <h3 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Instructions:
        </h3>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          1. Preheat oven to 375°F (190°C). <br />
          2. Mix flour, baking soda, and salt. <br />
          3. Cream butter and sugars. <br />
          4. Add eggs and vanilla extract. <br />
          5. Mix dry ingredients with wet ingredients. <br />
          6. Stir in chocolate chips. <br />
          7. Scoop tablespoon-sized balls onto baking sheet. <br />
          8. Bake 10-12 minutes or until golden brown.
        </p>
        <h4 className="text-left text-pink-500 text-xl md:text-3xl font-bold py-5">
          Variations
        </h4>
        <p className="text-sm md:text-lg font-medium leading-7 md:leading-9">
          -- Oatmeal Raisin: Add 1 cup rolled oats and 1/2 cup raisins. <br />
          - Peanut Butter: Add 1/2 cup peanut butter. <br />
          - Snickerdoodle: Add 1 tsp cinnamon and 1/2 cup sugar. <br />
        </p>
        <h5 className="text-pink-500 text-xl md:text-3xl font-bold py-5">
          Tips
        </h5>
        <p>
          - Use room temperature butter. <br />
          - Don't overmix. <br />- Chill dough for 30 minutes.
        </p>
      </div>
    </div>
  );
}
