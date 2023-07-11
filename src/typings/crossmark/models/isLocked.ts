import { BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';

export interface IsLockedRequest extends BaseRequest {
  command: COMMANDS.IS_LOCKED;
}

export interface IsLockedResponse extends BaseResponse {
  request: IsLockedRequest;
  response: {
    isLocked: boolean;
  };
}
