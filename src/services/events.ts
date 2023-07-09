import EventEmitter from 'events';

import { EVENTS, CatchAllEvent } from '@typings/extension';

import { BasicNetwork } from '@typings/schemas/network';
import { BasicUser } from '@typings/schemas/user';
import Sdk from '.';
import Mount from './mount';
import Api from './api';

// events
declare interface ModEventsEmitter {
  on(event: EVENTS.PING, listener: () => void): this;
  on(event: EVENTS.CLOSE, listener: () => void): this;
  on(event: EVENTS.OPEN, listener: () => void): this;
  on(event: EVENTS.SIGNOUT, listener: () => void): this;
  on(event: EVENTS.USER_CHANGE, listener: (user: BasicUser) => void): this;
  on(event: EVENTS.ALL, listener: (all: CatchAllEvent) => void): this;
  on(
    event: EVENTS.NETWORK_CHANGE,
    listener: (network: BasicNetwork) => void
  ): this;
  on(event: string, listener: Function): this;
}

class ModEventsEmitter extends EventEmitter {
  constructor() {
    super();
  }
}

export class EventManager extends ModEventsEmitter {
  sdk: Sdk;
  api: Api;
  mount: Mount;

  constructor(sdk: Sdk) {
    super();
    this.sdk = sdk;
    this.api = this.sdk.api;
    this.mount = this.sdk.mount;

    this.api.on(EVENTS.PING, () => this.sdk.emit(EVENTS.PING));

    this.api.on(EVENTS.USER_CHANGE, (user) => {
      this.sdk.emit(EVENTS.USER_CHANGE, user);
      this.sdk.emit(EVENTS.ALL, { type: EVENTS.USER_CHANGE, user });
    });
    this.api.on(EVENTS.NETWORK_CHANGE, (network) => {
      this.sdk.emit(EVENTS.NETWORK_CHANGE, network);
      this.sdk.emit(EVENTS.ALL, { type: EVENTS.NETWORK_CHANGE, network });
    });
    this.api.on(EVENTS.OPEN, () => {
      this.sdk.emit(EVENTS.OPEN);
      this.sdk.emit(EVENTS.ALL, { type: EVENTS.OPEN });
    });
    this.api.on(EVENTS.CLOSE, () => {
      this.sdk.emit(EVENTS.CLOSE);
      this.sdk.emit(EVENTS.ALL, { type: EVENTS.CLOSE });
    });

    this.api.on(EVENTS.SIGNOUT, () => {
      this.sdk.emit(EVENTS.SIGNOUT);
      this.sdk.emit(EVENTS.ALL, { type: EVENTS.SIGNOUT });
    });
  }
}

export default ModEventsEmitter;
