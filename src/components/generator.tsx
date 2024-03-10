/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Image from "next/image";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "@/components/ui/button";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Loader } from "lucide-react";

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
      "A simple line drawing sharpie style sketch of " + prompt;
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
    <ResizablePanelGroup
      direction="horizontal"
      className="gap-4 w-full p-4 bg-slate-50 rounded-md"
    >
      <ResizablePanel
        className="flex flex-col gap-2 p-2 min-w-72 max-w-xl"
        defaultSize={33}
      >
        <h1 className="font-medium">Prompt</h1>
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="prompt" className="text-sm opacity-30 leading-tight">
            A simple line drawing sharpie style sketch of...
          </label>
          <TextareaAutosize
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-11 border p-2 flex-1 leading-tight bg-white/40 rounded-sm"
          />
        </div>
        <Button
          className="rounded-sm"
          onClick={generateImage}
          disabled={loading}
        >
          {(!loading && "Generate Sketch") || "Generating..."}
        </Button>
        {revisedPrompt && <p className="text-xs opacity-20">{revisedPrompt}</p>}
      </ResizablePanel>
      <ResizableHandle />

      <ResizablePanel className="p-2">
        <div className="aspect-square max-h-screen w-full flex items-center justify-center">
          {image && (
            <div>
              <img
                src={image}
                alt="generated image"
                className="max-w-full max-h-full rounded-md"
              />
            </div>
          )}
          {loading && <Loader size={24} className="animate-spin" />}
          {!image && !loading && (
            <div className="flex flex-col items-center gap-2 text-sm text-black/10">
              Your artwork will appear here.
            </div>
          )}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Generator;
