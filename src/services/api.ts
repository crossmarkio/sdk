import { uuid } from '../utils/identifiers';

import { TYPES, EVENTS } from '../typings/extension/index';

import EventEmitter from './events';
import { Request, Response } from '../typings/crossmark/models/index';
import { EventMessage } from '../typings/crossmark/events/index';
import { NetworkEvent } from '../typings/crossmark/events/network';
import { UserEvent } from '../typings/crossmark/events/user';

interface ActiveRequest {
  resolve: (value: unknown) => void;
  reject: (value: unknown) => void;
}

class Api extends EventEmitter {
  [x: string]: unknown;
  active = new Map<string, ActiveRequest>();
  uuid: string;
  connected: boolean;
  target: string | undefined;
  timestamp: number | undefined;

  constructor() {
    super();
    this.uuid = uuid();
    this.connected = false;

    this.timestamp = Date.now();

    if (typeof window !== 'undefined') {
      this.target = window.origin;
      window.addEventListener('message', this.#handleMsg);
    }
  }

  #handleMsg = (event: MessageEvent) => {
    try {
      // We only accept messages from ourselves
      if (!window) return;
      if (
        window &&
        (event.source !== window ||
          !event.source ||
          event.origin !== window.location.origin)
      )
        return;

      if (!event.data) return;
      let type = event.data?.type || undefined;
      let resp = event.data?.response || undefined;

      if (type === TYPES.UPDATE) return;
      if (type === TYPES.EVENT && 'type' in event.data)
        return this.#handleEvent(event.data);

      if (type === 'request') return;

      if (resp && resp.type === TYPES.RESPONSE)
        this.emit(EVENTS.RESPONSE, event.data as Response);

      if (resp && resp.type === TYPES.RESPONSE && this.active.get(resp.id)) {
        return this.active.get(resp.id)?.resolve(event.data);
      }
    } catch (e) {
      return;
    }
  };

  #handleEvent = (e: EventMessage) => {
    if (e.event === EVENTS.PING) this.emit(EVENTS.PING);

    if (e.event === EVENTS.CLOSE) this.emit(EVENTS.CLOSE);
    if (e.event === EVENTS.OPEN) this.emit(EVENTS.OPEN);
    if (e.event === EVENTS.SIGNOUT) this.emit(EVENTS.SIGNOUT);

    if (e.event === EVENTS.USER_CHANGE)
      this.emit(EVENTS.USER_CHANGE, (e as UserEvent).data);

    if (e.event === EVENTS.NETWORK_CHANGE)
      this.emit(EVENTS.NETWORK_CHANGE, (e as NetworkEvent).data);
  };

  #fire = async (request: Request) => {
    // Await response from operator, holding function response
    let response = await new Promise((resolve, reject) => {
      this.active.set(request.id, {
        resolve: resolve,
        reject: reject,
      });
      //document.dispatchEvent(event);
      if (window) window.postMessage(request);
    });

    // Remove resolved object from active requests
    this.active.delete(request.id);

    return response;
  };

  public awaitRequest = async (request: Partial<Request>) => {
    try {
      let res = await this.#fire({
        type: TYPES.REQUEST,
        id: uuid(),
        ...request,
      } as Request);
      return res as Response;
    } catch (e) {
      throw e;
    }
  };

  public request = (request: Partial<Request>) => {
    try {
      let id = uuid();
      this.#fire({
        type: TYPES.REQUEST,
        id,
        ...request,
      } as Request);
      return id;
    } catch (e) {
      throw e;
    }
  };
}

export default Api;
