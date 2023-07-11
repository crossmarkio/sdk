import { BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';

export interface IsConnectedRequest extends BaseRequest {
  command: COMMANDS.IS_CONNECTED;
}

export interface IsConnectedResponse extends BaseResponse {
  request: IsConnectedRequest;
  response: {
    isConnected: boolean;
  };
}
