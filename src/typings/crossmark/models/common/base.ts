import { TYPES } from '@typings/extension';

export interface BaseRequest {
  type: TYPES.REQUEST;
  id: string;
}

export interface BaseResponse {
  createdAt: number;
  resolvedAt?: number;
}

export interface SignOpts {
  description?: string;
}
