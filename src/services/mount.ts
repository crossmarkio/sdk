import type { crossmark } from '@typings/crossmark';
import { sleep } from '@utils/sleep';
import EventEmitter from './events';

class Mount extends EventEmitter {
  crossmark: crossmark | undefined = undefined;
  isMounted = false;
  constructor() {
    super();
    this.loop(10000);
  }

  loop = async (timout: number) =>
    new Promise(async (resolve, _reject) => {
      if (this.isMounted) resolve(true);

      setTimeout(() => {
        resolve(false);
      }, timout);

      while (true) {
        if (typeof window !== 'undefined' && window.crossmark) {
          this.crossmark = window.crossmark;
          this.isMounted = true;
          resolve(true);
        }
        await sleep(500);
      }
    }) as Promise<boolean>;
}

export default Mount;
