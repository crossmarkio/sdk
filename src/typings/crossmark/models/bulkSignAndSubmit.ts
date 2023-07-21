import {
  BaseFullResponse,
  BaseRequest,
  BaseResponse,
  SignOpts,
} from './common/base';
import { COMMANDS } from '@typings/extension';
import { AllTransactionResponse, SignTransaction } from './common/tx';
import { Status } from './common/status';

export interface BulkSignAndSubmitRequest extends BaseRequest {
  command: COMMANDS.BULK;
  data: {
    txns: SignTransaction[];
    opts?: SignOpts;
  };
}

interface BulkSignAndSubmitDataResponse {
  data: {
    resp: AllTransactionResponse[];
    meta: Status;
  };
}

export type BulkSignAndSubmitResponse = BaseResponse &
  BulkSignAndSubmitDataResponse;

export interface BulkSignAndSubmitFullResponse extends BaseFullResponse {
  request: BulkSignAndSubmitRequest;
  response: BaseResponse & BulkSignAndSubmitDataResponse;
}
