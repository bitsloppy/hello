/**
 * TypeScript declarations for Web Awesome web components.
 * Uses declare module 'react' augmentation for React 19 / Next.js 15 compatibility.
 * https://webawesome.com
 */

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "wa-card": React.HTMLAttributes<HTMLElement> & {
        class?: string;
        "data-variant"?: string;
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
    }
  }
}
