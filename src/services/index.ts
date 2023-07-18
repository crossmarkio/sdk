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
import {
  AddressFullResponse,
  IsConnectedFullResponse,
  IsLockedFullResponse,
  IsOpenFullResponse,
  NetworkFullResponse,
  SignAndSubmitFullResponse,
  SignFullResponse,
  SignInFullResponse,
  SubmitFullResponse,
  VerifyFullResponse,
  VersionFullResponse,
} from '@typings/crossmark/models';

class Sdk extends EventEmitter {
  [x: string]: unknown;
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
    }) as Promise<IsConnectedFullResponse>;

  // Determine if crossmark is actively locked
  isLocked = () =>
    this.api.awaitRequest({
      command: COMMANDS.IS_LOCKED,
    }) as Promise<IsLockedFullResponse>;

  // Determine if an instance of crossmark is open
  isOpen = () =>
    this.api.awaitRequest({
      command: COMMANDS.OPEN,
    }) as Promise<IsOpenFullResponse>;

  // Determine the current version of crossmark
  version = () =>
    this.api.awaitRequest({
      command: COMMANDS.VERSION,
    }) as Promise<VersionFullResponse>;

  // Get the address of the wallet that is actively connected
  getAddress = () =>
    this.api.awaitRequest({
      command: COMMANDS.ADDRESS,
    }) as Promise<AddressFullResponse>;

  // Get the network of the active connection
  getNetwork = () =>
    this.api.awaitRequest({
      command: COMMANDS.NETWORK,
    }) as Promise<NetworkFullResponse>;

  // Attempt to signin to crossmark, pass back request id
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
    }) as Promise<SignInFullResponse>;

  // Attempt to verify wallet ownership, pass back request id
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
    }) as Promise<VerifyFullResponse>;

  // Attempt to sign a payload, pass back request id
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
    }) as Promise<SignFullResponse>;

  // Attempt to submit an already signed txBlob, pass back request id
  // Listen for response emitted event
  submit = (address: string, txblob: string, opts?: SignOpts) =>
    this.api.request({
      command: COMMANDS.SUBMIT,
      data: {
        address,
        txblob,
        opts,
      },
    });

  // Attempt to submit an already signed txBlob, await response
  submitAndWait = (address: string, txblob: string, opts?: SignOpts) =>
    this.api.awaitRequest({
      command: COMMANDS.SUBMIT,
      data: {
        address,
        txblob,
        opts,
      },
    }) as Promise<SubmitFullResponse>;

  // Attempt to sign and submit a payload, pass back request id
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
    }) as Promise<SignAndSubmitFullResponse>;
}

export default Sdk;
