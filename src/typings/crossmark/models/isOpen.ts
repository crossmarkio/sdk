import { BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';

export interface IsOpenRequest extends BaseRequest {
  command: COMMANDS.OPEN;
}

export interface IsOpenResponse extends BaseResponse {
  request: IsOpenRequest;
  response: {
    isLocked: boolean;
  };
}
