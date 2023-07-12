import { BaseFullResponse, BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';

export interface IsConnectedRequest extends BaseRequest {
  command: COMMANDS.IS_CONNECTED;
}

interface ConnectedDataResponse {
  data: {
    isConnected: boolean;
  };
}

export type IsConnectedResponse = BaseResponse & ConnectedDataResponse;

export interface IsConnectedFullResponse extends BaseFullResponse {
  request: IsConnectedRequest;
  response: IsConnectedResponse;
}
