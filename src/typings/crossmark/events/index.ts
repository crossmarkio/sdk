import { TYPES } from '@typings/extension';
import { NetworkEvent } from './network';
import { UserEvent } from './user';

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
}

export interface BaseEvent {
  id: string;
  type: TYPES;
}

export interface GenericEvent extends BaseEvent {
  event: EVENTS;
}

export type EventMessage = GenericEvent | NetworkEvent | UserEvent;
