"use client";

import { useEffect } from "react";

/**
 * Injects the Web Awesome module loader into <head>.
 * Needs to be a client component so we can use useEffect.
 * https://webawesome.com/docs/
 */
export default function WebAwesomeLoader() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src*="webawesome.loader.js"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://ka-f.webawesome.com/webawesome@3.14.0/webawesome.loader.js";
    document.head.appendChild(script);
  }, []);
  return null;
}
