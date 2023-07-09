import { CleanExtMessage } from "../../../extension";

export interface GeneralResponse {
  request: CleanExtMessage;
  response: CleanExtMessage;
  createdAt: number;
  resolvedAt?: number;
}
