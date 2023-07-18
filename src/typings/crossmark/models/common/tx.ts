import {
  TxResponse as AMMTransactionResponse,
  Transaction as AMMTransaction,
  TransactionMetadata as AMMTransactionMetadata,
} from '@crossmarkio/xrpl-amm';

import {
  TxResponse as SidechainTransactionResponse,
  Transaction as SidechainTransaction,
  TransactionMetadata as SidechainTransactionMetadata,
} from '@crossmarkio/xrpl-sidechain';

import {
  TxResponse as MainTransactionResponse,
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
  | MainTransactionResponse
  | SidechainTransactionResponse
  | AMMTransactionResponse;
