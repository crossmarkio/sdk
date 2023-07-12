import { BaseFullResponse, BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';
import { BasicNetwork } from '@typings/schemas/network';

export interface NetworkRequest extends BaseRequest {
  command: COMMANDS.NETWORK;
}

interface NetworkDataResponse {
  data: {
    network: BasicNetwork;
  };
}

export type NetworkResponse = BaseResponse & NetworkDataResponse;

export interface NetworkFullResponse extends BaseFullResponse {
  request: NetworkRequest;
  response: NetworkResponse;
}
