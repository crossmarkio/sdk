import { BaseRequest, BaseResponse, SignOpts } from './common/base';
import { COMMANDS } from '@typings/extension';
import { SignInTransaction } from './common/tx';
import { Status } from './common/status';

export interface SignInRequest extends BaseRequest {
  command: COMMANDS.SIGN;
  data: {
    tx: SignInTransaction;
    hex?: string;
    opts?: SignOpts;
  };
}

export interface SignInResponse extends BaseResponse {
  request: SignInRequest;
  response: {
    address: string;
    publicKey: string;
    signature?: string;
    meta: Status;
  };
}
