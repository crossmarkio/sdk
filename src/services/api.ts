import { v4 as uuid } from 'uuid';

import { ExtMessage, COMMANDS, TYPES, EVENTS } from '@typings/extension';

import EventEmitter from './events';
import { GeneralResponse } from '@typings/crossmark/models/common/response';

interface ActiveRequest {
  resolve: (value: any) => void;
  reject: (value: any) => void;
}

interface UniqueExtRequest {
  type: TYPES.REQUEST;
  command: COMMANDS;
  id: string;
  data?: any;
}

interface ExtRequest {
  command: COMMANDS;
  data?: any;
}

class Api extends EventEmitter {
  active = new Map<string, ActiveRequest>();
  uuid: string;
  connected: boolean;
  target: string | undefined;
  timestamp: number | undefined;
  activeRequests: any;

  constructor() {
    super();
    this.uuid = uuid();
    this.target = window.origin;
    this.connected = false;

    this.timestamp = Date.now();
    window.addEventListener('message', this.#handleMsg);
  }

  #handleMsg = (event: MessageEvent<any>) => {
    // We only accept messages from ourselves
    if (
      event.source !== window ||
      !event.source ||
      event.origin !== window.location.origin
    )
      return;

    if (!event.data) return;
    let type = 'type' in event.data && event.data.type;
    let resp = 'response' in event.data && event.data.response;

    if (type === TYPES.UPDATE) return;
    if (type === TYPES.EVENT && 'type' in event.data)
      return this.#handleEvent(event.data);

    if (type === 'request') return;

    if (
      'response' in event.data &&
      resp &&
      resp.type === TYPES.RESPONSE &&
      this.active[resp?.id]
    ) {
      return this.active.get(resp.id)?.resolve(event.data);
    }
  };

  #handleEvent = (data: ExtMessage) => {
    if (data.event === EVENTS.PING) this.emit(EVENTS.PING);

    if (data.event === EVENTS.CLOSE) this.emit(EVENTS.CLOSE);
    if (data.event === EVENTS.OPEN) this.emit(EVENTS.OPEN);
    if (data.event === EVENTS.SIGNOUT) this.emit(EVENTS.SIGNOUT);

    if (data.event === EVENTS.USER_CHANGE)
      this.emit(EVENTS.USER_CHANGE, data.data);

    if (data.event === EVENTS.NETWORK_CHANGE)
      this.emit(EVENTS.NETWORK_CHANGE, data.data);
  };

  #fire = async (data: UniqueExtRequest) => {
    // Await response from operator, holding function response
    let response = await new Promise((resolve, reject) => {
      this.active.set(data.id, {
        resolve: resolve,
        reject: reject,
      });
      //document.dispatchEvent(event);
      window.postMessage(data);
    });

    // Remove resolved object from active requests
    delete this.active[data.id];

    return response;
  };

  public awaitRequest = async (request: ExtRequest) => {
    try {
      let res: any = (await this.#fire({
        type: TYPES.REQUEST,
        id: uuid(),
        ...request,
      })) as UniqueExtRequest;
      return res as GeneralResponse;
    } catch (e) {
      throw e;
    }
  };

  public request = (request: ExtRequest) => {
    try {
      let id = uuid();
      this.#fire({
        type: TYPES.REQUEST,
        id,
        ...request,
      } as UniqueExtRequest);
      return id;
    } catch (e) {
      throw e;
    }
  };
}

export default Api;
