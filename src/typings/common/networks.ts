export enum Protocol {
  xrpl = 'XRPL',
  evm = 'EVM',
  btc = 'BTC',
  bsc = 'BSC',
  ada = 'ADA',
  sol = 'SOL',
}

export const availableProtocols = [Protocol.xrpl, Protocol.evm] as const;

export enum NetworkTypes {
  main = 'main',
  live = 'live',
  test = 'test',
  dev = 'dev',
  hooks = 'hooks',
  experimental = 'experimental',
  sidechain = 'sidechain',
  xls30 = 'xls-30d',
  xls38 = 'xls-38d',
}

export const networkColorMap = {
  [NetworkTypes.main]: 'tw-bg-[#38DBFF]',
  [NetworkTypes.live]: 'tw-bg-[#38FFDB]',
  [NetworkTypes.test]: 'tw-bg-[#DE7EFF]',
  [NetworkTypes.dev]: 'tw-bg-[#FFB648]',
  [NetworkTypes.experimental]: 'tw-bg-[#FF7B9B]',
  [NetworkTypes.sidechain]: 'tw-bg-[#7CFF99]',
  [NetworkTypes.xls30]: 'tw-bg-[#FF9C7C]',
  [NetworkTypes.xls38]: 'tw-bg-[#C34D27]',
  [NetworkTypes.hooks]: 'tw-bg-[#CF4C27]',
};

export const BithompHost = {
  [NetworkTypes.main]: 'https://bithomp.com/explorer',
  [NetworkTypes.test]: 'https://test.bithomp.com/explorer',
  [NetworkTypes.dev]: 'https://dev.bithomp.com/explorer',
  [NetworkTypes.xls30]: 'https://amm.bithomp.com/explorer',
  [NetworkTypes.hooks]: 'https://beta.bithomp.com/explorer',
  [NetworkTypes.live]: 'https://bithomp.com/explorer',

  [NetworkTypes.experimental]: '',
  [NetworkTypes.sidechain]: '',
  [NetworkTypes.xls38]: '',
};

export const XrplfHost = {
  [NetworkTypes.main]: 'https://explorer.xrplf.org',
  [NetworkTypes.test]: 'https://explorer-testnet.xrplf.org',
  [NetworkTypes.hooks]: 'https://hooks-testnet-v3-explorer.xrpl-labs.com',

  [NetworkTypes.dev]: '',
  [NetworkTypes.xls30]: '',
  [NetworkTypes.live]: '',
  [NetworkTypes.experimental]: '',
  [NetworkTypes.sidechain]: '',
  [NetworkTypes.xls38]: '',
};

export const XrplOrgHost = {
  [NetworkTypes.main]: 'https://livenet.xrpl.org',
  [NetworkTypes.test]: 'https://testnet.xrpl.org',
  [NetworkTypes.dev]: 'https://devnet.xrpl.org',

  [NetworkTypes.xls30]: '',
  [NetworkTypes.hooks]: '',
  [NetworkTypes.live]: '',
  [NetworkTypes.experimental]: '',
  [NetworkTypes.sidechain]: '',
  [NetworkTypes.xls38]: '',
};

export const EvmSideChainHost = {
  [NetworkTypes.dev]: 'https://evm-sidechain.xrpl.org',

  [NetworkTypes.main]: '',
  [NetworkTypes.test]: '',
  [NetworkTypes.xls30]: '',
  [NetworkTypes.hooks]: '',
  [NetworkTypes.live]: '',
  [NetworkTypes.experimental]: '',
  [NetworkTypes.sidechain]: '',
  [NetworkTypes.xls38]: '',
};

export enum XRPLExplorers {
  bithomp = 'bithomp',
  xrplorg = 'xrpl.org',
  xrplf = 'xrplf',
}

export enum EVMExplorers {
  evmSideChain = 'evm-sidechain',
}

export const ExplorerAddressPath = {
  [XRPLExplorers.bithomp]: '',
  [XRPLExplorers.xrplorg]: '/address',
  [XRPLExplorers.xrplf]: '',
  [EVMExplorers.evmSideChain]: '/address',
};

export const ExplorerTxPath = {
  [XRPLExplorers.bithomp]: '',
  [XRPLExplorers.xrplorg]: '/transactions',
  [XRPLExplorers.xrplf]: '/tx',
  [EVMExplorers.evmSideChain]: '/tx',
};

export type availableExplorers = XRPLExplorers | EVMExplorers;
