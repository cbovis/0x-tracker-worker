module.exports = {
  // ordered by priority e.g. in ETH/DAI pair DAI is the base token
  BASE_TOKENS: {
    '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359': 'DAI', // DAI Stablecoin
    '0xd9ebebfdab08c643c5f2837632de920c70a56247': 'DAI', // Ethfinex DAI
    '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': 'USDC', // USD Coin
    '0x1a9b2d827f26b7d7c18fec4c1b27c1e8deeba26e': 'USDT', // Ethfinex Tether
    '0x2956356cd2a2bf3202f771f50d3d14a367b48070': 'ETH', // Wrapped Ether
    '0xe495bcacaf29a0eb00fb67b86e9cd2a994dd55d8': 'ETH', // Wrapped Ether
    '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': 'ETH', // Wrapped Ether
    '0x53b04999c1ff2d77fcdde98935bb936a67209e4c': 'ETH', // Veil Ether
    '0xaa7427d8f17d87a28f5e1ba3adbb270badbe1011': 'ETH', // Ethfinex Ether
  },
  SYMBOL_MAPPINGS: {
    DAIW: 'DAI',
    ETHW: 'ETH',
    USDTW: 'USDT',
    'VEIL ETH': 'ETH',
    WETH: 'ETH',
  },
  FILL_STATUS: {
    FAILED: 2,
    PENDING: 0,
    SUCCESSFUL: 1,
  },
  ZRX_TOKEN_ADDRESS: '0xe41d2489571d322189246dafa5ebde1f4699f498',
};
