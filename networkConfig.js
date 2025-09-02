export const blockSyncInterval = 1000
export const enabledChains = ['5115']
export default {
  netId1: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 80,
      fast: 50,
      standard: 25,
      low: 8
    },
    nativeCurrency: 'eth',
    currencyName: 'ETH',
    explorerUrl: {
      tx: 'https://etherscan.io/tx/',
      address: 'https://etherscan.io/address/',
      block: 'https://etherscan.io/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Ethereum Mainnet',
    deployedBlock: 9116966,
    rpcUrls: {
      flashbotRPC: {
        name: 'flashbotRPC',
        url: 'https://rpc.flashbots.net'
      },
      tornadoRPC: {
        name: 'Tornado RPC',
        url: 'https://tornadocash-rpc.com/mainnet'
      },
      blockscoutRPC: {
        name: 'blockscoutRPC',
        url: 'https://eth.blockscout.com/api/eth-rpc'
      },
      kyberRPC: {
        name: 'kyberRPC',
        url: 'https://ethereum-mev-protection.kyberengineering.io'
      },
      gasHawkRPC: {
        name: 'GasHawkRPC',
        url: 'https://core.gashawk.io/rpc'
      },
      lavaRPC: {
        name: 'lavaRPC',
        url: 'https://eth1.lava.build'
      }
    },
    multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    routerContract: '0xd90e2f925DA726b50C4Ed8D0Fb90Ad053324F31b',
    registryContract: '0x58E8dCC13BE9780fC42E8723D8EaD4CF46943dF2',
    echoContractAccount: '0x9B27DD5Bb15d42DC224FCD0B7caEbBe16161Df42',
    aggregatorContract: '0xE8F47A78A6D52D317D0D2FFFac56739fE14D1b49',
    tokens: {
      eth: {
        instanceAddress: {
          '0.1': '',
          '1': '',
          '10': '',
          '100': ''
        },
        symbol: 'ETH',
        decimals: 18
      },
      dai: {
        instanceAddress: {
          '100': '',
          '1000': '',
          '10000': '',
          '100000': ''
        },
        tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        symbol: 'DAI',
        decimals: 18,
        gasLimit: '55000'
      },
      cdai: {
        instanceAddress: {
          '5000': '',
          '50000': '',
          '500000': '',
          '5000000': ''
        },
        tokenAddress: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
        symbol: 'cDAI',
        decimals: 8,
        gasLimit: '425000'
      },

      usdc: {
        instanceAddress: {
          '100': '',
          '1000': ''
        },
        tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        symbol: 'USDC',
        decimals: 6,
        gasLimit: '80000'
      },
      usdt: {
        instanceAddress: {
          '100': '',
          '1000': ''
        },
        tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        symbol: 'USDT',
        decimals: 6,
        gasLimit: '100000'
      },

      wbtc: {
        instanceAddress: {
          '0.1': '',
          '1': '',
          '10': ''
        },
        tokenAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        symbol: 'WBTC',
        decimals: 8,
        gasLimit: '85000'
      }
    },
    ensSubdomainKey: 'mainnet-tornado',
    pollInterval: 15,
    constants: {
      GOVERNANCE_BLOCK: 11474695,
      NOTE_ACCOUNT_BLOCK: 11842486,
      ENCRYPTED_NOTES_BLOCK: 14248730,
      MINING_BLOCK_TIME: 15
    },
    'torn.contract.tornadocash.eth': '0x77777FeDdddFfC19Ff86DB637967013e6C6A116C',
    'governance.contract.tornadocash.eth': '0x5efda50f22d34F262c29268506C5Fa42cB56A1Ce',
    'tornado-router.contract.tornadocash.eth': '0xd90e2f925DA726b50C4Ed8D0Fb90Ad053324F31b',
    'staking-rewards.contract.tornadocash.eth': '0x5B3f656C80E8ddb9ec01Dd9018815576E9238c29'
  },
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
