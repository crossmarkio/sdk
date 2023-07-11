import { BasicNetwork } from '@typings/schemas/network';
import { BasicUser } from '@typings/schemas/user';

export enum TYPES {
  INIT = 'init',
  REFRESH = 'refresh',
  DISCONNECT = 'disconnect',
  PING = 'ping',
  REQUEST = 'request',
  RESPONSE = 'response',
  UPDATE = 'update',
  EVENT = 'event',
}

export enum COMMANDS {
  VERSION = 'version',
  IS_CONNECTED = 'isConnected',
  IS_LOCKED = 'isLocked',
  OPEN = 'open',
  SIGN = 'sign',
  SIGNANDSUBMIT = 'sign-and-submit',
  SUBMIT = 'submit',
  MANAGER = 'manager',
  ADDRESS = 'address',
  NETWORK = 'network',
  VERIFY = 'verify',
}

export enum EVENTS {
  ACCOUNTS_CHANGED = 'accountsChanged',
  CHAIN_CHANGED = 'chainChanged',
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  MESSAGE = 'message',
  POPUP_MODE = 'popup-mode',
  STATE_UPDATE = 'state-update',
  NETWORK_CHANGE = 'network-change',
  USER_CHANGE = 'user-change',
  OPEN = 'open',
  CLOSE = 'close',
  PING = 'ping',
  SIGNOUT = 'signout',
  ALL = 'all',
}

export interface CatchAllEvent {
  type: EVENTS;
  user?: BasicUser;
  network?: BasicNetwork;
}
