import type { Transaction } from "xrpl";

import type {
  SignInputOpts,
  SignInTransaction,
  SignOutput,
} from "../models/sign";

export type SignMethod = (
  tx: Transaction | SignInTransaction,
  opts?: SignInputOpts
) => Promise<SignOutput>;
