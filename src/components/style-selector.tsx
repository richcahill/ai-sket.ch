import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { type Style, styles } from "@/lib/styles";

interface Props {
  selectedStyle: Style;
  setSelectedStyle: (style: Style) => void;
}

export function StyleSelector(props: Props) {
  const handleValueChange = (value: string) => {
    const selectedStyle = styles.find((style) => style.title === value);
    if (selectedStyle) {
      props.setSelectedStyle(selectedStyle);
    } else {
      console.error("Invalid style selected");
    }
  };

  return (
    <Select
      defaultValue={props.selectedStyle.title}
      onValueChange={handleValueChange}
    >
      <SelectTrigger className="w-full rounded-sm shadow-none bg-white/40">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="rounded-sm">
        {styles.map((style, i) => (
          <SelectItem key={i} value={style.title} className="cursor-pointer">
            {style.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
