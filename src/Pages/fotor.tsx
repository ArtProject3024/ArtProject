import { Link } from "react-router-dom";
export default function Fotor() {
  return (
    <div className="text-lg px-10 lg:px-72 md:m-auto tracking-wider ">
      
      <h1 className="py-5 font-bold text-4xl">Fotor.com</h1>
      <p>
        <span className="font-semibold">Step 1:</span> Upload image & Select AI
        Replace function
      </p>
      <div>
        <img src="/fotor1.jpg" className="py-8" alt="Brandmark.io Logo"></img>
      </div>
      <p>
        <span className="font-semibold">Step 2:</span> Select parts of image
        that have to be replaced (Flowers) & Enter what it needs to be replaced
        with (Christmas decoration bells)
      </p>
      <div>
        <img src="/fotor2.jpg" className="py-8" alt="Brandmark.io Logo"></img>
      </div>
      <p>
        <span className="font-semibold">Step 3:</span> Different images are
        generated based on inputs in previous prompt
      </p>
      <div>
        <img src="/fotor3.jpg" className="py-8" alt="Brandmark.io Logo"></img>
      </div>
      <p>
        <span className="font-semibold">Step 4:</span> Final image generated
      </p>
      <div>
        <img src="/Fotor-4.jpg" className="py-8" alt="Brandmark.io Logo"></img>
      </div>    
    </div>
  );
}
