import type { crossmark } from '../typings/crossmark/index';
import { sleep } from '../utils/sleep';
import EventEmitter from './events';
import Sdk from './index';

// events
declare interface Mount {
  on(event: 'detected', listener: () => void): this;
  on(event: string, listener: Function): this;
}

class Mount extends EventEmitter {
  isCrossmark?: boolean;
  crossmark: crossmark | undefined = undefined;
  #sdk: Sdk;
  constructor(sdk: Sdk) {
    super();
    this.#sdk = sdk;
    this.loop(10000);
  }

  loop = async (timout: number) =>
    new Promise(async (resolve, _reject) => {
      if (this.isCrossmark) resolve(true);

      setTimeout(() => {
        resolve(false);
      }, timout);

      while (true) {
        if (
          typeof window !== 'undefined' &&
          window.xrpl &&
          window.xrpl.isCrossmark
        ) {
          this.isCrossmark = window.xrpl.isCrossmark;
          window.crossmark = Object.assign({}, window?.crossmark, this.#sdk);
          resolve(true);
        }
        await sleep(500);
      }
    }) as Promise<boolean>;
}

export default Mount;
