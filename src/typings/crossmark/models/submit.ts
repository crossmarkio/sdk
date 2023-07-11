import { BaseRequest, BaseResponse, SignOpts } from './common/base';
import { COMMANDS } from '@typings/extension';
import { AllTransactionResponse } from './common/tx';
import { Status } from './common/status';

export interface SubmitRequest extends BaseRequest {
  command: COMMANDS.SUBMIT;
  data: {
    txblob: string;
    opts?: SignOpts;
  };
}

export interface SubmitResponse extends BaseResponse {
  request: SubmitRequest;
  response: {
    data: AllTransactionResponse;
    meta: Status;
  };
}
