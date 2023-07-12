import {
  BaseFullResponse,
  BaseRequest,
  BaseResponse,
  SignOpts,
} from './common/base';
import { COMMANDS } from '@typings/extension';
import { AllTransactionResponse } from './common/tx';
import { Status } from './common/status';

export interface SubmitRequest extends BaseRequest {
  command: COMMANDS.SUBMIT;
  data: {
    address: string;
    txblob: string;
    opts?: SignOpts;
  };
}

interface SubmitDataResponse {
  data: {
    resp: AllTransactionResponse;
    meta: Status;
  };
}

export type SubmitResponse = BaseResponse & SubmitDataResponse;

export interface SubmitFullResponse extends BaseFullResponse {
  request: SubmitRequest;
  response: SubmitResponse;
}
