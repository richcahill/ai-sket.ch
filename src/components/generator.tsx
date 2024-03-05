/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Image from "next/image";
import TextareaAutosize from "react-textarea-autosize";

interface Props {
  // Define your component props here
}

const Generator = (props: Props) => {
  const [image, setImage] = useState<string | null>(null);
  const [revisedPrompt, setRevisedPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>(
    "a group of people sitting around a campfire in the woods"
  );

  const generateImage = async () => {
    setLoading(true);

    let sketchPrompt =
      (await "A simple line drawing sharpie style sketch of ") + prompt;
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: sketchPrompt }),
    });
    const data = await response.json();
    console.log(data);
    setLoading(false);
    setImage(data[0].url);
    setRevisedPrompt(data[0].revised_prompt);
  };

  return (
    <div className="flex flex-col gap-8 w-96 p-4 bg-slate-100 rounded-md">
      <h1>Prompt:</h1>

      <div className="flex flex-col gap-1">
        <label htmlFor="prompt" className="text-sm opacity-65 ml-2">
          A simple line drawing sharpie style sketch of...
        </label>
        <TextareaAutosize
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-11 border rounded-md p-2"
        />
      </div>

      <button
        className="px-4 h-11 bg-slate-900 text-white rounded-md"
        onClick={generateImage}
      >
        Generate Image
      </button>
      {loading && <p>Loading...</p>}
      {revisedPrompt && <p className="text-xs opacity-20">{revisedPrompt}</p>}
      {image && (
        <div>
          <img
            src={image}
            alt="generated image"
            className="max-w-full max-h-full rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default Generator;
