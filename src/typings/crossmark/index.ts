import Api from '@services/api';
import Sdk from '@services/index';

declare global {
  interface Window {
    xrpl: {
      isCrossmark?: boolean;
      crossmark: Api;
    };
    crossmark: Sdk;
  }
}

export type crossmark = Api;
