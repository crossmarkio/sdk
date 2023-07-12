import { BaseFullResponse, BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';

export interface IsLockedRequest extends BaseRequest {
  command: COMMANDS.IS_LOCKED;
}
interface LockedDataResponse {
  data: {
    isLocked: boolean;
  };
}

export type IsLockedResponse = BaseResponse & LockedDataResponse;

export interface IsLockedFullResponse extends BaseFullResponse {
  request: IsLockedRequest;
  response: IsLockedResponse;
}
