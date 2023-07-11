import { BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';
import { BasicNetwork } from '@typings/schemas/network';

export interface NetworkRequest extends BaseRequest {
  command: COMMANDS.NETWORK;
}

export interface NetworkResponse extends BaseResponse {
  request: NetworkRequest;
  response: {
    network: BasicNetwork;
  };
}
