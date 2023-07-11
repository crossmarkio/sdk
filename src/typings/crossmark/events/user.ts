import { EVENTS } from '@typings/extension';
import { BaseEvent } from '@typings/crossmark/events';
import { BasicUser } from '@typings/schemas/user';

export interface UserEvent extends BaseEvent {
  event: EVENTS.USER_CHANGE;
  data: {
    user: BasicUser;
  };
}
