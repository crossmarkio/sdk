import {
  BaseFullResponse,
  BaseRequest,
  BaseResponse,
  SignOpts,
} from './common/base';
import { COMMANDS } from '@typings/extension';
import { SignTransaction } from './common/tx';
import { Status } from './common/status';

export interface BulkSignRequest extends BaseRequest {
  command: COMMANDS.BULKSIGN;
  data: {
    txns: SignTransaction[];
    opts?: SignOpts;
  };
}

interface BulkSignDataResponse {
  data: {
    txBlobs: string[];
    meta: Status;
  };
}

export type BulkSignResponse = BaseResponse & BulkSignDataResponse;

export interface BulkSignFullResponse extends BaseFullResponse {
  request: BulkSignRequest;
  response: BulkSignResponse;
}
