import { BaseFullResponse, BaseRequest, BaseResponse } from './common/base';
import { COMMANDS } from '@typings/extension';

export interface AddressRequest extends BaseRequest {
  command: COMMANDS.ADDRESS;
}

interface AddressDataResponse {
  data: {
    address: string;
  };
}

export type AddressResponse = BaseResponse & AddressDataResponse;

export interface AddressFullResponse extends BaseFullResponse {
  request: AddressRequest;
  response: AddressResponse;
}
