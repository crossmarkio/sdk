import { BaseRequest, BaseResponse, SignOpts } from './common/base';
import { COMMANDS } from '@typings/extension';
import { AllTransactionRequest, AllTransactionResponse } from './common/tx';
import { Status } from './common/status';

export interface SignAndSubmitRequest extends BaseRequest {
  command: COMMANDS.SIGNANDSUBMIT;
  data: {
    tx: AllTransactionRequest;
    opts?: SignOpts;
  };
}

export interface SignAndSubmitResponse extends BaseResponse {
  request: SignAndSubmitRequest;
  response: {
    data: AllTransactionResponse;
    meta: Status;
  };
}
