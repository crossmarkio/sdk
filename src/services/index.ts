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

  sign = async ({
    payload,
    opts,
  }: {
    payload: SignInTransaction | Transaction;
    opts: SignInputOpts;
  }) =>
    await this.api.request({
      command: COMMANDS.VERSION,
      data: {
        payload,
        opts,
      },
    });
}

export default Sdk;
