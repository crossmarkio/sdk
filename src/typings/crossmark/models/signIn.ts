import {
  BaseFullResponse,
  BaseRequest,
  BaseResponse,
  SignOpts,
} from './common/base';
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

interface SignInDataResponse {
  data: {
    address: string;
    publicKey: string;
    signature?: string;
    meta: Status;
  };
}

export type SignInResponse = BaseResponse & SignInDataResponse;

export interface SignInFullResponse extends BaseFullResponse {
  request: SignInRequest;
  response: SignInResponse;
}
