import { NetworkTypes, Protocol } from '../common/networks';

export interface BasicNetwork {
  protocol: Protocol;
  type: NetworkTypes;
  wss: string;
  rpc: string;
}
