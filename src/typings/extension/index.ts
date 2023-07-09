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
  MANAGER = 'manager',
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

export enum TARGETS {
  CONTENT = 'content',
  BG = 'bg',
  POP = 'pop',
}

export interface ExtMessage {
  id: string;
  type: TYPES;
  target: TARGETS;
  event?: EVENTS;
  command?: COMMANDS;
  payload?: any;
  data?: any;
}

export interface CleanExtMessage {
  id: string;
  type: TYPES;
  target?: TARGETS;
  event?: EVENTS;
  command?: COMMANDS;
  payload?: any;
  data?: { isError?: boolean; isRejected?: boolean; address?: string };
}
