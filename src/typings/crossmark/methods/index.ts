import type { SignMethod } from './sign';
import type { IsConnectedMethod } from './isConnected';
import type { IsLockedMethod } from './isLocked';
import type { VersionMethod } from './version';
import type { IsOpenMethod } from './isOpen';
import { EVENTS } from '@typings/extension';

export interface Methods {
  // events
  on(event: EVENTS.PING, listener: () => void): this;
  on(event: EVENTS.SIGNOUT, listener: () => void): this;
  on(event: EVENTS.CLOSE, listener: () => void): this;
  on(event: EVENTS.OPEN, listener: () => void): this;
  on(event: EVENTS.USER_CHANGE, listener: (user: unknown) => void): this;
  on(event: EVENTS.NETWORK_CHANGE, listener: (network: unknown) => void): this;

  sign: SignMethod;
  isConnected: IsConnectedMethod;
  isLocked: IsLockedMethod;
  isOpen: IsOpenMethod;
  verison: VersionMethod;
}

export default Methods;
