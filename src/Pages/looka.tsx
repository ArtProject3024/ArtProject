import { Link } from "react-router-dom";

export default function LogoAi() {
  return (
    <div className="text-lg px-10 lg:px-72 md:m-auto tracking-wider">
      {/* Center text within this div */}
      <h2 className="py-8">
        <span className="font-bold text-4xl py-10 ">Looka</span>
      </h2>

      <p>
        <span className="font-semibold">Step 1:</span> Asks for inspiration,
        based on user preferences
      </p>
      <div>
        <img
          src="/looka1.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>

      <p>
        <span className="font-semibold">Step 2:</span> Acquires data on desired
        symbolism/values of the brand
      </p>
      <div>
        <img
          src="/looka22.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>

      <p>
        <span className="font-semibold">Step 3:</span> Provides options to
        finalize logo
      </p>
      <div>
        <img
          src="/looka3.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>

      <p>
        <span className="font-semibold">Step 4:</span> Final Logo Chosen
      </p>
      <div>
        <img
          src="/looka4.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>

    </div>
  );
}
