import { BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';
import { Status } from './common/status';

export interface VerifyRequest extends BaseRequest {
  command: COMMANDS.VERIFY;
  data: {
    hex: string;
  };
}

export interface VerifyResponse extends BaseResponse {
  request: VerifyRequest;
  response: {
    address: string;
    publicKey: string;
    signature: string;
    meta: Status;
  };
}
