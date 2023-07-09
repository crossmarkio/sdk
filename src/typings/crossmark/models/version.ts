import type { GeneralOutput } from './common/output';

export type VersionInput = void;

export interface VersionOutput extends GeneralOutput {
  misc?: unknown;
}
