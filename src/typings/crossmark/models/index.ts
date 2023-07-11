import { IsConnectedRequest, IsConnectedResponse } from './isConnected';
import { IsLockedRequest, IsLockedResponse } from './isLocked';
import { SignInRequest, SignInResponse } from './signIn';
import { IsOpenRequest, IsOpenResponse } from './isOpen';

import { SignRequest, SignResponse } from './sign';
import { VersionRequest, VersionResponse } from './version';

import { AddressRequest, AddressResponse } from './address';
import { NetworkRequest, NetworkResponse } from './network';
import { VerifyRequest, VerifyResponse } from './verify';

import { SignAndSubmitRequest, SignAndSubmitResponse } from './signAndSubmit';
import { SubmitRequest, SubmitResponse } from './submit';

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
  | SubmitRequest;

export type Response =
  | IsConnectedResponse
  | IsLockedResponse
  | SignInResponse
  | IsOpenResponse
  | SignResponse
  | VersionResponse
  | AddressResponse
  | NetworkResponse
  | VerifyResponse
  | SignAndSubmitResponse
  | SubmitResponse;
