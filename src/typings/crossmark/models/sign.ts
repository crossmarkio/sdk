import {
  BaseFullResponse,
  BaseRequest,
  BaseResponse,
  SignOpts,
} from './common/base';
import { COMMANDS } from '@typings/extension';
import { AllTransactionRequest } from './common/tx';
import { Status } from './common/status';

export interface SignRequest extends BaseRequest {
  command: COMMANDS.SIGN;
  data: {
    tx: AllTransactionRequest;
    opts?: SignOpts;
  };
}

interface SignDataResponse {
  data: {
    txBlob: string;
    meta: Status;
  };
}

export type SignResponse = BaseResponse & SignDataResponse;

export interface SignFullResponse extends BaseFullResponse {
  request: SignRequest;
  response: SignResponse;
}
