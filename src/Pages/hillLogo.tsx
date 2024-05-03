import { Link } from "react-router-dom";

export default function BrandMarker(){
    return(
      <div className="text-lg px-10 md:w-3/4 md:m-auto tracking-wider ">
      <h2 className="py-8">
        <span className="font-bold text-4xl py-10 ">
          Design Hill Logo Maker
        </span>
      </h2>

      <p>
        <span className="font-semibold">Step 1:</span> Style preference
        Identification
      </p>
       <div>
        <img
          src="/hill1.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>

      <p>
        <span className="font-semibold">Step 2:</span> Color Palette preference
        selection
      </p>
       <div>
        <img
          src="/hill2.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>

      <p>
        <span className="font-semibold">Step 3:</span> Industry and organization
        size identification
      </p>
       <div>
        <img
          src="/hill3.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>

      <p>
        <span className="font-semibold">Step 4:</span> Proposing potential
        options
      </p>
       <div>
        <img
          src="/hill4.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>

      <p>
        <span className="font-semibold">Step 5:</span> Final decision
      </p>
       <div>
        <img
          src="/hill5.jpg"
          className="py-8"
          alt="Brandmark.io Logo"
        ></img>
      </div>
      </div>
    )
}