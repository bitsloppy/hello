"use client";

import { useEffect } from "react";

export default function KoFiWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).kofiWidgetOverlay?.draw("bitsloppy", {
        type: "floating-chat",
        "floating-chat.donateButton.text": "Support me",
        "floating-chat.donateButton.background-color": "#d9534f",
        "floating-chat.donateButton.text-color": "#fff",
      });
    };
    document.body.appendChild(script);
  }, []);
  return null;
}
