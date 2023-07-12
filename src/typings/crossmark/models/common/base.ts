import { TYPES } from '@typings/extension';

export interface BaseRequest {
  type: TYPES.REQUEST;
  id: string;
}

export interface BaseResponse {
  type: TYPES.RESPONSE;
  id: string;
}

export interface BaseFullResponse {
  createdAt: number;
  resolvedAt?: number;
}

export interface SignOpts {
  description?: string;
}
