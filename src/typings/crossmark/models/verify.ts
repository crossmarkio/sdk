import { BaseFullResponse, BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';
import { Status } from './common/status';

export interface VerifyRequest extends BaseRequest {
  command: COMMANDS.VERIFY;
  data: {
    hex: string;
  };
}

interface VerifyDataResponse {
  data: {
    address: string;
    publicKey: string;
    signature: string;
    meta: Status;
  };
}

export type VerifyResponse = BaseResponse & VerifyDataResponse;

export interface VerifyFullResponse extends BaseFullResponse {
  request: VerifyRequest;
  response: VerifyResponse;
}
