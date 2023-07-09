import type {
  IsConnectedInput,
  IsConnectedOutput,
} from '../models/isConnected1';

export type IsConnectedMethod = (
  input: IsConnectedInput
) => Promise<IsConnectedOutput>;
