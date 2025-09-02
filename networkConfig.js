export const blockSyncInterval = 1000
export const enabledChains = ['5115']
export default {
  netId5115: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 225,
      fast: 35,
      standard: 25,
      low: 25
    },
    nativeCurrency: 'cBTC',
    currencyName: 'cBTC',
    explorerUrl: {
      tx: 'https://explorer.testnet.citrea.xyz/tx/',
      address: 'https://explorer.testnet.citrea.xyz/address/',
      block: 'https://explorer.testnet.citrea.xyz/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Citrea Testnet',
    deployedBlock: 14999564,
    echoContractAccount: '0x15967BFC6Fe21123c9239DAC33b7fd3baF5e7a61',
    rpcUrls: {
      citreaRpc: {
        name: 'Citrea RPC',
        url: 'https://rpc.testnet.citrea.xyz'
      }
    },
    tokens: {
      cBTC: {
        instanceAddress: {
          '0.001': '0x4cB16064de3067F7489923B57584cd9CbdeB65fB'
        },
        symbol: 'cBTC',
        decimals: 18
      }
    },
    ensSubdomainKey: 'citrea-tornado',
    pollInterval: 10,
    constants: {
      NOTE_ACCOUNT_BLOCK: 14999564,
      ENCRYPTED_NOTES_BLOCK: 14999564
    },
    'tornado-proxy-light.contract.tornadocash.eth': '0x936b2db56aae20089b50089cF7033D9940af1460',
    'governance.contract.tornadocash.eth': false
  }
}
