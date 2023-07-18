import {
  TxResponse as AMMTransactionResponse,
  Transaction as AMMTransaction,
} from '@crossmarkio/xrpl-amm';

import {
  TxResponse as SidechainTransactionResponse,
  Transaction as SidechainTransaction,
} from '@crossmarkio/xrpl-sidechain';

import {
  TxResponse as MainTransactionResponse,
  Transaction as MainTransaction,
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
