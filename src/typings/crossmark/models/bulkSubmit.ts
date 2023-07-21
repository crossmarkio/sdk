import {
  BaseFullResponse,
  BaseRequest,
  BaseResponse,
  SignOpts,
} from './common/base';
import { COMMANDS } from '@typings/extension';
import { AllTransactionResponse } from './common/tx';
import { Status } from './common/status';

export interface BulkSubmitRequest extends BaseRequest {
  command: COMMANDS.BULKSUBMIT;
  data: {
    address: string;
    txblobs: string[];
    opts?: SignOpts;
  };
}

interface BulkSubmitDataResponse {
  data: {
    resp: AllTransactionResponse[];
    meta: Status;
  };
}

export type BulkSubmitResponse = BaseResponse & BulkSubmitDataResponse;

export interface BulkSubmitFullResponse extends BaseFullResponse {
  request: BulkSubmitRequest;
  response: BulkSubmitResponse;
}
