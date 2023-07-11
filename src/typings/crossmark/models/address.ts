import { BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';

export interface AddressRequest extends BaseRequest {
  command: COMMANDS.ADDRESS;
}

export interface AddressResponse extends BaseResponse {
  request: AddressRequest;
  response: {
    address: string;
  };
}
