import { Link } from "react-router-dom";
export default function LightXEditor() {
  return (
    <div className="text-lg px-10 lg:px-72 md:m-auto tracking-wider ">
      {" "}
      {/* Center text within this div */}
      <h1 className="font-semibold py-4 text-2xl">Light X Editor Example:</h1>
      
      <p>
        <span className="font-semibold">Step 1:</span> Upload image & chose AI
        Replace function
      </p>
      <div>
        <img src="/1.jpg" className="py-8" alt="Brandmark.io Logo"></img>
      </div>
      <p>
        <span className="font-semibold">Step 2:</span> Select area/ face that
        needs to be replaced (dog’s face)
      </p>
      <div>
        <img src="/2.jpg" className="py-8" alt="Brandmark.io Logo"></img>
      </div>
      <p>
        <span className="font-semibold">Step 3:</span> Enter what the selected
        area has to be replaced with in the Custom prompt (Cat’s face)
      </p>
      <div>
        <img src="/3.jpg" className="py-8" alt="Brandmark.io Logo"></img>
      </div>
      <p>
        <span className="font-semibold">Step 4:</span> AI Image generated image
        with cat’s face replacing dog’s face
      </p>
      <div>
        <img src="/4.jpg" className="py-8" alt="Brandmark.io Logo"></img>
      </div>
    </div>
  );
}
