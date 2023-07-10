import { Scheme } from '@services/proxy';
import Sdk from './services';

export default new Proxy(new Sdk(), Scheme);
