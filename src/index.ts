import { Scheme } from '@services/proxy';
import Sdk from './services';
import Api from '@services/api';
import Browser from '@services/browser';
import Env from '@services/env';

import EventEmitter from '@services/events';

export { Api, EventEmitter, Browser, Env };

export default new Proxy(new Sdk(), Scheme);
