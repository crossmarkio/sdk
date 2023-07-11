import { EVENTS } from '@typings/extension';
import { BaseEvent } from '@typings/crossmark/events';
import { BasicNetwork } from '@typings/schemas/network';

export interface NetworkEvent extends BaseEvent {
  event: EVENTS.NETWORK_CHANGE;
  data: {
    network: BasicNetwork;
  };
}
