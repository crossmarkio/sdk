import { BaseFullResponse, BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';

export interface VersionRequest extends BaseRequest {
  command: COMMANDS.VERSION;
}

interface VersionDataResponse {
  data: {
    version: string;
  };
}

export type VersionResponse = BaseResponse & VersionDataResponse;

export interface VersionFullResponse extends BaseFullResponse {
  request: VersionRequest;
  response: VersionResponse;
}
