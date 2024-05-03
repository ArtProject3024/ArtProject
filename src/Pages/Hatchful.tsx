import { Link } from "react-router-dom";

export default function LogoMarker(){
    return(
      <div className="text-lg px-10 md:w-3/4 md:m-auto tracking-wider ">

<h2 className="py-8">
        <span className="font-bold text-4xl py-10 ">
          Hatchful by Shopify
        </span>
      </h2>

      <p>
        <span className="font-semibold">Step 1:</span> Specifying business type
      </p>
       <div>
        <img
          src="/hatch1.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>

      <p>
        <span className="font-semibold">Step 2:</span> Specifying visual style
      </p>
       <div>
        <img
          src="/hatch2.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>

      <p>
        <span className="font-semibold">Step 3:</span> Specifying context of
        logo usage
      </p>
       <div>
        <img
          src="/hatch3.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>

      <p>
        <span className="font-semibold">Step 4:</span> Considering options
      </p>
       <div>
        <img
          src="/hatch4.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>

      <p>
        <span className="font-semibold">Step 5:</span> Making the Final Choice
      </p>
       <div>
        <img
          src="/hatch5.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>
      </div>

    )
}