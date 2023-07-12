import { BaseFullResponse, BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';

export interface IsOpenRequest extends BaseRequest {
  command: COMMANDS.OPEN;
}

interface OpenedDataResponse {
  data: {
    isOpen: boolean;
  };
}

export type IsOpenResponse = BaseResponse & OpenedDataResponse;

export interface IsOpenFullResponse extends BaseFullResponse {
  request: IsOpenRequest;
  response: IsOpenResponse;
}
