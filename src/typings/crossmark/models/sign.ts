import type { GeneralResponse } from './common/response';

export interface SignInputOpts {
  isAMM?: boolean;
  description?: string;
}

export interface SignInTransaction {
  TransactionType: 'SignIn';
}

export interface SignOutput extends GeneralResponse {
  misc?: unknown;
}
