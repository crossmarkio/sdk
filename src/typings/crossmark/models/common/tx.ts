import {
  TxResponse as AMMTxResponse,
  SubmitResponse as AMMSubmitResponse,
  Transaction as AMMTransaction,
} from '@crossmarkio/xrpl-amm';

import {
  TxResponse as SidechainTxResponse,
  SubmitResponse as SidechainSubmitResponse,
  Transaction as SidechainTransaction,
} from '@crossmarkio/xrpl-sidechain';

import {
  TxResponse as MainTxResponse,
  SubmitResponse as MainSubmitResponse,
  Transaction as MainTransaction,
} from 'xrpl';

export interface SignInTransaction {
  TransactionType: 'SignIn';
}

export type AllTxResponse =
  | MainTxResponse
  | SidechainTxResponse
  | AMMTxResponse;

export type AllSubmitResponse =
  | MainSubmitResponse
  | SidechainSubmitResponse
  | AMMSubmitResponse;

export type SignTransaction =
  | Partial<AMMTransaction>
  | Partial<SidechainTransaction>
  | Partial<MainTransaction>;

export type AllTransactionRequest =
  | SignInTransaction
  | Partial<AMMTransaction>
  | Partial<SidechainTransaction>
  | Partial<MainTransaction>;

export type AllTransactionResponse =
  | AMMTxResponse
  | MainTxResponse
  | SidechainTxResponse;
