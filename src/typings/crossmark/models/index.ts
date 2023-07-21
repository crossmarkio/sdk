import {
  IsConnectedFullResponse,
  IsConnectedRequest,
  IsConnectedResponse,
} from './isConnected';
import {
  IsLockedFullResponse,
  IsLockedRequest,
  IsLockedResponse,
} from './isLocked';
import { SignInFullResponse, SignInRequest, SignInResponse } from './signIn';
import { IsOpenFullResponse, IsOpenRequest, IsOpenResponse } from './isOpen';

import { SignFullResponse, SignRequest, SignResponse } from './sign';
import {
  VersionFullResponse,
  VersionRequest,
  VersionResponse,
} from './version';

import {
  AddressFullResponse,
  AddressRequest,
  AddressResponse,
} from './address';
import {
  NetworkFullResponse,
  NetworkRequest,
  NetworkResponse,
} from './network';
import { VerifyFullResponse, VerifyRequest, VerifyResponse } from './verify';

import {
  SignAndSubmitFullResponse,
  SignAndSubmitRequest,
  SignAndSubmitResponse,
} from './signAndSubmit';
import { SubmitFullResponse, SubmitRequest, SubmitResponse } from './submit';
import {
  BulkSignFullResponse,
  BulkSignRequest,
  BulkSignResponse,
} from './bulkSign';
import {
  BulkSubmitFullResponse,
  BulkSubmitRequest,
  BulkSubmitResponse,
} from './bulkSubmit';
import {
  BulkSignAndSubmitFullResponse,
  BulkSignAndSubmitRequest,
  BulkSignAndSubmitResponse,
} from './bulkSignAndSubmit';

export type Request =
  | IsConnectedRequest
  | IsLockedRequest
  | SignInRequest
  | IsOpenRequest
  | SignRequest
  | VersionRequest
  | NetworkRequest
  | AddressRequest
  | VerifyRequest
  | SignAndSubmitRequest
  | SubmitRequest
  | BulkSubmitRequest
  | BulkSignRequest
  | BulkSignAndSubmitRequest;

export type Response =
  | IsConnectedFullResponse
  | IsLockedFullResponse
  | SignInFullResponse
  | IsOpenFullResponse
  | SignFullResponse
  | VersionFullResponse
  | AddressFullResponse
  | NetworkFullResponse
  | VerifyFullResponse
  | SignAndSubmitFullResponse
  | SubmitFullResponse
  | BulkSignFullResponse
  | BulkSubmitFullResponse
  | BulkSignAndSubmitFullResponse;

export {
  IsConnectedRequest,
  IsLockedRequest,
  SignInRequest,
  IsOpenRequest,
  SignRequest,
  VersionRequest,
  NetworkRequest,
  AddressRequest,
  VerifyRequest,
  SignAndSubmitRequest,
  SubmitRequest,
  IsConnectedResponse,
  IsLockedResponse,
  SignInResponse,
  IsOpenResponse,
  SignResponse,
  VersionResponse,
  AddressResponse,
  NetworkResponse,
  VerifyResponse,
  SignAndSubmitResponse,
  SubmitResponse,
  IsConnectedFullResponse,
  IsLockedFullResponse,
  SignInFullResponse,
  IsOpenFullResponse,
  SignFullResponse,
  VersionFullResponse,
  AddressFullResponse,
  NetworkFullResponse,
  VerifyFullResponse,
  SignAndSubmitFullResponse,
  SubmitFullResponse,
  BulkSubmitRequest,
  BulkSignRequest,
  BulkSignAndSubmitRequest,
  BulkSubmitFullResponse,
  BulkSignFullResponse,
  BulkSignAndSubmitFullResponse,
  BulkSubmitResponse,
  BulkSignResponse,
  BulkSignAndSubmitResponse,
};
