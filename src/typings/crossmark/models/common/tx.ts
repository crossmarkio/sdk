import {
  Transaction as AMMTransaction,
  TransactionMetadata as AMMTransactionMetadata,
} from 'xrpl-amm';

import {
  Transaction as SidechainTransaction,
  TransactionMetadata as SidechainTransactionMetadata,
} from 'xrpl-sidechain';

import {
  Transaction as MainTransaction,
  TransactionMetadata as MainTransactionMetadata,
} from 'xrpl';

export interface SignInTransaction {
  TransactionType: 'SignIn';
}

export type AllTransactionRequest =
  | SignInTransaction
  | Partial<AMMTransaction>
  | Partial<SidechainTransaction>
  | Partial<MainTransaction>;

export type AllTransactionResponse =
  | Partial<AMMTransactionMetadata>
  | Partial<SidechainTransactionMetadata>
  | Partial<MainTransactionMetadata>;
