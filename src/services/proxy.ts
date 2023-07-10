import Env from './env';

export const Scheme = {
  get: (target: { [x: string]: any }, prop: string) => {
    if (prop.startsWith('_')) throw new Error('Access denied');

    // Catch and throw if trying to use sdk from a mobile device
    if (Env.isMobile) throw new Error('Crossmark only available from desktop');

    let value = target[prop];
    return typeof value === 'function' ? value.bind(target) : value; // (*)
  },
  set: (target: { [x: string]: any }, prop: string, val: any) => {
    // to intercept property writing
    if (prop.startsWith('_')) {
      throw new Error('Access denied');
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty: (target: { [x: string]: any }, prop: string) => {
    // to intercept property deletion
    if (prop.startsWith('_')) {
      throw new Error('Access denied');
    } else {
      delete target[prop];
      return true;
    }
  },
  ownKeys: (target: {}) => {
    // to intercept property list
    return Object.keys(target).filter((key) => !key.startsWith('_'));
  },
};
