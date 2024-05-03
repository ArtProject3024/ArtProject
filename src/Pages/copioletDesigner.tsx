import { Link } from "react-router-dom";

export default function CopioletDesigner(){
    return(
<div className="text-lg px-10 md:w-3/4 md:m-auto tracking-wider ">
      <div className="text-lg ">
      <div className="text-lg py-4">
        </div>
        <h3 className="font-semibold text-3xl mb-4">
          Microsoft Copilot Designer
        </h3>
        <Link
            to={"https://copilot.microsoft.com/"}
            className="text-blue-700 cursor-pointer text-xl font-semibold hover:underline"
          >
            Try for Free with this link.
          </Link>
          <div className="text-lg py-2">
          </div>
        <p className="font-semibold text-lg mb-6">Microsoft Copilot is an AI companion designed to enhance productivity, creativity, and information understanding.</p>
        <p className="font-semibold text-lg mb-6">We will be using the same prompt throughout</p>
        <p className="font-semibold text-lg mb-6">Here is the prompt: </p>
        <p className="font-semibold text-lg mb-6">Create a captivating illustration of a serene countryside scene with a vintage bike as the focal point. The setting should be a tranquil meadow surrounded by lush greenery and gently rolling hills. Capture the nostalgia and simplicity of a leisurely bike ride through the countryside on a peaceful dawn.</p>
        <p className="font-semibold text-lg mb-6">Step 1: Give the necessary prompt to generate image.</p>
        <div>
            <img
              src="/copilotprompt.png"
              className="py-6 w-{300px}"
              alt="LogoAI Logo"
            ></img>
          </div>
          <p className="font-semibold text-lg mb-6">It will process and give a set of generative images based on the prompt.</p>
          <div>
            <img
              src="/copilot1.png"
              className="py-6 w-{300px}"
              alt="LogoAI Logo"
            ></img>
          </div>
          <div>
            <img
              src="/copilot2.png"
              className="py-6 w-{300px}"
              alt="LogoAI Logo"
            ></img>
          </div>
          <p className="font-semibold text-lg mb-6">Here is the generated output based on the given prompt.</p>
          <div>
            <img
              src="/copilotfinal.png"
              className="py-6 w-{300px}"
              alt="LogoAI Logo"
            ></img>
          </div>
        </div>
        <div className="text-lg py-16">
        </div>
      </div>
    )
}