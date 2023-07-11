import { BaseRequest, BaseResponse, SignOpts } from './common/base';
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

export interface SignResponse extends BaseResponse {
  request: SignRequest;
  response: {
    txBlob: string;
    meta: Status;
  };
}
