import { BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';

export interface VersionRequest extends BaseRequest {
  command: COMMANDS.VERSION;
}

export interface VersionResponse extends BaseResponse {
  request: VersionRequest;
  response: {
    version: string;
  };
}
