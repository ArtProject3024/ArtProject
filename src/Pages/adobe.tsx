import { Link } from "react-router-dom";

export default function Adobe() {
  return (
    <div className="text-lg px-10 md:w-3/4 md:m-auto tracking-wider ">
      <div className="text-lg ">
        <div className="text-lg py-4"></div>
        <h3 className="font-semibold text-3xl mb-4">Adobe Firefly</h3>
        <Link
          to={
            "https://firefly.adobe.com/inspire/images?ff_channel=adobe_com&ff_campaign=feature_page&ff_source=firefly_seo"
          }
          className="text-blue-700 cursor-pointer text-xl font-semibold hover:underline"
        >
          Try for Free with this link.
        </Link>
        <div>
          <img
            src="/adobe1.png"
            className="py-6 w-{300px}"
            alt="LogoAI Logo"
          ></img>
        </div>
        <p className="font-semibold text-lg mb-6">
          This is the prompt home page of Adobe firefly where you can generate
          images using prompts.
        </p>
        <p className="font-semibold text-lg mb-6">
          The Prompt given in the below example:{" "}
        </p>
        <p className="font-semibold text-lg mb-6">
          Create a captivating illustration of a serene countryside scene with a
          vintage bike as the focal point. The setting should be a tranquil
          meadow surrounded by lush greenery and gently rolling hills. Capture
          the nostalgia and simplicity of a leisurely bike ride through the
          countryside on a peaceful dawn.
        </p>
        <p className="font-semibold text-lg mb-6">
          Step 1: Give the necessary prompt to generate image.
        </p>
        <div>
          <img
            src="/adobe3.png"
            className="py-6 w-{300px}"
            alt="LogoAI Logo"
          ></img>
        </div>
        <p className="font-semibold text-lg mb-6">
          This is the output for the given prompt.
        </p>
        <div>
          <img
            src="/adobefinal.jpg"
            className="py-6 w-{300px}"
            alt="LogoAI Logo"
          ></img>
        </div>
        <p className="font-semibold text-lg mb-6">
          Here is the slight change in the prompt "bike" to "motorcycle"
        </p>
        <div>
          <img
            src="/adoberefinefinal.jpg"
            className="py-6 w-{300px}"
            alt="LogoAI Logo"
          ></img>
        </div>

        <p className="font-semibold text-lg mb-6">
          Moreover there are many other options available for editing.
        </p>
      </div>
      <div className="text-lg py-16"></div>
    </div>
  );
}
