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


