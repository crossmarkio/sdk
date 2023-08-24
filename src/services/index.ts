// Services
import Api from './api';
import Mount from './mount';
import Browser from './browser';
import Env from './env';

import EventEmitter, { EventManager } from './events';

// Crossmark Typings
import { COMMANDS } from '@typings/extension';
import { SignOpts } from '@typings/crossmark/models/common/base';
import {
  AllTransactionRequest,
  SignTransaction,
} from '@typings/crossmark/models/common/tx';
import {
  AddressFullResponse,
  BulkSignAndSubmitFullResponse,
  BulkSignFullResponse,
  BulkSubmitFullResponse,
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
import Session from './session';

class Sdk extends EventEmitter {
  [x: string]: unknown;
  mount: Mount;
  api: Api;
  session: Session;

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
    // This is responsible for collecting and passing events to the parent class
    this.events = new EventManager(this);

    this.session = new Session(this);
  }

  // Establish a connection with Crossmark API. In most cases, this is the not needed.
  // Note: This will be run automatically on mount, with a timeout or 10 seconds. If any reason,
  // if there is a need to reconnect, you can use this function.
  connect = (timeout: number) => this.mount.loop(timeout);

  // Determine if crossmark is connected
  // Note: This will determine if crossmark is connected and ready for requests.
  // It does not mean that the user has signed in yet.
  isConnected = () => this.mount.isMounted;

  // Determine if crossmark is actively locked
  isLocked = () =>
    this.api.awaitRequest({
      command: COMMANDS.IS_LOCKED,
    }) as Promise<IsLockedFullResponse>;

  // Determine if an instance of crossmark is open
  isOpen = () => this.session.isOpen;

  // Determine the current version of crossmark
  version = () =>
    this.api.awaitRequest({
      command: COMMANDS.VERSION,
    }) as Promise<VersionFullResponse>;

  // Get the address of the wallet that is actively connected
  getAddress = () => this.session.address;

  // Get the network of the active connection
  getNetwork = () => this.session.network;

  // Get the network of the active connection
  getUser = () => this.session.user;

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

  // Attempt to sign a payload, pass back request id
  // Listen for response emitted event
  bulkSign = (txns: SignTransaction[], opts?: SignOpts) =>
    this.api.request({
      command: COMMANDS.BULKSIGN,
      data: {
        txns,
        opts,
      },
    });

  // Attempt to sign a payload, await response
  bulkSignAndWait = (txns: SignTransaction[], opts?: SignOpts) =>
    this.api.awaitRequest({
      command: COMMANDS.BULKSIGN,
      data: {
        txns,
        opts,
      },
    }) as Promise<BulkSignFullResponse>;

  // Attempt to submit an already signed txBlob, pass back request id
  // Listen for response emitted event
  bulkSubmit = (address: string, txblobs: string[], opts?: SignOpts) =>
    this.api.request({
      command: COMMANDS.BULKSUBMIT,
      data: {
        address,
        txblobs,
        opts,
      },
    });

  // Attempt to submit an already signed txBlob, await response
  bulkSubmitAndWait = (address: string, txblobs: string[], opts?: SignOpts) =>
    this.api.awaitRequest({
      command: COMMANDS.BULKSUBMIT,
      data: {
        address,
        txblobs,
        opts,
      },
    }) as Promise<BulkSubmitFullResponse>;

  // Attempt to sign and submit a payload, pass back request id
  // Listen for response emitted event
  bulkSignAndSubmit = (txns: SignTransaction[], opts?: SignOpts) =>
    this.api.request({
      command: COMMANDS.BULK,
      data: {
        txns,
        opts,
      },
    });

  // Attempt to sign and submit a payload, await response
  bulkSignAndSubmitAndWait = (txns: SignTransaction[], opts?: SignOpts) =>
    this.api.awaitRequest({
      command: COMMANDS.BULK,
      data: {
        txns,
        opts,
      },
    }) as Promise<BulkSignAndSubmitFullResponse>;

  getResponse = (id: string) => this.session.responses.get(id);
}

export default Sdk;
