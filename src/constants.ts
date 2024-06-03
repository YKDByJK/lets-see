import { PublicKey } from '@solana/web3.js'
import { FAKE_TOKEN_MINT, PoolToken, TokenMeta, makeHeliusTokenFetcher } from 'gamba-react-ui-v2'

// Get RPC from the .env file or default to the public RPC.
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? 'https://mainnet.helius-rpc.com/?api-key=7b99c32d-a41e-4409-bb2d-c1b278627ef4'

// Solana address that will receive fees when somebody plays on this platform
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  'HvX1mNoVH7EaqB6KDdgzsHageuNBvbgrpPvnNcEpcTva'
)

// Gamba explorer URL - Appears in RecentPlays
export const EXPLORER_URL = `https://explorer.gamba.so/`;

// Platform URL - Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'ykdgames.com'

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 0.05 // 1% (1/100 = 0.01)

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.05 // 0.1% (0.1/100 = 0.001)

// Just a helper function
const lp = (tokenMint: PublicKey | string, poolAuthority?: PublicKey | string): PoolToken => ({
  token: new PublicKey(tokenMint),
  authority: poolAuthority !== undefined ? new PublicKey(poolAuthority) : undefined,
})

/**
 * List of pools supported by this platform
 * Make sure the token you want to list has a corresponding pool on https://explorer.gamba.so/pools
 * For private pools, add the creator of the Liquidity Pool as a second argument
 */
export const POOLS = [
  // SOL:
  lp('So11111111111111111111111111111111111111112'),
  // USDC:
  lp('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
  // YKD token:
  lp('BgFhv7WXJameaDeuwW5aSSGYyi6MpxE8yfyC2jYEssyy'),
  // Wormhole:
  lp('85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'),
  
  lp ('JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN'),

]

// The default token to be selected
export const DEFAULT_POOL = POOLS[0]

/**
 * List of token metadata for the supported tokens
 * Alternatively, we can provide a fetcher method to automatically fetch metdata. See TOKEN_METADATA_FETCHER below.
 */
export const TOKEN_METADATA: (Partial<TokenMeta> & {mint: PublicKey})[] = [
  {
    mint: new PublicKey('BgFhv7WXJameaDeuwW5aSSGYyi6MpxE8yfyC2jYEssyy'),
    name: 'YonderKidDreams',
    symbol: 'YKD',
    image: 'https://bafybeig5gxz42kgjncnaerrypi3gywubgszbkawo6ndmi5cs7eegw7b4q4.ipfs.nftstorage.link/',
    baseWager: 1e6,
    decimals: 6,
    usdPrice: 0,
  },
  {
    mint: new PublicKey('85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'),
    name: 'W',
    symbol: 'Wormhole',
    image: 'https://wormhole.com/token.png',
    baseWager: 1e7,
    decimals: 6,
    usdPrice: 0,
  },
  {
    mint: new PublicKey('JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN'), 
    Name:'Jupiter',
    symbol: 'JUP', 
    image: 'https://static.jup.ag/jup/icon.png',
    baseWager: 1e8, 
    decimals: 6,
    usdprice: 0, 
  },

]

/**
 * A method for automatically fetching Token Metadata.
 * Here we create a fetcher that uses Helius metadata API, if an API key exists as an environment variable.
 */
export const TOKEN_METADATA_FETCHER = (
  () => {
    if (import.meta.env.VITE_HELIUS_API_KEY) {
      return makeHeliusTokenFetcher(
        import.meta.env.VITE_HELIUS_API_KEY,
        { dollarBaseWager: 1 },
      )
    }
  }
)()
