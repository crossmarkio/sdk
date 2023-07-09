import {
  SignInputOpts,
  SignInTransaction,
} from '@typings/crossmark/models/sign';
import type { Transaction } from 'xrpl';

import { COMMANDS } from '@typings/extension';
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

  isConnected = async () =>
    await this.api.request({
      command: COMMANDS.IS_CONNECTED,
    });

  isLocked = async () =>
    await this.api.request({
      command: COMMANDS.IS_LOCKED,
    });

  isOpen = async () =>
    await this.api.request({
      command: COMMANDS.OPEN,
    });

  version = async () =>
    await this.api.request({
      command: COMMANDS.VERSION,
    });

  getAddress = async () =>
    await this.api.request({
      command: COMMANDS.ADDRESS,
    });

  getNetwork = async () =>
    await this.api.request({
      command: COMMANDS.NETWORK,
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
