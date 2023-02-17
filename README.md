## Idea Objectives 
One stop solution for generating, lending and selling carbon credits.

## Solution 
1. From an end-user perspective, our application will focus on 3 major areas:-
    
    a. Generation of Carbon Credits
    
    b. Allow users to borrow stable coins on Polkadot Substrate network by keeping their Carbon Credits as collateral.
    
    c. Allow users to sell their Carbon Credits in exchange of stable coins on Polkadot Substrate Network.
2. From a macroeconomic perspective, our application will focus on the following:-
3. We, as an organization, can use the accumulated Carbon Credits from user and sell them to organizations (private companies / govt agencies / countries) who need them to offset for their carbon emissions as per The Paris Agreement. 
4. All these transactions will be recorded on the Polkadot Substrate network Blockchain to benefit from the immutable, decentralized ledger technology.

## Generation of Carbon Credits

Carbon Credits can be generated through any trackable source which benefits the environment. Some of the sources which we will be considering (subject to further addition) are:-

1. Step counter - to encourage people to walk and avoid using private vehicles for short distance commute. (E.g. StepN). Every step counts and rewards the users in the form of Carbon Credit Tokens.
2. Tracking use of public transport - Linking public transport ticketing and pass systems to our platform, so that users get rewarded with Carbon Credit Tokens whenever they use public transport.
3. Electric Vehicles - We can partner with electric vehicle manufacturers to install certain IoT devices which can directly send us the distance travelled. Accordingly, the riders can be rewarded with Carbon Credit Tokens.
4. Forest Preservation / Plantation - People / Organizations can participate in activities like tree plantation, forest preservation, lake / river restoration and preservation. Through these activities, we can reward them with Carbon Credit Tokens.
5. Usage of Renewable Energy Sources - People / Organizations can be rewarded for installing renewable sources of energy (Solar, Wind, Hydro, etc.), and for the amount of energy produced through them. 
6. Rewards for Better Agricultural Practices - Farmers can be rewarded with Carbon Credit Tokens, for planting certain types of crops which are better carbon sinks.


## Exchange Platform

1. Our platform will allow users to exchange their Carbon Credit Tokens for EOS Tokens, to enhance the liquidity of the Carbon Credit Tokens.

## B2B Business Model
1. Private companies / Govt organizations (or even countries) need to offset their carbon emissions, in order to adhere to the Paris Climate Agreement.
2. We can present them with a marketplace, to buy these Carbon Credit Tokens from us.

## Why Now?

1. Being aware towards our environment is becoming more and more important every passing day. We need solutions as soon as possible to move towards a carbon efficient ecosystem. This project is our 2 cents towards the bigger goal of becoming carbon neutral as a planet.
2. This will help organizations to become carbon neutral as soon as possible to accomplish the goals of The Paris Agreement. Since we are only 8 years away, this is a high time we start making big efforts now.

![celo-carbon-credits](https://user-images.githubusercontent.com/112708239/219795702-52e85d46-400b-42f5-8d12-7c6291836c87.png)
## The Stack

- Package-Manager: `pnpm`
- Smart Contract Development: `ink!`, `cargo`
- Frontend: `next`
  - Contract Interactions: `polkadot-js`, [`useInkathon` React Hooks](https://github.com/scio-labs/use-inkathon)
  - Styling: `chakra`, `tailwindcss`, `twin.macro`, `emotion`
- Misc:
  - Linting & Formatting: `eslint`, `prettier`, `husky`, `lint-staged`


## Projects using it

Below you find a few projects that use this boilerplate, a variation of it, or have a similar setup that inspired it:

- [AZERO Domains](https://github.com/wottpal/azero.domains) – Domain Name Service for Aleph Zero

## Getting Started

### Frontend

```bash
# 1. Install pnpm (https://pnpm.io/installation)
npm i -g pnpm

# 2. Install dependencies
pnpm install

# 3. Copy & fill environments
# NOTE: Documentation of environment variables can be found in the according `.example` file
# NOTE: Start with only the alephzero-testnet
cp packages/frontend/.env.local.example packages/frontend/.env.local
```

### Contracts

```bash
# 1. Install Rust: https://docs.substrate.io/install/
# NOTE: Leave out the "Compile a Substrate node" part for now
rustup component add rust-src
rustup target add wasm32-unknown-unknown

# 2. Install ink! tooling (https://use.ink/getting-started/setup#ink-cli)
cargo install cargo-contract --force --locked --git https://github.com/paritytech/cargo-contract.git // Don't run
cargo install cargo-dylint dylint-link --force --locked

# 3. Install local substrate-contracts-node (https://github.com/paritytech/substrate-contracts-node)
cargo install contracts-node --force --git https://github.com/paritytech/substrate-contracts-node.git
```

## Development

### Frontend Quickstart

```bash
# NOTE: Can be executed in both, the root-dir or in `packages/frontend/`

# Start Frontend (Next.js)
pnpm dev
```


