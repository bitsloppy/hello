/**
 * TypeScript declarations for Web Awesome web components.
 * Extends React's JSX intrinsic elements so custom elements
 * can be used in TSX without type errors.
 * https://webawesome.com
 */
import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wa-card": React.HTMLAttributes<HTMLElement> & {
        class?: string;
      };
      "wa-button": React.HTMLAttributes<HTMLElement> & {
        variant?: "brand" | "success" | "neutral" | "warning" | "danger";
        appearance?: "filled" | "outlined" | "plain";
        href?: string;
        target?: string;
        rel?: string;
        pill?: boolean;
        size?: "small" | "medium" | "large";
        disabled?: boolean;
        loading?: boolean;
        class?: string;
      };
      "wa-badge": React.HTMLAttributes<HTMLElement> & {
        variant?: "brand" | "success" | "neutral" | "warning" | "danger";
        pill?: boolean;
        pulse?: boolean;
        class?: string;
      };
      "wa-icon": React.HTMLAttributes<HTMLElement> & {
        name?: string;
        label?: string;
        library?: string;
        src?: string;
        class?: string;
      };
      "wa-tag": React.HTMLAttributes<HTMLElement> & {
        variant?: string;
        size?: string;
        pill?: boolean;
        removable?: boolean;
        class?: string;
      };
    }
  }
}
