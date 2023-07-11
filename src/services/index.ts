// Services
import Api from './api';
import Mount from './mount';
import Browser from './browser';
import Env from './env';

import EventEmitter, { EventManager } from './events';

// Crossmark Typings
import { COMMANDS } from '@typings/extension';
import { SignOpts } from '@typings/crossmark/models/common/base';
import { AllTransactionRequest } from '@typings/crossmark/models/common/tx';
import { SignInResponse } from '@typings/crossmark/models/signIn';
import { VerifyResponse } from '@typings/crossmark/models/verify';
import { SignResponse } from '@typings/crossmark/models/sign';
import { SubmitResponse } from '@typings/crossmark/models/submit';
import { NetworkResponse } from '@typings/crossmark/models/network';
import { AddressResponse } from '@typings/crossmark/models/address';
import { VersionResponse } from '@typings/crossmark/models/version';
import { IsOpenResponse } from '@typings/crossmark/models/isOpen';
import { IsLockedResponse } from '@typings/crossmark/models/isLocked';
import { IsConnectedResponse } from '@typings/crossmark/models/isConnected';

class Sdk extends EventEmitter {
  mount: Mount;
  api: Api;

  browser: typeof Browser;
  env: typeof Env;

  events: EventManager;
  constructor() {
    super();

    this.browser = Browser;
    this.env = Env;

    // Mount crossmark window object if exists
    this.mount = new Mount();

    // Mount api service which is a clone of crossmark
    // which is mounted to the window object
    this.api = new Api();

    // Mount the event manager service
    // This is responsible for collectign and passing events to the parent class
    this.events = new EventManager(this);
  }

  // Determine if crossmark is connected
  isConnected = () =>
    this.api.awaitRequest({
      command: COMMANDS.IS_CONNECTED,
    }) as Promise<IsConnectedResponse>;

  // Determine if crossmark is actively locked
  isLocked = () =>
    this.api.awaitRequest({
      command: COMMANDS.IS_LOCKED,
    }) as Promise<IsLockedResponse>;

  // Determine if an instance of crossmark is open
  isOpen = () =>
    this.api.awaitRequest({
      command: COMMANDS.OPEN,
    }) as Promise<IsOpenResponse>;

  // Determine the current version of crossmark
  version = () =>
    this.api.awaitRequest({
      command: COMMANDS.VERSION,
    }) as Promise<VersionResponse>;

  // Get the address of the wallet that is actively connected
  getAddress = () =>
    this.api.awaitRequest({
      command: COMMANDS.ADDRESS,
    }) as Promise<AddressResponse>;

  // Get the network of the active connection
  getNetwork = () =>
    this.api.awaitRequest({
      command: COMMANDS.NETWORK,
    }) as Promise<NetworkResponse>;

  // Attempt to signin to crossmark, passed back request id
  // Listen for response emitted event
  signIn = (hex?: string) =>
    this.api.request({
      command: COMMANDS.SIGN,
      data: {
        tx: { TransactionType: 'SignIn' },
        hex,
      },
    });

  // Attempt to signin to crossmark, await response
  // Successful response will return a wallet address
  signInAndWait = (hex?: string) =>
    this.api.awaitRequest({
      command: COMMANDS.SIGN,
      data: {
        tx: { TransactionType: 'SignIn' },
        hex,
      },
    }) as Promise<SignInResponse>;

  // Attempt to verify wallet ownership, passed back request id
  // Successful response will return a wallet address
  verify = (hex: string) =>
    this.api.request({
      command: COMMANDS.VERIFY,
      data: {
        hex,
      },
    });

  // Attempt to verify wallet ownership, await response
  // Successful response will return a wallet address
  verifyAndWait = (hex: string) =>
    this.api.awaitRequest({
      command: COMMANDS.VERIFY,
      data: {
        hex,
      },
    }) as Promise<VerifyResponse>;

  // Attempt to sign a payload, passed back request id
  // Listen for response emitted event
  sign = (tx: AllTransactionRequest, opts?: SignOpts) =>
    this.api.request({
      command: COMMANDS.SIGN,
      data: {
        tx,
        opts,
      },
    });

  // Attempt to sign a payload, await response
  signAndWait = (tx: AllTransactionRequest, opts?: SignOpts) =>
    this.api.awaitRequest({
      command: COMMANDS.SIGN,
      data: {
        tx,
        opts,
      },
    }) as Promise<SignResponse>;

  // Attempt to submit and already signed txBlob, passed back request id
  // Listen for response emitted event
  submit = (txblob: string, opts?: SignOpts) =>
    this.api.request({
      command: COMMANDS.SUBMIT,
      data: {
        txblob,
        opts,
      },
    });

  // Attempt to submit and already signed txBlob, await response
  submitAndWait = (txblob: string, opts?: SignOpts) =>
    this.api.awaitRequest({
      command: COMMANDS.SUBMIT,
      data: {
        txblob,
        opts,
      },
    }) as Promise<SubmitResponse>;

  // Attempt to sign and submit a payload, passed back request id
  // Listen for response emitted event
  signAndSubmit = (tx: AllTransactionRequest, opts?: SignOpts) =>
    this.api.request({
      command: COMMANDS.SIGNANDSUBMIT,
      data: {
        tx,
        opts,
      },
    });

  // Attempt to sign and submit a payload, await response
  signAndSubmitAndWait = (tx: AllTransactionRequest, opts?: SignOpts) =>
    this.api.awaitRequest({
      command: COMMANDS.SIGNANDSUBMIT,
      data: {
        tx,
        opts,
      },
    }) as Promise<SignResponse>;
}

export default Sdk;
