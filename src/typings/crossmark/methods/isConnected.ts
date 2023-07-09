import type {
  IsConnectedInput,
  IsConnectedOutput,
} from '../models/isConnected';

export type IsConnectedMethod = (
  input: IsConnectedInput
) => Promise<IsConnectedOutput>;
