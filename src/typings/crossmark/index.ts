import type CrossmarkMethods from "./methods";

declare global {
  interface Window {
    crossmark: crossmark;
  }
}

export type crossmark = CrossmarkMethods;
