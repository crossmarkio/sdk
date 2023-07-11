import Api from '@services/api';

declare global {
  interface Window {
    crossmark: Api;
  }
}

export type crossmark = Api;
