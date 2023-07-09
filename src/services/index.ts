import {
  SignInputOpts,
  SignInTransaction,
} from '@typings/crossmark/models/sign';
import type { Transaction } from 'xrpl';

import { CleanExtMessage, COMMANDS } from '@typings/extension';
import Api from './api';
import ModEventsEmitter, { EventManager } from './events';
import Mount from './mount';

class Sdk extends ModEventsEmitter {
  mount: Mount;
  api: Api;
  events: EventManager;
  constructor() {
    super();
    this.mount = new Mount();
    this.api = new Api();
    this.events = new EventManager(this);
  }

  isConnected = () =>
    this.api.awaitRequest({
      command: COMMANDS.IS_CONNECTED,
    });

  isLocked = () =>
    this.api.awaitRequest({
      command: COMMANDS.IS_LOCKED,
    });

  isOpen = () =>
    this.api.awaitRequest({
      command: COMMANDS.OPEN,
    });

  version = () =>
    this.api.awaitRequest({
      command: COMMANDS.VERSION,
    });

  getAddress = () =>
    this.api.awaitRequest({
      command: COMMANDS.ADDRESS,
    });

  getNetwork = () =>
    this.api.awaitRequest({
      command: COMMANDS.NETWORK,
    });

  awaitSignIn = ({ request }: { request: SignInTransaction }) =>
    this.api.awaitRequest({
      command: COMMANDS.SIGN,
      data: {
        payload: request,
      },
    });

  signIn = ({ request }: { request: SignInTransaction }) =>
    this.api.request({
      command: COMMANDS.SIGN,
      data: {
        payload: request,
      },
    });

  sign = ({
    payload,
    opts,
  }: {
    payload: SignInTransaction | Transaction;
    opts: SignInputOpts;
  }) =>
    this.api.request({
      command: COMMANDS.SIGN,
      data: {
        payload,
        opts,
      },
    });

  signAndSubmit = ({
    payload,
    opts,
  }: {
    payload: SignInTransaction | Transaction;
    opts: SignInputOpts;
  }) =>
    this.api.request({
      command: COMMANDS.SIGNANDSUBMIT,
      data: {
        payload,
        opts,
      },
    });

  submit = ({ txblob, opts }: { txblob: string; opts: SignInputOpts }) =>
    this.api.request({
      command: COMMANDS.SUBMIT,
      data: {
        txblob,
        opts,
      },
    });

  awaitSign = ({
    payload,
    opts,
  }: {
    payload: SignInTransaction | Transaction;
    opts: SignInputOpts;
  }) =>
    this.api.awaitRequest({
      command: COMMANDS.SIGN,
      data: {
        payload,
        opts,
      },
    });

  awaitSignAndSubmit = ({
    payload,
    opts,
  }: {
    payload: SignInTransaction | Transaction;
    opts: SignInputOpts;
  }) =>
    this.api.awaitRequest({
      command: COMMANDS.SIGNANDSUBMIT,
      data: {
        payload,
        opts,
      },
    });

  awaitSubmit = ({ txblob, opts }: { txblob: string; opts: SignInputOpts }) =>
    this.api.awaitRequest({
      command: COMMANDS.SUBMIT,
      data: {
        txblob,
        opts,
      },
    });
}

export default Sdk;
