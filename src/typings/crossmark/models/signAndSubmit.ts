import {
  BaseFullResponse,
  BaseRequest,
  BaseResponse,
  SignOpts,
} from './common/base';
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

interface SignAndSubmitDataResponse {
  data: {
    resp: AllTransactionResponse;
    meta: Status;
  };
}

export type SignAndSubmitResponse = BaseResponse & SignAndSubmitDataResponse;

export interface SignAndSubmitFullResponse extends BaseFullResponse {
  request: SignAndSubmitRequest;
  response: BaseResponse & SignAndSubmitDataResponse;
}
