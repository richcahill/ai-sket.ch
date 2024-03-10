/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { StyleSelector } from "@/components/style-selector";
import { Button } from "@/components/ui/button";
import { checkPassword } from "@/actions/checkPassword";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Loader, Wand } from "lucide-react";
import { type Style, styles } from "@/lib/styles";
import { toast } from "sonner";
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
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<Style>(styles[0]);

  const generateImage = async () => {
    setLoading(true);
    setError("");

    const pwCheck = await checkPassword(password);
    if (!pwCheck.success) {
      await console.log(checkPassword(password));
      setError("Incorrect password, ask rich@rc3.me for access.");
      setLoading(false);
      return;
    }

    let sketchPrompt = selectedStyle.prompt + prompt;
    console.log(sketchPrompt);
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
    <div className="gap-4 w-full p-4 rounded-md flex md:flex-row flex-col h-full items-stretch">
      <div className="flex md:w-1/2 flex-col gap-4">
        <div className="flex flex-col gap-0.5 flex-1">
          <label htmlFor="prompt" className="font-medium text-sm">
            Prompt
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full min-h-32 overflow-auto border p-2 flex-1 leading-tight bg-white/40 rounded-sm text-sm"
          />
        </div>
        <div className="flex flex-col gap-0.5 ">
          <label htmlFor="prompt" className="font-medium text-sm">
            Style
          </label>
          <StyleSelector
            selectedStyle={styles[0]}
            setSelectedStyle={setSelectedStyle}
          />
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="Password"
            className="border p-2 leading-tight bg-white/40 rounded-sm text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="rounded-sm flex justify-between"
            onClick={generateImage}
            disabled={loading}
          >
            <div>{(!loading && "Generate Sketch") || "Generating..."}</div>
            <Wand size={16} />
          </Button>
        </div>
      </div>
      {/* <div className="h-full self-stretch border-r border-black/50 flex-grow">
        hey
      </div> */}
      <div className="flex items-center justify-center md:w-1/2">
        <div className="aspect-square max-h-screen w-full flex items-center justify-center">
          {error && (
            <div className="flex flex-col items-center gap-2 text-sm text-red-500">
              {error}
            </div>
          )}
          {image && !loading && !error && (
            <a href={image} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={revisedPrompt || prompt}
                className="max-w-full max-h-full rounded-md cursor-crosshair"
                // copy the image to clipboard on click
              />
            </a>
          )}
          {loading && <Loader size={24} className="animate-spin" />}
          {!image && !loading && !error && (
            <div className="flex flex-col items-center gap-2 text-sm text-black/10">
              Your artwork will appear here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Generator;
