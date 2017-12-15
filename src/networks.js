// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
  },
  litecoin: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0
  },
  litecoinXprv: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0
  },
  shadow: {
    messagePrefix: 'unused',
    bip32: {
      public: 0xEE80286A,
      private: 0xEE8031E8
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x7d,
    wif: 0xbf
  },
  shadowtn: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x76C0FDFB,
      private: 0x76C1077A
    },
    pubKeyHash: 0x7f,
    scriptHash: 0xc4,
    wif: 0xff
  },
  clam: {
    messagePrefix: 'unused',
    bip32: {
      public: 0xa8c26d64,
      private: 0xa8c17826
    },
    pubKeyHash: 0x89,
    scriptHash: 0x00, // TODO set this correctly
    wif: 0x85
  },
  crown: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
  },
  dash: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x4c,
    scriptHash: 0x10,
    wif: 0xcc
  },
  maza: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x32,
    scriptHash: 0x09,
    wif: 0xe0
  },
  dashtn: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x8c,
    scriptHash: 0x13,
    wif: 0xef
  },
  game: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x26,
    scriptHash: 0x05,
    wif: 0xa6
  },
  namecoin: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x34,
    scriptHash: 0x00, // TODO set this correctly
    wif: 0x80
  },
  peercoin: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x37,
    scriptHash: 0x00, // TODO set this correctly
    wif: 0xb7
  },
  slimcoin: {
    messagePrefix: 'unused',
    bip32: {
      public: 0xef6adf10,
      private: 0xef69ea80
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x7d,
    wif: 0x46
  },
  slimcointn: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x043587CF,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0x57
  },
  dogecoin: {
    messagePrefix: '\x19Dogecoin Signed Message:\n',
    bip32: {
      public: 0x02facafd,
      private: 0x02fac398
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e
  },
  viacoin: {
    messagePrefix: '\x18Viacoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x47,
    scriptHash: 0x21,
    wif: 0xc7
  },
  viacointestnet: {
    messagePrefix: '\x18Viacoin Signed Message:\n',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x7f,
    scriptHash: 0xc4,
    wif: 0xff
  },
  gamerscoin: {
    messagePrefix: '\x19Gamerscoin Signed Message:\n',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x26,
    scriptHash: 0x05,
    wif: 0xA6
  },
  jumbucks: {
    messagePrefix: '\x19Jumbucks Signed Message:\n',
    bip32: {
      public: 0x037a689a,
      private: 0x037a6460
    },
    pubKeyHash: 0x2b,
    scriptHash: 0x05,
    wif: 0xab
  },
  zetacoin: {
    messagePrefix: '\x18Zetacoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x50,
    scriptHash: 0x09,
    wif: 0xe0
  },
  myriadcoin: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x32,
    scriptHash: 0x00, // TODO set this correctly
    wif: 0xb2
  },
  pivx: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x022d2533,
      private: 0x0221312b
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x0d,
    wif: 0xd4
  },
  pivxtestnet: {
    messagePrefix: 'unused',
    bip32: {
      public: 0x3a8061a0,
      private: 0x3a805837
    },
    pubKeyHash: 0x8b,
    scriptHash: 0x13,
    wif: 0xef
  },
  fujicoin: {
    messagePrefix: '\x19FujiCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x24,
    scriptHash: 0x10,
    wif: 0xa4
  },
  nubits: {
    messagePrefix: '\x18Nu Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x19,
    scriptHash: 0x1a,
    wif: 0x96,
  },
  bgold: {
    messagePrefix: 'unused',
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4
      },
      pubKeyHash: 38,
      scriptHash: 23,
      wif: 128
  },
  bitcoinCashBitbpay: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4
      },
      pubKeyHash: 0x1c,
      scriptHash: 0x28,
      wif: 0x80
  },
  monacoin: {
      messagePrefix: '\x18Monacoin Signed Message:\n',
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4
      },
      pubKeyHash: 0x32,
      scriptHash: 0x37,
      wif: 0xb0
  }
}
