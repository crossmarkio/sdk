import type { crossmark } from '@typings/crossmark';
import { sleep } from '@utils/sleep';
import EventEmitter from './events';

class Mount extends EventEmitter {
  crossmark: crossmark | undefined = undefined;
  isMounted = false;
  constructor() {
    super();
    this.loop();
  }

  loop = async () => {
    while (true) {
      if (window.crossmark) {
        this.crossmark = window.crossmark;
        this.isMounted = true;
      }
      await sleep(5000);
    }
  };
}

export default Mount;
