// Services
import Api from './api';
import Mount from './mount';
import EventEmitter, { EventManager } from './events';

// Crossmark Typings
import { COMMANDS } from '@typings/extension';
import {
  SignInputOpts,
  SignInTransaction,
} from '@typings/crossmark/models/sign';

// Xrpl Typings
import type { Transaction } from 'xrpl';

class Sdk extends EventEmitter {
  mount: Mount;
  api: Api;
  events: EventManager;
  constructor() {
    super();
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
    });

  // Determine if crossmark is actively locked
  isLocked = () =>
    this.api.awaitRequest({
      command: COMMANDS.IS_LOCKED,
    });

  // Determine if an instance of crossmark is open
  isOpen = () =>
    this.api.awaitRequest({
      command: COMMANDS.OPEN,
    });

  // Determine the current version of crossmark
  version = () =>
    this.api.awaitRequest({
      command: COMMANDS.VERSION,
    });

  // Get the address of the wallet that is actively connected
  getAddress = () =>
    this.api.awaitRequest({
      command: COMMANDS.ADDRESS,
    });

  // Get the network of the active connection
  getNetwork = () =>
    this.api.awaitRequest({
      command: COMMANDS.NETWORK,
    });

  // Attempt to signin to crossmark, await response
  // Successful response will return a wallet address
  awaitSignIn = () =>
    this.api.awaitRequest({
      command: COMMANDS.SIGN,
      data: {
        payload: { TransactionType: 'SignIn' },
      },
    });

  // Attempt to signin to crossmark, passed back request id
  // Listen for response emitted event
  signIn = () =>
    this.api.request({
      command: COMMANDS.SIGN,
      data: {
        payload: { TransactionType: 'SignIn' },
      },
    });

  // Attempt to sign a payload, passed back request id
  // Listen for response emitted event
  sign = (payload: SignInTransaction | Transaction, opts?: SignInputOpts) =>
    this.api.request({
      command: COMMANDS.SIGN,
      data: {
        payload,
        opts,
      },
    });

  // Attempt to sign and submit a payload, passed back request id
  // Listen for response emitted event
  signAndSubmit = (
    payload: SignInTransaction | Transaction,
    opts?: SignInputOpts
  ) =>
    this.api.request({
      command: COMMANDS.SIGNANDSUBMIT,
      data: {
        payload,
        opts,
      },
    });

  // Attempt to submit and already signed txBlob, passed back request id
  // Listen for response emitted event
  submit = (txblob: string, opts?: SignInputOpts) =>
    this.api.request({
      command: COMMANDS.SUBMIT,
      data: {
        txblob,
        opts,
      },
    });

  // Attempt to sign a payload, await response
  awaitSign = (
    payload: SignInTransaction | Transaction,
    opts?: SignInputOpts
  ) =>
    this.api.awaitRequest({
      command: COMMANDS.SIGN,
      data: {
        payload,
        opts,
      },
    });

  // Attempt to sign and submit a payload, await response
  awaitSignAndSubmit = (
    payload: SignInTransaction | Transaction,
    opts?: SignInputOpts
  ) =>
    this.api.awaitRequest({
      command: COMMANDS.SIGNANDSUBMIT,
      data: {
        payload,
        opts,
      },
    });

  // Attempt to submit and already signed txBlob, await response
  awaitSubmit = (txblob: string, opts?: SignInputOpts) =>
    this.api.awaitRequest({
      command: COMMANDS.SUBMIT,
      data: {
        txblob,
        opts,
      },
    });
}

export default Sdk;
