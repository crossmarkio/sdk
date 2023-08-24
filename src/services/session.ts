import EventEmitter, { EventManager } from './events';

import Sdk from '.';
import { EVENTS } from '@typings/extension';
import { BasicNetwork } from '@typings/schemas/network';
import { BasicUser } from '@typings/schemas/user';
import { Response } from '@typings/crossmark/models';

const enum State {
  active = 'active',
  unactive = 'unactive',
  error = 'error',
}

class Session extends EventEmitter {
  sdk: Sdk;
  user?: BasicUser;
  network?: BasicNetwork;
  address?: string;
  isOpen: boolean = false;
  lastPing?: number;

  state: State = State.unactive;

  responses = new Map<string, Response>();

  constructor(sdk: Sdk) {
    super();
    this.sdk = sdk;
    this.sdk.on(EVENTS.PING, this.handlePing);
    this.sdk.on(EVENTS.RESPONSE, this.handleResponse);
    this.sdk.on(EVENTS.USER_CHANGE, this.handleUserChange);
    this.sdk.on(EVENTS.NETWORK_CHANGE, this.handleNetworkChange);
    this.sdk.on(EVENTS.OPEN, this.handleOpen);
    this.sdk.on(EVENTS.CLOSE, this.handleClose);
    this.sdk.on(EVENTS.SIGNOUT, this.handleSignOut);
  }

  handlePing = () => (this.lastPing = Date.now());

  handleClose = () => (this.isOpen = false);

  handleOpen = () => (this.isOpen = true);

  handleSignOut = () => {
    this.state = State.unactive;
    this.address = undefined;
  };

  handleNetworkChange = (network: BasicNetwork) => {
    this.network = network;
  };

  handleUserChange = (user: BasicUser) => {
    this.user = user;
    this.address = undefined;
  };

  handleResponse = (resp: Response) => {
    if ('address' in resp.response.data) {
      this.state = State.active;
      this.address = resp.response.data.address;
    }
    if ('network' in resp.response.data) {
      this.network = resp.response.data.network;
    }
    this.responses.set(resp.request.id, resp);
  };
}

export default Session;
