import type { CleanExtMessage } from "../../../extension";

export interface GeneralOutput {
  request: CleanExtMessage;
  response: CleanExtMessage;
  createdAt: number;
  resolvedAt?: number;
}
