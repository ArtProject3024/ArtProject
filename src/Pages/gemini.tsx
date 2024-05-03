import { Link } from "react-router-dom";

export default function Gemini() {
  return (
    <div className="text-lg px-10 md:w-3/4 md:m-auto tracking-wider ">
      <div className="text-lg ">
        <div className="text-lg py-4"></div>
        <h3 className="font-semibold text-3xl mb-4">Google Gemini</h3>
        <Link
          to={"https://gemini.google.com"}
          className="text-blue-700 cursor-pointer text-xl font-semibold hover:underline"
        >
          Try for Free with this link.
        </Link>
        <div>
          <img
            src="/gemini_home.png"
            className="py-6 w-{300px}"
            alt="LogoAI Logo"
          ></img>
        </div>
        <p className="font-semibold text-lg mb-6">
          Gemini is a multimodal capable handling variety of information
          formats, including images and code.
        </p>
        <p className="font-semibold text-lg mb-6">
          It excels in multimodal content generation, including images.
        </p>
        <p className="font-semibold text-lg mb-6">
          We will be using the same prompt throughout
        </p>
        <p className="font-semibold text-lg mb-6">Here is the prompt: </p>
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
            src="/gemini.png"
            className="py-6 w-{300px}"
            alt="LogoAI Logo"
          ></img>
        </div>
        <p className="font-semibold text-lg mb-6">
          This is the output for the given prompt.
        </p>
        <div>
          <img
            src="/geminioutput.jpeg"
            className="py-6 w-{300px}"
            alt="LogoAI Logo"
          ></img>
        </div>
      </div>
      <div className="text-lg py-16"></div>
    </div>
  );
}
